export interface ICurrentProject {
  id: number;
  priorityId: number;
  name: string;
  description: string;
  presentationFileUrl?: string;
  presentationFile?: File;
  projectFormat: string;
  startDate: string;
  registrationLink: string;
  firstPlateText: string;
  secondPlateText: string;
  thirdPlateText: string;
}
