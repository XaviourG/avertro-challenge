import BusinessObjectiveDTO from "../models/DTOs/BusinessObjectiveDTO";
import MissionContentDTO from "../models/DTOs/MissionContentDTO";
import { missionSeedData, objectivesSeedData } from "../models/seed/ChallengeSeedData";
import RootStore from "./RootStore";

class StrategyStore {
  constructor(
    rootStore: RootStore
  ) {
    this.store = rootStore;
    this.objectives = objectivesSeedData;
    this.mission = missionSeedData;
  }

  protected store: RootStore;
  
  objectives: BusinessObjectiveDTO[];

  mission: MissionContentDTO;
}

export default StrategyStore;
