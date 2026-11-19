import React from 'react';
import { BRAND_INFO } from '../data/brand';

interface BrandMarkProps {
  variant?: 'light' | 'dark';
  size?: 'nav' | 'footer';
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  variant = 'dark',
  size = 'nav',
}) => {
  const isLight = variant === 'light';
  const primaryText = isLight ? 'text-white' : 'text-[#172A46]';
  const accentText = isLight ? 'text-[#2EC4C6]' : 'text-[#394E91]';
  const emblemDimension =
    size === 'footer' ? 'w-14 h-14' : 'w-11 h-11 md:w-12 md:h-12';
  const wordmarkClass =
    size === 'footer'
      ? 'text-2xl md:text-[1.85rem] tracking-[-0.025em]'
      : 'text-xl md:text-[1.5rem] tracking-[-0.025em]';

  return (
    <span className="inline-flex items-center gap-3.5 whitespace-nowrap shrink-0 select-none">
      <img
        src={BRAND_INFO.logoUrl}
        alt="JJ EPOXY 3D Emblem"
        className={`${emblemDimension} object-cover shrink-0 border border-[#C6A46A]/60`}
      />
      <span className={`font-display font-extrabold leading-none ${wordmarkClass} ${primaryText}`}>
        JJ EPOXY <span className={accentText}>3D</span>
      </span>
    </span>
  );
};
