import React from 'react';
import { ILinkProps } from '../../../interfaces/Link/ILinkProps';
import { openInNewTab } from '../../../util/openInNewTab';

export default function NewTabLink({ href, text, classes }: ILinkProps) {
  return (
    <a
      className={`cursor-pointer ${classes}`}
      onClick={() => openInNewTab(href)}
    >
      {text}
    </a>
  );
}
