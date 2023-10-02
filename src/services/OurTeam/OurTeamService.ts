import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';

export default class OurTeamService implements IService<ITeamMember> {
  API_URL = import.meta.env.VITE_API_BASE + 'team/';

  async fetchAll(): Promise<ITeamMember[]> {
    const data = (await axios.get(this.API_URL + 'get-members')).data;
    return data;
  }

  async uploadAll(members: ITeamMember[]): Promise<void> {
    if (members.length === 0) return;

    await Promise.all(
      members.map((member: ITeamMember) => {
        const formData = new FormData();
        formData.append('name', member.name);
        formData.append('telegram', member.telegram);
        formData.append('role', member.role);
        formData.append('tagColor', member.tagColor);
        formData.append('photo', member.profilePhotoFile);
        console.log(formData);

        return axios({
          method: 'post',
          url: this.API_URL + 'create-member',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      })
    );
  }

  async deleteAll(members: ITeamMember[]): Promise<void> {
    if (members.length === 0) return;

    await Promise.all(
      members.map((member) => {
        return axios.delete(this.API_URL + `delete/${member.id}`);
      })
    );
  }
}
