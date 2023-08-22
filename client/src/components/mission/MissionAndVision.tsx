import { Button, Grid, TextField, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useStore } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
import Colors from "../../core/ColorPalette";
import MissionContentDTO, { ClientSizeFactor, ExperienceFactor, WorkTypeFactor } from "../../models/DTOs/MissionContentDTO";
import AvertroSelector from "../selector/AvertroSelector";

const MissionAndVision = observer((): ReactElement => {
  const { StrategyStore } = useStore();
  const [formData, setFormData] = useState<MissionContentDTO>(StrategyStore.mission);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    StrategyStore.updateMission({ ...formData, [name]: value });
  }

  const onChangeSelector = (
    selection: string,
    name: string,
  ) => {
    const data = formData;
    data.factors = ({...formData.factors, [name]: selection})
    setFormData(data);
    StrategyStore.updateMission(data);
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //setFormState(ObjectivesFormValidator(formData));
    StrategyStore.updateMission(formData);
  }

  useEffect(() => {
    setFormData(StrategyStore.mission);
  }, [StrategyStore.mission]);

  const {
    mission,
    history,
    factors,
  } = formData;

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container
        px={{ xs: '1rem', lg: '2rem'}}
        py={{ xs: '1.5rem', lg: '2rem'}}
      >
        <Grid item xs={12} lg={7} pr={{sx: '0rem', lg: '1rem'}}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {'The Mission'}
          </Typography>
          <TextField
            name='mission'
            type='text'
            onChange={onChangeInput}
            value={mission}
            fullWidth
            multiline
            rows={2}
            // error={formState.errors.title}
            // helperText={formState.errorText.title}
          />
          <Typography variant="h2" sx={{ pb: '0.5rem', pt: '2rem' }}>
            {'Past Security History'}
          </Typography>
          <TextField
            name='history'
            type='text'
            onChange={onChangeInput}
            value={history}
            fullWidth
            multiline
            rows={4}
            // error={formState.errors.title}
            // helperText={formState.errorText.title}
          />
        </Grid>

        <Grid item xs={12} lg={5}
          pl={{xs: '0rem', lg: '1rem'}}
          pt={{xs: '2rem', lg: '0rem'}}  
        >
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {'General Factors'}
          </Typography>
          <Typography variant="h3" sx={{ pb: '0.25rem' }}>
            {'Client Experience Level'}
          </Typography>
          <AvertroSelector
            name='experience'
            value={factors.experience}
            options={ExperienceFactor}
            select={onChangeSelector}
          />
          <Typography variant="h3" sx={{ pb: '0.25rem', pt: '0.75rem' }}>
            {'Client Organisation Size'}
          </Typography>
          <AvertroSelector
            name='clientSize'
            value={factors.clientSize}
            options={ClientSizeFactor}
            select={onChangeSelector}
          />
          <Typography variant="h3" sx={{ pb: '0.25rem', pt: '0.75rem' }}>
            {'Project Work Type'}
          </Typography>
          <AvertroSelector
            name='workType'
            value={factors.workType}
            options={WorkTypeFactor}
            select={onChangeSelector}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{
            display: 'flex',
            justifyContent: 'end',
            paddingTop: '1.125rem',
          }}>
            <Button color="error" variant="outlined" sx={{
              py: '0.75rem',
              px: '1.25rem',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '5px',
            }} onClick={StrategyStore.resetMission}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                color: Colors.AVERTRO_RED,
              }}>
                Reset
              </Typography>
            </Button>
            <Button type="submit" color="primary" variant="contained" sx={{
              ml: '1.75rem',
              py: '0.75rem',
              px: '1.25rem',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '5px',
            }}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                color: Colors.AVERTRO_WHITE,
              }}>
                Update
              </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
});

export default MissionAndVision;
