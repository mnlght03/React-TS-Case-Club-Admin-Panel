import axios from 'axios';
import { IProject } from '../../interfaces/Projects/models/IProject';
import { IService } from '../../interfaces/Service/IService';
import { IProjectStage } from '../../interfaces/Projects/models/IProjectStage';

export default class ProjectsService implements IService<IProject> {
  API_URL = import.meta.env.VITE_API_BASE + 'implemented-project/';

  async fetchAll(): Promise<IProject[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    console.log(data);
    return data.map((item) => ({
      id: item.id,
      priorityId: item.priorityId,
      title: item.name,
      isThisYear: item.thisYearProject,
      logoUrl: item.logoImageUrl,
      stages: item.projectStageList,
    }));
  }

  async uploadAll(projects: IProject[]): Promise<void> {
    console.log(projects);
    if (projects.length === 0) return;

    await Promise.all(
      projects.map(async (project) => {
        const formData = new FormData();
        formData.append('name', project.title);
        formData.append('thisYearProject', project.isThisYear.toString());
        formData.append('photo', project.logoFile);
        console.log(formData);

        const response = await axios({
          method: 'post',
          url: this.API_URL + 'create',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log(response);

        await this.uploadStages(project.stages, response.data.id);
      })
    );
  }

  async uploadStages(stages: IProjectStage[], projectId: number): Promise<void> {
    await Promise.all(
      stages.map(async (stage) => {
        const formData = new FormData();
        formData.append('name', stage.name);
        formData.append('timeFrame', stage.timeframe);
        formData.append('coverage', stage.coverage);
        formData.append('attendee', stage.attendee);

        const response = await axios({
          method: 'post',
          url: this.API_URL + 'stage/add/' + projectId,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log(response);
      })
    );
  }

  async deleteAll(projects: IProject[]): Promise<void> {
    if (projects.length === 0) return;

    await Promise.all(
      projects.map((project) => {
        return axios.delete(this.API_URL + `delete/${project.id}`);
      })
    );
  }
}
