import { ReactElement } from "react";
import { useStore } from "../stores/RootStore";
import TopNav from "../components/TopNav";

const SecurityStrategyAuditPage = (): ReactElement => {
  const { StrategyStore } = useStore();

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <TopNav/>
    hello world
    </div>
}

export default SecurityStrategyAuditPage;
