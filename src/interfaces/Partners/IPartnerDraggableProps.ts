import { IDraggableProps } from "../DragAndDrop/IDraggableProps";

export interface IPartnerDrabbableProps extends IDraggableProps {
  text: string;
  attendees: string;
  logoUrl: string;
}
