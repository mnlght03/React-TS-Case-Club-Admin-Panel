import { useState } from "react";
import { ICurrentProject } from "../../interfaces/CurrentProjects/ICurrentProject";

export function useNewCurrentProject() {
  const [newProject, setNewProject] = useState<ICurrentProject>({
    id: Date.now(),
    priorityId: 0,
    name: '',
    description: '',
    presentationFileUrl: '',
    presentationFile: undefined,
    projectFormat: '',
    startDate: '',
    registrationLink: '',
    firstPlateText: '',
    secondPlateText: '',
    thirdPlateText: '',
  });

  const setProjectName = (name: string) => {
    setNewProject({ ...newProject, name: name });
  };

  const setProjectDescription = (value: string) => {
    setNewProject({ ...newProject, description: value });
  };

  const setProjectPresentationFileUrl = (value: string) => {
    setNewProject({ ...newProject, presentationFileUrl: value });
  };

  const setProjectPresentationFile = (value: File) => {
    setNewProject({ ...newProject, presentationFile: value });
  };

  const setProjectFormat = (value: string) => {
    setNewProject({ ...newProject, projectFormat: value });
  };

  const setProjectStartDate = (value: string) => {
    setNewProject({ ...newProject, startDate: value });
  };

  const setProjectRegistrationLink = (value: string) => {
    setNewProject({ ...newProject, registrationLink: value });
  };

  const setProjectFirstPlateText = (value: string) => {
    setNewProject({ ...newProject, firstPlateText: value });
  };

  const setProjectSecondPlateText = (value: string) => {
    setNewProject({ ...newProject, secondPlateText: value });
  };

  const setProjectThirdPlateText = (value: string) => {
    setNewProject({ ...newProject, thirdPlateText: value });
  };


  const clearNewProject = () => {
    setNewProject({
      id: Date.now(),
      priorityId: 0,
      name: '',
      description: '',
      presentationFileUrl: '',
      presentationFile: undefined,
      projectFormat: '',
      startDate: '',
      registrationLink: '',
      firstPlateText: '',
      secondPlateText: '',
      thirdPlateText: '',
    });
  };

  const updateFile = (e) => {
    const file = e.target.files[0]
    if (!file) return;
    setNewProject({...newProject, presentationFile: file, presentationFileUrl: file.name})
  }

  return {
    newProject,
    setProjectName,
    setProjectDescription,
    setProjectFormat,
    setProjectStartDate,
    setProjectPresentationFile,
    setProjectPresentationFileUrl,
    setProjectFirstPlateText,
    setProjectSecondPlateText,
    setProjectThirdPlateText,
    setProjectRegistrationLink,
    updateFile,
    clearNewProject,
  };
}