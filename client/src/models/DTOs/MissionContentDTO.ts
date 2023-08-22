export const ExperienceFactor = [
  'First Project',
  'Experienced',
]

export const ClientSizeFactor = [
  'Startup',
  'Business',
  'Enterprise',
]

export const WorkTypeFactor = [
  'Audit',
  'Integration',
]

export interface SecurityFactors {
  experience: string,
  clientSize: string,
  workType: string,
}

interface MissionContentDTO {
  mission: string,
  history: string,
  factors: SecurityFactors,
}

export default MissionContentDTO;
