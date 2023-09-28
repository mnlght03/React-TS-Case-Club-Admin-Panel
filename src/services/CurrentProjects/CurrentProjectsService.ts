import { ICurrentProject } from "../../interfaces/CurrentProjects/ICurrentProject";
import { IService } from "../../interfaces/Service/IService";

export default class CurrentProjectsService implements IService<ICurrentProject> {
  API_URL = import.meta.env.VITE_API_BASE + 'ongoing-project/';

  async fetchAll(): Promise<ICurrentProject[]> {
    return [
      {
        id: 1,
        priorityId: 0,
        name: 'CaseHub',
        description: 'Case Hub — это самый крупный кейс-чемпионат для участников со всей Сибири',
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
        description: 'Курсы — это самый крупный курсы-чемпионат для участников со всей курсы',
        presentationFileUrl: 'presentation.pptx',
        projectFormat: '',
        startDate: '',
        registrationLink: '',
        firstPlateText: '',
        secondPlateText: '',
        thirdPlateText: '',
      },
    ]
  }

  async uploadAll(projects: ICurrentProject[]) {}

  async deleteAll(projects: ICurrentProject[]) {}
}