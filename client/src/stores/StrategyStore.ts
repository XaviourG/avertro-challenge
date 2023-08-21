import RootStore from "./RootStore";

class StrategyStore {
  constructor(
    rootStore: RootStore
  ) {
    this.store = rootStore;
  }

  helloWorld = () => {
    console.log('Hello World!');
  }

  protected store: RootStore;
}

export default StrategyStore;
