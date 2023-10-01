import { useState } from 'react';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';
import { TagColor } from '../../enums/TagColor';

export function useNewTeamMember() {
  const getClearMember = (): ITeamMember => ({
    id: Date.now(),
    priorityId: 0,
    name: '',
    telegram: '',
    role: '',
    tagColor: TagColor.BLUE,
    profilePhotoFile: undefined,
    profilePhotoUrl: '',
  });

  const [newMember, setNewMember] = useState<ITeamMember>(getClearMember());

  const clearNewMember = () => {
    setNewMember(getClearMember());
  };

  const updateFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewMember({ ...newMember, profilePhotoFile: file, profilePhotoUrl: file.name });
  };

  const setMemberName = (value: string) => {
    setNewMember({ ...newMember, name: value });
  };

  const setMemberTelegram = (value: string) => {
    setNewMember({ ...newMember, telegram: value });
  };

  const setMemberRole = (value: string) => {
    setNewMember({ ...newMember, role: value });
  };

  const setMemberTagColor = (value: TagColor) => {
    setNewMember({ ...newMember, tagColor: value });
  };

  return {
    newMember,
    setMemberName,
    setMemberTelegram,
    setMemberRole,
    setMemberTagColor,
    updateFile,
    clearNewMember,
  };
}
