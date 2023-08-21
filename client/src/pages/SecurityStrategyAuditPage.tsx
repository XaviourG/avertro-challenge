import { ReactElement } from "react";
import { useStore } from "../stores/RootStore";

const SecurityStrategyAuditPage = (): ReactElement => {
  const { StrategyStore } = useStore();
  StrategyStore.helloWorld();

  return <div>hello world</div>
}

export default SecurityStrategyAuditPage;
