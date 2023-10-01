import { TagColor } from '../../../enums/TagColor';

export interface ISuccessStory {
  id: number;
  priorityId: number;
  name: string;
  firstTag: string;
  secondTag: string;
  tagColor: TagColor;
  position: string;
  profilePhotoUrl?: string;
  fullSizePhotoUrl?: string;
  profilePhotoFile?: File;
  fullSizePhotoFile?: File;
  story: string;
}
