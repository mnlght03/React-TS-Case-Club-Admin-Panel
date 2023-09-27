import React from 'react';

export default function PreviewButton(onClick) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg font-semibold text-white py-3 px-9 bg-gray_menu_selected ml-4"
    >
      Предпросмотр
    </button>
  );
}
