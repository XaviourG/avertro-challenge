import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import Colors from "../../core/ColorPalette";

interface Props {
  removeForm: () => void,
}

const ObjectiveControllButtons = ({
  removeForm,
}: Props): ReactElement => {
  const [updating, setUpdating] = useState(false);

  const simulateUpdate = async () => {
    setUpdating(true);
    await new Promise(delay => setTimeout(delay, 1000));
    setUpdating(false);
  }

  return (
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
          width: '6rem',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '5px',
          color: Colors.AVERTRO_WHITE
        }} onClick={simulateUpdate}>
          {
            updating
            ?
            <CircularProgress
              size={'1rem'}
              color={'inherit'}
            />
            :
            <Typography sx={{
              fontFamily: 'Inter',
              fontWeight: 500,
              color: Colors.AVERTRO_WHITE,
            }}>
              Update
            </Typography>
          }
        </Button>
      </div>
    </Grid>
  );
}

export default ObjectiveControllButtons;