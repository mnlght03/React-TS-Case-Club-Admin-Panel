import { useState } from 'react';
import { IProject } from '../../interfaces/Projects/models/IProject';
import { IProjectStage } from '../../interfaces/Projects/models/IProjectStage';

export function useNewProjectForm() {
  const [newProject, setNewProject] = useState<IProject>({
    id: Date.now(),
    priorityId: 0,
    title: '',
    logoFile: undefined,
    isThisYear: false,
    stages: [] as IProjectStage[],
  });

  const setProjectTitle = (title: string) => {
    setNewProject({ ...newProject, title: title });
  };

  const setProjectThisYear = (value: boolean) => {
    setNewProject({ ...newProject, isThisYear: value });
  };

  const setProjectLogoFile = (logo: File) => {
    setNewProject({ ...newProject, logoFile: logo });
  };

  const setProjectLogoUrl = (logo: string) => {
    setNewProject({ ...newProject, logoUrl: logo });
  };

  const addStage = (stage: IProjectStage) => {
    setNewProject({
      ...newProject,
      stages: [...newProject.stages, stage],
    });
  };

  const deleteStage = (stage: IProjectStage) => {
    setNewProject({
      ...newProject,
      stages: newProject.stages.filter((s) => s.id !== stage.id),
    });
  };

  const clearNewProject = () => {
    setNewProject({
      id: Date.now(),
      priorityId: 0,
      title: '',
      logoFile: undefined,
      isThisYear: false,
      stages: [] as IProjectStage[],
    });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const startIdx = result.source.index;
    const endIdx = result.destination.index;
    const movedItem = newProject.stages[startIdx];

    newProject.stages.splice(startIdx, 1);
    newProject.stages.splice(endIdx, 0, movedItem);

    setNewProject({ ...newProject });
  };

  const updateFile = (e) => {
    const file = e.target.files[0]
    if (!file) return;
    setNewProject({...newProject, logoFile: file, logoUrl: file.name})
  }

  return {
    newProject,
    setProjectTitle,
    setProjectThisYear,
    setProjectLogoFile,
    setProjectLogoUrl,
    addStage,
    deleteStage,
    updateFile,
    clearNewProject,
    onDragEnd,
  };
}
