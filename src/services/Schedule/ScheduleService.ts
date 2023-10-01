import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';
import { TagColor } from '../../interfaces/enums/TagColor';

export default class ScheduleService implements IService<ISchedule> {
  API_URL = import.meta.env.VITE_API_BASE + 'schedule/';

  async fetchAll(): Promise<ISchedule[]> {
    // const data = await axios.get('http://caseclub-nsu.ru/schedule/get-all')
    return [
      {
        id: 1,
        priorityId: 1,
        name: 'Обучающие лекции от Case Club NSU',
        description:
          'Case Club NSU совместно с LAB Industries проводит маркетинговый мини-кейс, в котором участники должны придумать стратегию развития продукта',
        date: '1 - 10 Сентября',
        registrationLink: 'supermegaform.ru',
        firstTag: 'Кейс-чемпионат',
        secondTag: 'Маркетинг',
        tagColor: TagColor.PURPLE,
      },
      {
        id: 2,
        priorityId: 2,
        name: 'Обучающие лекции от Case Club NSU',
        description:
          'Case Club NSU совместно с LAB Industries проводит маркетинговый мини-кейс, в котором участники должны придумать стратегию развития продукта',
        date: '2 - 20 Сентября',
        registrationLink:
          'https://www.google.com/search?sca_esv=563029658&sxsrf=AB5stBgTVvOQh4z2xUVQveYY-SSDrad9iQ:1693993675089&q=%D1%86%D0%B2%D0%B5%D1%82%D1%8B&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiRn4Wa2pWBAxVGAxAIHczqBrYQ0pQJegQIDBAB&biw=1440&bih=815&dpr=2#imgrc=RTwlL90g_89D_M',
        firstTag: 'Кейс-чемпионат',
        secondTag: 'Маркетинг',
        tagColor: TagColor.RED,
      },
    ];
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
