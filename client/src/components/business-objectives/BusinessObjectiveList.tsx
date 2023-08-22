import { ReactElement } from "react";
import { useStore } from "../../stores/RootStore";
import BusinessObjective from "./BusinessObjective";

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
    </div>
  );
}

export default BusinessObjectiveList;
