export interface IGalleryEvent {
  id: number;
  priorityId: number;
  name: string;
  photos?: string[];
  photoFiles?: File[];
}
