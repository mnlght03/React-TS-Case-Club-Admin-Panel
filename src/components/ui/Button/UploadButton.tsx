import React from 'react';

export default function UploadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg font-semibold text-white py-3 px-9 bg-blue ml-4"
    >
      Опубликовать
    </button>
  );
}
