import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DesignConcept } from '../data/catalog';
import { BRAND_INFO } from '../data/brand';
import { BorderlessCta } from './BorderlessCta';

interface LightboxModalProps {
  concept: DesignConcept | null;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  concept,
  currentIndex,
  total,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!concept) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [concept, onClose, onPrev, onNext]);

  if (!concept) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${concept.title} architectural visual`}
      className="fixed inset-0 z-50 bg-[#172A46]/96 backdrop-blur-sm text-white flex flex-col justify-between p-6 md:p-10"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-xs tracking-[0.12em] uppercase text-[#C6A46A] font-semibold tabular-nums">
          <span>
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-white/80">{concept.originLabel}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery viewer"
          className="inline-flex items-center gap-2 text-white hover:text-[#2EC4C6] bg-transparent border-0 cursor-pointer py-2 text-xs font-bold tracking-[0.1em] uppercase"
        >
          <span>Close</span>
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Media Frame */}
      <div className="flex-1 min-h-0 my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 h-full max-h-[68vh] flex items-center justify-center overflow-hidden">
          <img
            src={concept.image}
            alt={concept.title}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain block"
          />
        </div>

        <div className="lg:col-span-4 space-y-5">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#2EC4C6]">
            {concept.categoryLabel} · {concept.application}
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
            {concept.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {concept.description}
          </p>
          <p className="text-xs text-[#C6A46A] font-medium pt-2 border-t border-white/15">
            Palette Study: {concept.palette}
          </p>
          <div className="pt-2">
            <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="aqua">
              Enquire about this aesthetic
            </BorderlessCta>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between border-t border-white/15 pt-4">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous concept"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white/90 hover:text-[#2EC4C6] bg-transparent border-0 cursor-pointer py-2"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next concept"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white/90 hover:text-[#2EC4C6] bg-transparent border-0 cursor-pointer py-2"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
