import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'curve';
  flip?: boolean;
  className?: string;
  color?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  flip = false,
  className = '',
  color = 'hsl(var(--background))',
}) => {
  const transform = flip ? 'scaleY(-1)' : undefined;

  if (variant === 'curve') {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[40px] sm:h-[60px] md:h-[80px]"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  // wave variant
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] sm:h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
