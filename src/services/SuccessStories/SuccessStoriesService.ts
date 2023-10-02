import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';

export default class SuccessStoriesService implements IService<ISuccessStory> {
  API_URL = import.meta.env.VITE_API_BASE + 'success-story/';

  async fetchAll(): Promise<ISuccessStory[]> {
    const data = (await axios.get(this.API_URL + 'get-all')).data;
    return data;
  }

  async uploadAll(stories: ISuccessStory[]): Promise<void> {
    if (stories.length === 0) return;

    await Promise.all(
      stories.map((story) => {
        const formData = new FormData();
        formData.append('name', story.name);
        formData.append('firstTag', story.firstTag);
        formData.append('secondTag', story.secondTag);
        formData.append('tagColor', story.tagColor);
        formData.append('position', story.position);
        formData.append('story', story.story);
        formData.append('profilePhoto', story.profilePhotoFile);
        formData.append('fullSizePhoto', story.fullSizePhotoFile);
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

  async deleteAll(stories: ISuccessStory[]): Promise<void> {
    if (stories.length === 0) return;

    await Promise.all(
      stories.map((story) => {
        return axios.delete(this.API_URL + `delete/${story.id}`);
      })
    );
  }
}
