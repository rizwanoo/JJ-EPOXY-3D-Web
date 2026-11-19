import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BaseProps {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'aqua' | 'champagne';
  className?: string;
  ariaLabel?: string;
}

type LinkCtaProps = BaseProps & {
  to: string;
  href?: never;
  onClick?: () => void;
  type?: never;
};

type ExternalCtaProps = BaseProps & {
  href: string;
  external?: boolean;
  to?: never;
  onClick?: () => void;
  type?: never;
};

type ButtonCtaProps = BaseProps & {
  onClick?: () => void;
  type?: 'button' | 'submit';
  to?: never;
  href?: never;
};

export type BorderlessCtaProps = LinkCtaProps | ExternalCtaProps | ButtonCtaProps;

const TONE_MAP: Record<NonNullable<BaseProps['tone']>, string> = {
  light: 'text-white hover:text-[#2EC4C6]',
  dark: 'text-[#172A46] hover:text-[#394E91]',
  aqua: 'text-[#2EC4C6] hover:text-white',
  champagne: 'text-[#C6A46A] hover:text-[#172A46]',
};

export const BorderlessCta: React.FC<BorderlessCtaProps> = (props) => {
  const toneClass = TONE_MAP[props.tone ?? 'dark'];
  const combinedClass = `cta-borderless ${toneClass} ${props.className ?? ''}`.trim();

  const content = (
    <>
      <span>{props.children}</span>
      <ArrowRight className="w-4 h-4 cta-arrow shrink-0" aria-hidden="true" />
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link
        to={props.to}
        onClick={props.onClick}
        aria-label={props.ariaLabel}
        className={combinedClass}
      >
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const isExternal = props.external ?? props.href.startsWith('http');
    return (
      <a
        href={props.href}
        onClick={props.onClick}
        aria-label={props.ariaLabel}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
      className={combinedClass}
    >
      {content}
    </button>
  );
};
