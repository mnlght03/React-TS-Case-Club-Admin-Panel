import { useEffect, useState } from 'react';
import { ChangesStatus } from '../../interfaces/enums/ChangesStatus';

export function useChangesStatus(added, deleted) {
  const [status, setStatus] = useState<ChangesStatus | null>(null);

  useEffect(() => {
    if (status === undefined || status === null) {
      setStatus(ChangesStatus.NONE);
      return;
    }
    setStatus(
      added.length > 0 || deleted.length > 0
        ? ChangesStatus.SOME_UNPUBLISHED
        : ChangesStatus.ALL_PUBLISHED
    );
  }, [added, deleted]);

  return {
    status,
    setStatus,
  };
}
