import React from 'react';
import { ChangesStatus } from '../../interfaces/enums/ChangesStatus';

interface IProps {
  status: ChangesStatus;
}

export default function Status({ status }: IProps) {
  return (
    <>
      {status === ChangesStatus.ALL_PUBLISHED && (
        <span className="ml-auto text-green font-medium">{ChangesStatus.ALL_PUBLISHED}</span>
      )}
      {status === ChangesStatus.SOME_UNPUBLISHED && (
        <span className="ml-auto text-red font-medium">{ChangesStatus.SOME_UNPUBLISHED}</span>
      )}
      {status === ChangesStatus.ERROR_OCCURED && (
        <span className="ml-auto text-red font-medium">{ChangesStatus.ERROR_OCCURED}</span>
      )}
      {status === ChangesStatus.NONE && (
        <span className="ml-auto"></span>
      )}
    </>
  );
}
