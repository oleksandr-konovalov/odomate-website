interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export const PhoneMockup = ({ src, alt, className = '' }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Outer frame - titanium body */}
      <div className="relative h-full rounded-[2.5rem] bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 p-[3px] shadow-2xl shadow-black/40">
        {/* Inner bezel */}
        <div className="h-full rounded-[2.3rem] bg-black p-[2px]">
          {/* Screen */}
          <div className="relative h-full rounded-[2.1rem] overflow-hidden bg-card">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Side buttons */}
      <div className="h-[40px] w-[3px] bg-gradient-to-b from-neutral-700 to-neutral-800 absolute -start-[3px] top-[80px] rounded-s-lg" />
      <div className="h-[55px] w-[3px] bg-gradient-to-b from-neutral-700 to-neutral-800 absolute -start-[3px] top-[140px] rounded-s-lg" />
      <div className="h-[55px] w-[3px] bg-gradient-to-b from-neutral-700 to-neutral-800 absolute -start-[3px] top-[210px] rounded-s-lg" />
      <div className="h-[75px] w-[3px] bg-gradient-to-b from-neutral-700 to-neutral-800 absolute -end-[3px] top-[170px] rounded-e-lg" />
    </div>
  );
};

interface CarDisplayMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export const CarDisplayMockup = ({ src, alt, className = '' }: CarDisplayMockupProps) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Outer frame - automotive head unit */}
      <div className="relative rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-800 p-[4px] shadow-2xl shadow-black/50">
        {/* Inner bezel */}
        <div className="rounded-xl bg-black p-[3px]">
          {/* Screen */}
          <div className="relative rounded-lg overflow-hidden bg-card">
            {/* Top status bar accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 z-10" />
            <img
              src={src}
              alt={alt}
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
