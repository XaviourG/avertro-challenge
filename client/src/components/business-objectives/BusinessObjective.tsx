import { ReactElement, useCallback } from "react";
import { Typography, TextField, Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import Colors from "../../core/ColorPalette";
import DynamicTextFieldList from "./DynamicTextFieldList";

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

  const updateFields = useCallback((fields: string[]) => {
    const update = content;
    update.keyMeasures = fields;
    updateObjective(update, key);
  }, [content, key]);

  return (
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
          fullWidth
          value={content.title}
          sx={{
            pr: '1.5rem'
          }}
        />

        <DynamicTextFieldList
          title={'Key Measures'}
          addFieldText={'Add additional key measure'}
          fields={content.keyMeasures}
          updateFields={updateFields}
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
    </Grid>
  );
}

export default BusinessObjective;
