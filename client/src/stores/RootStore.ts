import StrategyStore from "./StrategyStore";

class RootStore {
  constructor() {
    this.StrategyStore = new StrategyStore(this);
  }

  StrategyStore: StrategyStore;
}

let storeInstance: RootStore;

/** useStore()
 * Generic method for singleton access of data stores.
 * @returns 
 */
export function useStore() {
  if (!storeInstance) {
    storeInstance = new RootStore();
  }
  return storeInstance;
} 

export default RootStore;
