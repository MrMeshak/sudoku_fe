import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

export interface IIconProps {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const AlertCircleIcon = ({
  className = 'h-6 w-6',
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = '1',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <title>Iconly/Bold/Info Circle</title>
      <g
        id="Iconly/Bold/Info-Circle"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Info-Circle"
          transform="translate(2.000100, 1.999300)"
          fill={fill}
          fillRule="nonzero"
        >
          <path d="M10,0 C15.53,0 20,4.481 20,10 C20,15.521 15.53,20 10,20 C4.48,20 0,15.521 0,10 C0,4.481 4.48,0 10,0 Z M10,12.931 C9.52,12.931 9.13,13.321 9.13,13.801 C9.13,14.281 9.52,14.681 10.01,14.681 C10.49,14.681 10.88,14.281 10.88,13.801 C10.88,13.321 10.49,12.931 10,12.931 Z M10,5.33 C9.52,5.33 9.12,5.731 9.12,6.21 L9.12,6.21 L9.12,10.63 C9.12,11.111 9.52,11.5 10,11.5 C10.48,11.5 10.87,11.111 10.87,10.63 L10.87,10.63 L10.87,6.21 C10.87,5.731 10.48,5.33 10,5.33 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const TickIcon = ({
  className = 'h-6 w-6',
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = '1',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <title>Iconly/Bold/Tick Square</title>
      <g
        id="Iconly/Bold/Tick-Square"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Tick-Square"
          transform="translate(2.000100, 1.999900)"
          fill={fill}
          fillRule="nonzero"
        >
          <path d="M14.34,-2.84217094e-14 C17.73,-2.84217094e-14 20,2.38 20,5.92 L20,5.92 L20,14.091 C20,17.62 17.73,20 14.34,20 L14.34,20 L5.67,20 C2.28,20 0,17.62 0,14.091 L0,14.091 L0,5.92 C0,2.38 2.28,-2.84217094e-14 5.67,-2.84217094e-14 L5.67,-2.84217094e-14 Z M14.18,7 C13.84,6.66 13.28,6.66 12.94,7 L12.94,7 L8.81,11.13 L7.06,9.38 C6.72,9.04 6.16,9.04 5.82,9.38 C5.48,9.72 5.48,10.27 5.82,10.62 L5.82,10.62 L8.2,12.99 C8.37,13.16 8.59,13.24 8.81,13.24 C9.04,13.24 9.26,13.16 9.43,12.99 L9.43,12.99 L14.18,8.24 C14.52,7.9 14.52,7.35 14.18,7 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const ArrowDownIcon = ({
  className = 'h-6 w-6',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.5',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <title>Iconly/Light/Arrow - Down 2</title>
      <g
        id="Iconly/Light/Arrow---Down-2"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Arrow---Down-2"
          transform="translate(5.000000, 8.500000)"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <polyline id="Stroke-1" points="14 0 7 7 0 0"></polyline>
        </g>
      </g>
    </svg>
  );
};

export const EraserIcon = ({
  className = 'h-6 w-6',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.5',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      color={stroke}
    >
      <path
        d="M21 21H9M15.889 14.89L8.464 7.463M2.893 12.607l9.193-9.193a2 2 0 012.828 0l4.95 4.95a2 2 0 010 2.828l-9.243 9.243a1.929 1.929 0 01-2.728 0l-5-5a2 2 0 010-2.828z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const LightBulbIcon = ({
  className = 'h-6 w-6',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.5',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      color={stroke}
    >
      <path
        d="M9 18h6M10 21h4M9 15c.001-2-.499-2.5-1.5-3.5-1-1-1.476-2.013-1.5-3.5-.047-3.05 2-5 6-5 4.001 0 6.049 1.95 6 5-.023 1.487-.5 2.5-1.5 3.5-.999 1-1.499 1.5-1.5 3.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const UndoIcon = ({
  className = 'h-6 w-6',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.5',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      color={stroke}
    >
      <path
        d="M4.5 8H15s0 0 0 0 5 0 5 4.706C20 18 15 18 15 18H6.286"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.5 11.5L4 8l3.5-3.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const NoteIcon = ({
  className = 'h-6 w-6',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.5',
}: IIconProps) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      color={stroke}
    >
      <path
        d="M8 14h8M8 10h2M8 18h4M10 3H6a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-3.5M10 3V1m0 2v2"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
