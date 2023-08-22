import { ReactElement } from "react";
import { useStore } from "../../stores/RootStore";
import BusinessObjective from "./BusinessObjective";
import { Button, Typography } from "@mui/material";
import Colors from "../../core/ColorPalette";
import PlusIcon from "../../assets/icons/avertro_plus";

const BusinessObjectiveList = (): ReactElement => {
  const { StrategyStore } = useStore();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>
      {
        StrategyStore.objectives.map((objective, key) => (
          <div style={{ paddingBottom: '1rem' }} key={key}>
            <BusinessObjective
              content={objective}
              key={key}
              updateObjective={StrategyStore.updateObjectiveByKey}
            />
          </div>
        ))
      }
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button color="primary" variant="contained" sx={{
          ml: '1.75rem',
          py: '0.75rem',
          px: '1.25rem',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '5px',
        }}>
          <PlusIcon
            size="1rem"
            primaryColor={Colors.AVERTRO_WHITE}
            secondaryColor={Colors.AVERTRO_BLUE}
          />
          <Typography sx={{
            pl: '0.5rem',
            fontFamily: 'Inter',
            fontWeight: 500,
            color: Colors.AVERTRO_WHITE,
          }}>
            Add Objective
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default BusinessObjectiveList;
