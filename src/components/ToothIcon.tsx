import React from 'react';

interface ToothIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ToothIcon: React.FC<ToothIconProps> = ({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C8 2 5.5 4.8 5.5 8.8C5.5 11.5 6.6 14.8 7.9 17.8C8.5 19.2 9.8 20.2 11.3 19.4C12.4 18.8 12.6 17.5 12.9 16C13.1 14.9 13.4 14.2 14 14.2C14.6 14.2 14.9 14.9 15.1 16C15.4 17.5 15.6 18.8 16.7 19.4C18.2 20.2 19.5 19.2 20.1 17.8C21.4 14.8 22.5 11.5 22.5 8.8C22.5 4.8 20 2 12 2Z"
        fill={color}
      />
      <path
        d="M9.5 6.5C10 6.5 10.5 7 10.5 7.8C10.5 8.6 10 9 9.5 9C9 9 8.5 8.6 8.5 7.8C8.5 7 9 6.5 9.5 6.5Z"
        fill="white"
        fillOpacity="0.45"
      />
    </svg>
  );
};

export const SparkleIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-4 h-4",
  size = 16,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};
