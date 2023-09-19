import { IProjectsDndProps } from '../../../interfaces/Projects/IProjectsDndProps';
import DragAndDrop from '../../DragAndDrop/DragAndDrop';
import ProjectDraggable from './ProjectDraggable';

export default function ProjectsDnd({ items }: IProjectsDndProps) {
  return (
    <>
      <DragAndDrop droppableId={'Projects'}>
        {items.map((item) => (
          <ProjectDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={item.id}
            title={item.title}
            isLastYear={item.isThisYear}
            logo={item.logoUrl}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
