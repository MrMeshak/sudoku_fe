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
