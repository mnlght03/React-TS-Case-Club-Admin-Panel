import { IProject } from "../../interfaces/Projects/models/IProject";

export default class ProjectsService {
  static async fetchAll(): Promise<IProject[]> {
    return [
      {
        id: 1,
        priorityId: 1,
        title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
        isThisYear: true,
        logoUrl: 'beeline.png',
        stages: []
      },
      {
        id: 2,
        priorityId: 1,
        title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
        isThisYear: true,
        logoUrl: 'beeline.png',
        stages: []
      },
      {
        id: 3,
        priorityId: 1,
        title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
        isThisYear: true,
        logoUrl: 'beeline.png',
        stages: []
      },
    ];
  }
}