export enum ExperienceFactor {
  First_External_Partner = 1,
  Experienced = 2,
}

export enum ClientSizeFactor {
  Startup = 1,
  Business = 2,
  Enterprise = 3,
}

export enum WorkTypeFactor {
  Audit = 1,
  Both = 2,
  Integration = 3,
}

export interface SecurityFactors {
  experience: ExperienceFactor,
  clientSize: ClientSizeFactor,
  workType: WorkTypeFactor,
}

interface MissionContentDTO {
  mission: string,
  history: string,
  factors: SecurityFactors,
}

export default MissionContentDTO;
