import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { IGalleryEvent } from '../../interfaces/Gallery/models/IGalleryEvent';

export default class GalleryService implements IService<IGalleryEvent> {
  API_URL = import.meta.env.VITE_API_BASE + 'event/';

  async fetchAll(): Promise<IGalleryEvent[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    return data.map((item) => ({
      id: item.id,
      priorityId: item.priorityId,
      name: item.name,
      photos: item.photoUrlList,
    }));
  }

  async uploadAll(events: IGalleryEvent[]): Promise<void> {
    if (events.length === 0) return;

    await Promise.all(
      events.map((event) => {
        const formData = new FormData();
        formData.append('name', event.name);
        event.photoFiles?.forEach((photo) => formData.append('photo', photo));
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

  async deleteAll(events: IGalleryEvent[]): Promise<void> {
    if (events.length === 0) return;

    await Promise.all(
      events.map((event) => {
        return axios.delete(this.API_URL + `delete/${event.id}`);
      })
    );
  }
}
