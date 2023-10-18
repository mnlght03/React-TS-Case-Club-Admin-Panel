import {createContext} from 'react';
import {usePage} from "../hooks/Page/usePage.ts";
import CurrentProjectsService
    from "../services/CurrentProjects/CurrentProjectsService.ts";
import FAQService from "../services/FAQ/FAQService.ts";
import GalleryService from "../services/Gallery/GalleryService.ts";
import OurTeamService from "../services/OurTeam/OurTeamService.ts";
import PartnersService from "../services/Partners/PartnersService.ts";
import {IProject} from "../interfaces/Projects/models/IProject.ts";
import ProjectsService from "../services/Projects/ProjectsService.ts";
import {ITeamMember} from "../interfaces/OurTeam/models/ITeamMember.ts";
import {IPartner} from "../interfaces/Partners/IPartner.ts";
import {IGalleryEvent} from "../interfaces/Gallery/models/IGalleryEvent.ts";
import {IFAQ} from "../interfaces/FAQ/models/IFAQ.ts";
import {
    ICurrentProject
} from "../interfaces/CurrentProjects/ICurrentProject.ts";
import ScheduleService from "../services/Schedule/ScheduleService.ts";
import {ISchedule} from "../interfaces/Schedule/models/ISchedule.ts";
import SuccessStoriesService
    from "../services/SuccessStories/SuccessStoriesService.ts";
import {
    ISuccessStory
} from "../interfaces/SuccessStories/models/ISuccessStory.ts";

export const GlobalContext = createContext(null);

export function useGlobalStore() {
    const value = {
        currentProjects: usePage<ICurrentProject>(new CurrentProjectsService()),
        faq: usePage<IFAQ>(new FAQService()),
        gallery: usePage<IGalleryEvent>(new GalleryService()),
        ourTeam: usePage<ITeamMember>(new OurTeamService()),
        partners: usePage<IPartner>(new PartnersService()),
        projects: usePage<IProject>(new ProjectsService()),
        schedule: usePage<ISchedule>(new ScheduleService()),
        successStories: usePage<ISuccessStory>(new SuccessStoriesService()),
    }

    return {
        GlobalContext,
        value
    }
}