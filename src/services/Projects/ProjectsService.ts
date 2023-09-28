import axios from 'axios';
import { IProject } from '../../interfaces/Projects/models/IProject';
import { IService } from '../../interfaces/Service/IService';

export default class ProjectsService implements IService<IProject> {
  API_URL = import.meta.env.VITE_API_BASE + 'implemented-project/';

  async fetchAll(): Promise<IProject[]> {
    // const data = await axios.get('http://caseclub-nsu.ru/implemented-project/get-all')
    // console.log(data);
    return [
      {
        id: 1,
        priorityId: 1,
        title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
        isThisYear: true,
        logoUrl: 'beeline.png',
        stages: [],
      },
      {
        id: 2,
        priorityId: 1,
        title: 'QWEASD',
        isThisYear: true,
        logoUrl: 'beelinebeelinebeelineBIGFILENAME.png',
        stages: [],
      },
      {
        id: 3,
        priorityId: 1,
        title: 'ZXCVBN',
        isThisYear: true,
        logoUrl: 'beeline.png',
        stages: [],
      },
    ];
  }

  async uploadAll(projects: IProject[]): Promise<void> {
    if (projects.length === 0) return;

    await Promise.all(
      projects.map((project) => {
        const formData = new FormData();
        formData.append('name', project.title);
        formData.append('thisYearProject', project.isThisYear.toString());
        formData.append('photo', project.logoFile);

        return axios({
          method: 'post',
          url: this.API_URL + 'create',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
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
