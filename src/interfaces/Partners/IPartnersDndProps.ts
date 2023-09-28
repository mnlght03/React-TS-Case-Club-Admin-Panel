import { IDragAndDropProps } from "../DragAndDrop/IDragAndDropProps";
import { IPartner } from "./IPartner";

export interface IPartnersDndProps extends IDragAndDropProps {
  items: IPartner[];
}