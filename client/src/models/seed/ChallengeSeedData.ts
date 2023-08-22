import BusinessObjectiveDTO from "../DTOs/BusinessObjectiveDTO";
import MissionContentDTO from "../DTOs/MissionContentDTO";

export const objectivesSeedData: BusinessObjectiveDTO[] = [
  {
    title: 'Reduce Risk',
    keyMeasures: [
      '',
    ],
    startDate: new Date('15/05/2020'),
    endDate: new Date('28/05/2020'),
  },
  {
    title: 'Reduce Risk',
    keyMeasures: [
      'First Key Measure',
    ],
    startDate: new Date('15/05/2020'),
    endDate: new Date('28/05/2020'),
  }
]

export const missionSeedData: MissionContentDTO = {};