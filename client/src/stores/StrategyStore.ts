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

  maxObjectiveCount: number = 3;
  
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
    if (this.objectives.length < this.maxObjectiveCount) {
      runInAction(() => {
        this.objectives = [...this.objectives, {
          title: '',
          keyMeasures: [''],
          startDate: null,
          endDate: null,
        }];
      });
    }
  };

  updateMission = (
    content: MissionContentDTO,
  ): void => {
    runInAction(() => {
      this.mission = content;
    });
  };

  resetMission = (): void => {
    runInAction(() => {
      this.mission = missionSeedData;
    });
  };
}

export default StrategyStore;
