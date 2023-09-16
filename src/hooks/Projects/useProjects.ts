import { useState } from 'react';
import { IProject } from '../../interfaces/Projects/models/IProject';
import ProjectsService from '../../services/Projects/ProjectsService';

export function useProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const fetchProjects = async () => {
    const data = await ProjectsService.fetchAll();
    setProjects(data);
  };
  return {
    projects,
    setProjects,
    fetchProjects,
  };
}
