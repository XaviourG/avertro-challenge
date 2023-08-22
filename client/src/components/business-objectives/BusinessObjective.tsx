import { observer } from "mobx-react-lite"
import { ReactElement, useEffect, useState } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";
import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import Colors from "../../core/ColorPalette";
import DynamicTextFieldList from "../dynamic-text-field-list/DynamicTextFieldList";
import AvertroDatePicker from "../date-picker/AvertroDatePicker";
import { useStore } from "../../stores/RootStore";
import BusinessObjectiveFormState, { EmptyFormState } from "../../models/DTOs/BusinessObjectiveFormState";
import ObjectivesFormValidator from "./ObjectivesFormValidator";

interface Props {
  content: BusinessObjectiveDTO,
  index: number,
  updateObjective: (objective: BusinessObjectiveDTO, key: number) => void,
  deleteObjective: (key: number) => void,
}

const BusinessObjective = observer(({
  content,
  index,
  updateObjective,
  deleteObjective,
}: Props): ReactElement => {
  const { StrategyStore } = useStore();

  const [formData, setFormData] = useState<BusinessObjectiveDTO>(content);
  const [formState, setFormState] = useState<BusinessObjectiveFormState>(EmptyFormState);

  const removeForm = () => {
    StrategyStore.deleteObjective(index);
  }

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    updateObjective({ ...formData, [name]: value }, index);
  }

  const onChangeDate = (
    value: Date | null,
    fieldName: string,
  ) => {
    if (!['startDate', 'endDate'].includes(fieldName)) {
      throw new Error('Illegal Input Assertion')
    }
    setFormData({ ...formData, [fieldName]: value });
    updateObjective({ ...formData, [fieldName]: value }, index);
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(ObjectivesFormValidator(formData));
    updateObjective(formData, index);
  }

  const onKeyMeasureChange = (fields: string[]) => {
    setFormData({ ...formData, keyMeasures: fields });
  }

  const {
    title,
    keyMeasures,
    startDate,
    endDate,
  } = formData;
  
  useEffect(() => {
    setFormData(StrategyStore.objectives[index]);
  }, [StrategyStore.objectives, index]);

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container sx={{
        border: `1px solid ${Colors.TEXT_BORDER}`,
        borderRadius: '10px',
        padding: '2rem',
        paddingTop: '1.5rem',
      }}>
        <Grid item xs={12} lg={6} pr={{ xs: '0rem', lg: '0rem' }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {`Objective ${index+1}`}
          </Typography>
          <TextField
            name='title'
            type='text'
            onChange={onChangeInput}
            value={title}
            fullWidth
            multiline
            sx={{
              pr: '1.5rem'
            }}
            error={formState.errors.title}
            helperText={formState.errorText.title}
          />

          <DynamicTextFieldList
            title={'Key Measures'}
            addFieldText={'Add additional key measure'}
            fields={keyMeasures}
            maxFields={3}
            updateFields={onKeyMeasureChange}
            error={formState.errors.keyMeasures}
            helperText={formState.errorText.keyMeasures}
          />
        </Grid>

        <Grid item xs={12} lg={3} pl={{ xs: '0rem', lg: '1.5rem' }}
        pr={{ xs: '1.5rem', lg: '0rem'}}
          pt={{ xs: '1.25rem', lg: '0rem' }}>
          <AvertroDatePicker
            title='Start Date'
            name='startDate'
            value={startDate}
            onChange={onChangeDate}
            maxDate={endDate}
          />
        </Grid>

        <Grid item xs={12} lg={3} pl={{ xs: '0rem', lg: '1.5rem' }}
          pr={{ xs: '1.5rem', lg: '0rem'}}
          pt={{ xs: '1.25rem', lg: '0rem' }}>
          <AvertroDatePicker
            title='End Date'
            name='endDate'
            value={endDate}
            onChange={onChangeDate}
            minDate={startDate}
          />
        </Grid>
      
        <Grid item xs={12} pr={{ xs: '1.5rem', lg: '0rem'}}>
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
            }} onClick={removeForm}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                color: Colors.AVERTRO_RED,
              }}>
                Delete
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

export default BusinessObjective;
