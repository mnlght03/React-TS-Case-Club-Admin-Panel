import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { TagColor } from '../../enums/TagColor';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';

export default class OurTeamService implements IService<ITeamMember> {
  API_URL = import.meta.env.VITE_API_BASE + 'team/';

  async fetchAll(): Promise<ITeamMember[]> {
    // const data = await axios.get('http://caseclub-nsu.ru/member/get-all')
    return [
      {
        id: 1,
        priorityId: 1,
        name: 'Катешов Илья',
        telegram: 'http_ilia',
        role: 'Координатор',
        tagColor: TagColor.BLUE,
        profilePhotoUrl: '',
      },
      {
        id: 2,
        priorityId: 2,
        name: 'Катешов Илья',
        telegram: 'http_ilia',
        role: 'Координатор',
        tagColor: TagColor.BLUE,
        profilePhotoUrl: '',
      },
    ];
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
