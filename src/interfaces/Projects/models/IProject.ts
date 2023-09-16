import { IProjectStage } from "./IProjectStage";

export interface IProject {
  id: number;
  priorityId: number;
  title: string;
  logoUrl: string;
  isThisYear: boolean;
  stages: IProjectStage[]
}