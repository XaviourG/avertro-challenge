import { ReactElement, useCallback, useState } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import Colors from "../../core/ColorPalette";
import DynamicTextFieldList from "../dynamic-text-field-list/DynamicTextFieldList";

interface Props {
  content: BusinessObjectiveDTO,
  key: number,
  updateObjective: (objective: BusinessObjectiveDTO, key: number) => void,
}

const BusinessObjective = ({
  content,
  key,
  updateObjective,
}: Props): ReactElement => {
  const [formData, setFormData] = useState<BusinessObjectiveDTO>(content);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container sx={{
        border: `1px solid ${Colors.TEXT_BORDER}`,
        borderRadius: '10px',
        padding: '2rem',
        paddingTop: '1.5rem',
      }}>
        <Grid item xs={12} lg={6} pr={{ xs: '0rem', lg: '2rem' }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {`Objective ${key}`}
          </Typography>
          <TextField
            name='title'
            type='text'
            onChange={onChangeInput}
            value={title}
            fullWidth
            sx={{
              pr: '1.5rem'
            }}
          />

          <DynamicTextFieldList
            title={'Key Measures'}
            addFieldText={'Add additional key measure'}
            fields={keyMeasures}
            updateFields={onKeyMeasureChange}
          />
        </Grid>

        <Grid item xs={12} lg={3} px={{ xs: '0rem', lg: '0.75rem' }}
          pt={{ xs: '1.25rem', lg: '0rem' }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            Start Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: '100%' }}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} lg={3} px={{ xs: '0rem', lg: '0.75rem' }}
          pt={{ xs: '1.25rem', lg: '0rem' }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            End Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: '100%' }}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
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
            }}>
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
}

export default BusinessObjective;
