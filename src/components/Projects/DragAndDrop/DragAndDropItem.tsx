import React from 'react';

import { ReactComponent as IconDrag } from '../../../assets/icons/icon-drag.svg';
import { ReactComponent as IconEdit } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as IconTrash } from '../../../assets/icons/icon-trash.svg';
import { ReactComponent as IconDownload } from '../../../assets/icons/icon-download.svg';


export default function DragAndDropItem() {
  return (
    <div className="flex px-10 py-6 w-full border-t border-b border-gray_button_inactive">
      <IconDrag className="cursor-pointer mr-9" />
      <div className="w-96 font-medium">
        Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн
      </div>
      <div className="w-64 font-medium ml-32">Да</div>
      <div className="w-44 font-medium ml-32">
        <span className="text-blue">beeline.png</span>
        <IconDownload className="inline ml-4" />
      </div>
      <IconEdit className="cursor-pointer ml-auto" />
      <IconTrash className="cursor-pointer ml-4" />
    </div>
  );
}
