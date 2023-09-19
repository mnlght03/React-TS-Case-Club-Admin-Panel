import React from 'react';

interface IButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  classes?: string;
}

export default function BlueButton({ text, classes, type, onClick }: IButtonProps) {
  return (
    <button
      className={`rounded-lg font-semibold text-white py-3 px-9 bg-blue ${classes}`}
      onClick={onClick}
      type={type || 'button'}
    >
      {text}
    </button>
  );
}
