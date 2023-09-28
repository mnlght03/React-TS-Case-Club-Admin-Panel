import { IPartner } from "../../interfaces/Partners/IPartner";
import { IService } from "../../interfaces/Service/IService";

export default class PartnersService implements IService<IPartner> {
  API_URL = import.meta.env.VITE_API_BASE + 'partner/';
  
  async fetchAll(): Promise<IPartner[]> {
    return [
      {
        id: 1,
        priorityId: 0,
        attendees: '100',
        logoUrl: '2GISVERYCOOLLOGO.png',
        text: 'Сибирский кейс-чемпионат совместно с компанией 2GIS.',
      },
      {
        id: 2,
        priorityId: 0,
        attendees: '200',
        logoUrl: 'cool2gislogo.png',
        text: '2GIS 2GIS 2GIS.',
      },
    ]
  }

  async uploadAll(partners: IPartner[]) {}

  async deleteAll(partners: IPartner[]) {}
}