import { TagColor } from "../../../enums/TagColor";

export interface ITeamMember {
  id: number;
  priorityId: number;
  name: string;
  telegram: string;
  role: string;
  tagColor: TagColor;
  profilePhotoUrl?: string;
  profilePhotoFile?: File;
}
