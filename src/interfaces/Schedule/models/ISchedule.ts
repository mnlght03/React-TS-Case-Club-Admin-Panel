import { TagColor } from "../../enums/TagColor";

export interface ISchedule {
  id: number;
  priorityId: number;
  name: string;
  description: string;
  date: string;
  registrationLink: string;
  firstTag: string;
  secondTag: string;
  tagColor: TagColor;
}