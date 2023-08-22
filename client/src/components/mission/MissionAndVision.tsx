import { Button, Grid, TextField, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useStore } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
import Colors from "../../core/ColorPalette";
import MissionContentDTO from "../../models/DTOs/MissionContentDTO";

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
      <Grid container sx={{p: '2rem'}}>
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

        <Grid item xs={12} lg={5} pl={{sx: '0rem', lg: '1rem'}}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {'General Factors'}
          </Typography>
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
