import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';
import { TagColor } from '../../enums/TagColor';

export default class ScheduleService implements IService<ISchedule> {
  API_URL = import.meta.env.VITE_API_BASE + 'schedule/';

  async fetchAll(): Promise<ISchedule[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    return data;
  }

  async uploadAll(schedules: ISchedule[]): Promise<void> {
    if (schedules.length === 0) return;

    await Promise.all(
      schedules.map((schedule: ISchedule) => {
        const formData = new FormData();
        formData.append('name', schedule.name);
        formData.append('description', schedule.description);
        formData.append('date', schedule.date);
        formData.append('registrationLink', schedule.registrationLink);
        formData.append('firstTag', schedule.firstTag);
        formData.append('secondTag', schedule.secondTag);
        formData.append('tagColor', schedule.tagColor);
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

  async deleteAll(schedules: ISchedule[]): Promise<void> {
    if (schedules.length === 0) return;

    await Promise.all(
      schedules.map((schedule) => {
        return axios.delete(this.API_URL + `delete/${schedule.id}`);
      })
    );
  }
}
