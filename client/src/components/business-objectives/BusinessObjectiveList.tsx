import { observer } from "mobx-react-lite"
import { ReactElement } from "react";
import { useStore } from "../../stores/RootStore";
import BusinessObjective from "./BusinessObjective";
import { Button, Typography } from "@mui/material";
import Colors from "../../core/ColorPalette";
import PlusIcon from "../../assets/icons/avertro_plus_icon";

const BusinessObjectiveList = observer((): ReactElement => {
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
              index={key}
              updateObjective={StrategyStore.updateObjectiveByKey}
              deleteObjective={StrategyStore.deleteObjective}
            />
          </div>
        ))
      }
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button
          color="primary"
          disabled={StrategyStore.objectives.length >= StrategyStore.maxObjectiveCount}
          variant="contained"
          sx={{
            ml: '1.75rem',
            py: '0.75rem',
            px: '1.25rem',
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: '5px',
          }}
          onClick={StrategyStore.addObjective}
        >
          <PlusIcon
            size="1rem"
            primaryColor={Colors.AVERTRO_WHITE}
            secondaryColor={(StrategyStore.objectives.length >= StrategyStore.maxObjectiveCount) ? Colors.TEXT_BORDER : Colors.AVERTRO_BLUE}
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
  )
});

export default BusinessObjectiveList;
