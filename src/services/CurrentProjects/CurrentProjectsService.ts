import axios from 'axios';
import { ICurrentProject } from '../../interfaces/CurrentProjects/ICurrentProject';
import { IService } from '../../interfaces/Service/IService';

export default class CurrentProjectsService implements IService<ICurrentProject> {
  API_URL = import.meta.env.VITE_API_BASE + 'ongoing-project/';

  async fetchAll(): Promise<ICurrentProject[]> {
    return [
      {
        id: 1,
        priorityId: 0,
        name: 'CaseHub',
        description:
          'Case Hub — это самый крупный кейс-чемпионат для участников со всей Сибири',
        presentationFileUrl: 'presentation.pptx',
        projectFormat: '',
        startDate: '',
        registrationLink: '',
        firstPlateText: '',
        secondPlateText: '',
        thirdPlateText: '',
      },
      {
        id: 2,
        priorityId: 0,
        name: 'Образовательные курсы',
        description:
          'Курсы — это самый крупный курсы-чемпионат для участников со всей курсы',
        presentationFileUrl: 'presentation.pptx',
        projectFormat: '',
        startDate: '',
        registrationLink: '',
        firstPlateText: '',
        secondPlateText: '',
        thirdPlateText: '',
      },
    ];
  }

  async uploadAll(projects: ICurrentProject[]): Promise<void> {
    if (projects.length === 0) return;

    await Promise.all(
      projects.map((project) => {
        const formData = new FormData();
        formData.append('name', project.name);
        formData.append('description', project.description);
        formData.append('projectFormat', project.projectFormat);
        formData.append('startDate', project.startDate);
        formData.append('registrationLink', project.registrationLink);
        formData.append('firstPlateText', project.firstPlateText);
        formData.append('secondPlateText', project.secondPlateText);
        formData.append('thirdPlateText', project.thirdPlateText);
        formData.append('presentationFile', project.presentationFile);

        return axios({
          method: 'post',
          url: this.API_URL + 'create',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      })
    );
  }

  async deleteAll(projects: ICurrentProject[]): Promise<void> {
    if (projects.length === 0) return;

    await Promise.all(
      projects.map((project) => {
        return axios.delete(this.API_URL + `delete/${project.id}`);
      })
    );
  }
}
