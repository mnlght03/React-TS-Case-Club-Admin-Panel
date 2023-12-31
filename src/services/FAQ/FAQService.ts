import axios from 'axios';
import { IFAQ } from '../../interfaces/FAQ/models/IFAQ';
import { IService } from '../../interfaces/Service/IService';

export default class FAQService implements IService<IFAQ> {
  API_URL = import.meta.env.VITE_API_BASE + 'faq/';
  async fetchAll(): Promise<IFAQ[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    return data;
  }

  async uploadAll(items: IFAQ[]): Promise<void> {
    if (items.length === 0) return;

    await Promise.all(
      items.map((item) => {
        const formData = new FormData();
        formData.append('question', item.question);
        formData.append('answer', item.answer);
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

  async deleteAll(items: IFAQ[]): Promise<void> {
    if (items.length === 0) return;

    await Promise.all(
      items.map((item) => {
        return axios.delete(this.API_URL + `delete/${item.id}`);
      })
    );
  }
}
