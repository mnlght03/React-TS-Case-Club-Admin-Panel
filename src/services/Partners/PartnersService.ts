import axios from 'axios';
import { IPartner } from '../../interfaces/Partners/IPartner';
import { IService } from '../../interfaces/Service/IService';

export default class PartnersService implements IService<IPartner> {
  API_URL = import.meta.env.VITE_API_BASE + 'partner/';

  async fetchAll(): Promise<IPartner[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    console.log(data);
    return data.map((item) => ({
      id: item.id,
      priorityId: item.priorityId,
      text: item.cooperationInfo,
      attendees: item.attendee,
      logoUrl: item.logoImageUrl,
    }));
  }

  async uploadAll(partners: IPartner[]) {
    if (partners.length === 0) return;

    await Promise.all(
      partners.map((partner: IPartner) => {
        const formData = new FormData();
        formData.append('cooperationInfo', partner.text);
        formData.append('attendee', partner.attendees);
        formData.append('photo', partner.logoFile);
        console.log(formData);

        return axios({
          method: 'post',
          url: this.API_URL + 'create',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      })
    );
  }

  async deleteAll(partners: IPartner[]) {
    if (partners.length === 0) return;

    await Promise.all(
      partners.map((partner) => {
        return axios.delete(this.API_URL + `delete/${partner.id}`);
      })
    );
  }
}
