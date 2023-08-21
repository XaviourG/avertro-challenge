import { ReactElement } from "react";
import { Typography, TextField, Grid } from "@mui/material";
import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import Colors from "../../core/ColorPalette";

interface Props {
  content: BusinessObjectiveDTO,
  key: number,
}

const BusinessObjective = ({
  content,
  key,
}: Props): ReactElement => {

  return (
    <Grid container sx={{
      border: `1px solid ${Colors.TEXT_BORDER}`,
      borderRadius: '10px',
      padding: '2rem',
      paddingTop: '1.5rem',
    }}>
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" sx={{ pb: '0.5rem' }}>
          {`Objective ${key}`}
        </Typography>
        <TextField fullWidth />

        <div style={{
          paddingTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            Key Measures
          </Typography>
          <div style={{
            display: 'flex',
            cursor: 'pointer',
          }}>
            <Typography variant="h3">
              Add additional key measure
            </Typography>
          </div>
        </div>
        <TextField fullWidth />
      </Grid>

      <Grid item xs={12} lg={6}>

      </Grid>
    </Grid>
  );
}

export default BusinessObjective;
