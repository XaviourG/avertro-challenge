import BusinessObjectiveDTO from "../DTOs/BusinessObjectiveDTO";
import MissionContentDTO from "../DTOs/MissionContentDTO";

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
  mission: 'To showcase my skills to Ani & Ian',
  history: '',
  factors: {
    experience: 'Experienced',
    clientSize: 'Startup',
    workType: 'Integration',
  },
};