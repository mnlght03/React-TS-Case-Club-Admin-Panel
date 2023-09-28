import { IDragAndDropProps } from "../DragAndDrop/IDragAndDropProps";
import { ICurrentProject } from "./ICurrentProject";

export interface ICurrentProjectsDndProps extends IDragAndDropProps {
  items: ICurrentProject[];
}