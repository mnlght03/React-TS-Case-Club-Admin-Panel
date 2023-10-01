import axios from 'axios';
import { IService } from '../../interfaces/Service/IService';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';
import { TagColor } from '../../enums/TagColor';

export default class SuccessStoriesService implements IService<ISuccessStory> {
  API_URL = import.meta.env.VITE_API_BASE + 'ongoing-story/';

  async fetchAll(): Promise<ISuccessStory[]> {
    return [
      {
        id: 1,
        priorityId: 1,
        name: 'Никита Тычинский',
        firstTag: 'Руководитель в 2021г.',
        secondTag: 'PL Case School до 2021г.',
        tagColor: TagColor.ORANGE,
        position: 'Ex-Руководитель',
        story: `Начиная с 3 курса и вплоть до её ухода из России, я работал в крупнейшей международной консалтинговой фирме Boston Consulting Grop (BCG). После небезызвестных событий я продолжил свой путь в российской консалтинговой фирме, где планирую развиваться ближайшие несколько лет, не упуская возможности роста.`,
        profilePhotoUrl: 'tichinskiy_nikita_top.png',
        fullSizePhotoUrl: 'tichinskiy_nikita_top.png',
      },
    ];
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
