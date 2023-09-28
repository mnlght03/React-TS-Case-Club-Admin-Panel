import { useMemo, useState } from 'react';
import { IPartner } from '../../interfaces/Partners/IPartner';

export function useNewPartnerForm() {
  const [newPartner, setNewPartner] = useState<IPartner>({
    id: Date.now(),
    priorityId: 0,
    text: '',
    attendees: '',
    logoUrl: '',
    logoFile: undefined,
  });

  const setPartnerText = (value: string) => {
    setNewPartner({ ...newPartner, text: value });
  };

  const setPartnerAttendees = (value: string) => {
    setNewPartner({ ...newPartner, attendees: value });
  };

  const setPartnerLogoUrl = (value: string) => {
    setNewPartner({ ...newPartner, logoUrl: value });
  };

  const setPartnerLogoFile = (value: File) => {
    setNewPartner({ ...newPartner, logoFile: value });
  };

  const clearNewPartner = () => {
    setNewPartner({
      id: Date.now(),
      priorityId: 0,
      text: '',
      attendees: '',
      logoUrl: '',
      logoFile: undefined,
    });
  };

  const isFormFilled = useMemo(
    () =>
      newPartner.text !== '' &&
      newPartner.attendees !== '' &&
      newPartner.logoFile !== undefined,
    [newPartner]
  );

  const updateFile = (e) => {
    const file = e.target.files[0]
    if (!file) return;
    console.log(file)
    setNewPartner({...newPartner, logoFile: file, logoUrl: file.name})
  }

  return {
    newPartner,
    setPartnerText,
    setPartnerAttendees,
    setPartnerLogoUrl,
    setPartnerLogoFile,
    updateFile,
    clearNewPartner,
    isFormFilled
  };
}
