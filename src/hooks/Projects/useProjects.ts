import { useEffect, useState } from 'react';
import { IProject } from '../../interfaces/Projects/models/IProject';
import ProjectsService from '../../services/Projects/ProjectsService';

export function useProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);

  const fetchProjects = async () => {
    const data = await ProjectsService.fetchAll();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const [newProjects, setNewProjects] = useState<IProject[]>([]);
  const [deletedProjects, setDeletedProjects] = useState<IProject[]>([]);

  const addNewProject = (project: IProject) => {
    setNewProjects([...newProjects, project]);
    setProjects([...projects, project]);
  };

  const deleteProject = (project: IProject) => {
    setNewProjects(newProjects.filter((p) => p.id !== project.id));
    setProjects(projects.filter((p) => p.id !== project.id));
    setDeletedProjects([...deletedProjects, project]);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const startIdx = result.source.index;
    const endIdx = result.destination.index;
    const movedItem = projects[startIdx];

    projects.splice(startIdx, 1);
    projects.splice(endIdx, 0, movedItem);

    setProjects([...projects]);
  };

  return {
    projects,
    newProjects,
    deletedProjects,
    addNewProject,
    deleteProject,
    onDragEnd,
  };
}
