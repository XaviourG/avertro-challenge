import { makeAutoObservable, runInAction } from 'mobx';
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
    makeAutoObservable(this);
  }

  protected store: RootStore;
  
  objectives: BusinessObjectiveDTO[];

  mission: MissionContentDTO;

  updateObjectiveByKey = (
    objectives: BusinessObjectiveDTO,
    key: number,
  ): void => {
    runInAction(() => {
      this.objectives[key] = objectives;
    });
  };

  deleteObjective = async (key: number): Promise<void> => {
    runInAction(() => {
      this.objectives = [
        ...this.objectives.slice(0, key),
        ...this.objectives.slice(key+1),
      ]
    });
  };

  addObjective = (): void => {
    runInAction(() => {
      this.objectives = [...this.objectives, {
        title: '',
        keyMeasures: [''],
        startDate: null,
        endDate: null,
      }];
    });
  };
}

export default StrategyStore;
