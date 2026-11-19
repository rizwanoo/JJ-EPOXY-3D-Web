import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden bg-gradient-to-br from-[#172A46] via-[#394E91] to-[#2EC4C6] flex items-end p-8 ${className}`}
      >
        <div className="text-white">
          <p className="font-display font-bold text-lg">{fallbackTitle ?? 'JJ EPOXY 3D'}</p>
          <p className="text-xs text-white/80 mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#172A46]/10 ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover block transition-transform duration-700 ease-out ${imgClassName}`}
      />
    </div>
  );
};
