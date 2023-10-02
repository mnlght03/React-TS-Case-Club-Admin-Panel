import { useMemo, useState } from 'react';
import { IProjectStage } from '../../interfaces/Projects/models/IProjectStage';

export function useNewStageForm() {
  const [newStage, setNewStage] = useState<IProjectStage>({
    id: Date.now(),
    priorityId: 0,
    name: '',
    timeframe: '',
    coverage: '',
    attendee: '',
  });

  const setNewStageName = (name: string) => {
    setNewStage({ ...newStage, name: name });
  };

  const setNewStageTimeframe = (timeframe: string) => {
    setNewStage({ ...newStage, timeframe: timeframe });
  };

  const setNewStageCoverage = (coverage: string) => {
    setNewStage({ ...newStage, coverage: coverage });
  };

  const setNewStageAttendee = (attendee: string) => {
    setNewStage({ ...newStage, attendee: attendee });
  };

  const clearNewStage = () => {
    setNewStage({
      id: Date.now(),
      priorityId: 0,
      name: '',
      timeframe: '',
      coverage: '',
      attendee: '',
    });
  };

  const isFormFilled = useMemo(
    () => newStage.name != '' && newStage.timeframe != '',
    [newStage]
  );

  return {
    newStage,
    setNewStageName,
    setNewStageTimeframe,
    setNewStageCoverage,
    setNewStageAttendee,
    clearNewStage,
    isFormFilled
  }
}
