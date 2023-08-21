import { ReactElement } from "react";
import { useStore } from "../stores/RootStore";
import TopNav from "../components/navigation/TopNav";
import TabbedDisplay from "../components/tabbed-display/TabbedDisplay";

const SecurityStrategyAuditPage = (): ReactElement => {
  const { StrategyStore } = useStore();

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <TopNav/>
    <TabbedDisplay
      startTab={1}
      tabs={[
        {title: 'Mission & Vision', element: <>MISSION TAB</>},
        {title: 'Strategic Business Objectives', element: <>OBJECTIVES TAB</>}
      ]}
    />
    </div>
}

export default SecurityStrategyAuditPage;
