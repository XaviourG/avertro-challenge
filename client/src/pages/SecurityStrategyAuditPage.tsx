import { ReactElement } from "react";
import { useStore } from "../stores/RootStore";

const SecurityStrategyAuditPage = (): ReactElement => {
  const { StrategyStore } = useStore();

  return <div>hello world</div>
}

export default SecurityStrategyAuditPage;
