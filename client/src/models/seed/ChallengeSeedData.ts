import BusinessObjectiveDTO from "../DTOs/BusinessObjectiveDTO";
import MissionContentDTO, { ClientSizeFactor, ExperienceFactor, WorkTypeFactor } from "../DTOs/MissionContentDTO";

export const objectivesSeedData: BusinessObjectiveDTO[] = [
  {
    title: 'Reduce Risk',
    keyMeasures: [
      '',
    ],
    startDate: new Date('05/15/2020'),
    endDate: new Date('05/28/2020'),
  },
  {
    title: 'Reduce Risk',
    keyMeasures: [
      'First Key Measure',
      '',
    ],
    startDate: new Date('05/15/2020'),
    endDate: new Date('05/28/2020'),
  }
]

export const missionSeedData: MissionContentDTO = {
  mission: 'To boldy..',
  history: 'major breech',
  factors: {
    experience: ExperienceFactor.First_External_Partner,
    clientSize: ClientSizeFactor.Startup,
    workType: WorkTypeFactor.Audit,
  },
};