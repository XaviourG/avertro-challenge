import { ReactElement } from "react";
import { useStore } from "../stores/RootStore";
import TabbedDisplay from "../components/tabbed-display/TabbedDisplay";

const SecurityStrategyAuditPage = (): ReactElement => {
  const { StrategyStore } = useStore();

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <div style={{
      width: '100%',
      maxWidth: '90em',
      padding: '2rem',
    }}>
      <TabbedDisplay
        startTab={1}
        tabs={[
          {title: 'Mission & Vision', element: <>MISSION TAB</>},
          {title: 'Strategic Business Objectives', element: <>OBJECTIVES TAB</>}
        ]}
      />
    </div>
    </div>
}

export default SecurityStrategyAuditPage;
