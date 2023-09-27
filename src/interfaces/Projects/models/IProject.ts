import { IProjectStage } from "./IProjectStage";

export interface IProject {
  id: number;
  priorityId: number;
  title: string;
  logoUrl?: string;
  logoFile?: File;
  isThisYear: boolean;
  stages: IProjectStage[]
}
