import React, { useMemo, useRef, useState } from 'react';
import { Expand } from 'lucide-react';
import { ACTUAL_INSTAGRAM_PROJECTS, BRAND_INFO, SURFACE_IMAGES } from '../data/brand';
import { CONCEPT_FILTERS, ConceptCategory, DESIGN_CONCEPTS } from '../data/catalog';
import { filterConcepts, getAdjacentConceptIndex } from '../utils/galleryFilter';
import { BorderlessCta } from '../components/BorderlessCta';
import { EditorialImage } from '../components/EditorialImage';
import { LightboxModal } from '../components/LightboxModal';
import { useCinematicReveal } from '../hooks/useCinematicReveal';

export const GalleryPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<ConceptCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useCinematicReveal(pageRef);

  const visibleConcepts = useMemo(
    () => filterConcepts(DESIGN_CONCEPTS, activeCategory),
    [activeCategory]
  );

  const activeConcept =
    lightboxIndex !== null && visibleConcepts[lightboxIndex]
      ? visibleConcepts[lightboxIndex]
      : null;

  return (
    <div ref={pageRef} className="w-full overflow-hidden">
      {/* 1. CINEMATIC 3D GALLERY HERO */}
      <section className="relative min-h-[75vh] flex items-end pb-16 md:pb-24 pt-36 bg-[#172A46]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-hero-parallax
            src={SURFACE_IMAGES.oceanWave3d}
            alt="3D ocean wave resin floor inside luxury limestone spa suite"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#172A46]/92 via-[#172A46]/40 to-[#172A46]/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#172A46]/82 via-[#172A46]/35 to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-5">
            <p
              data-hero-animate
              className="text-xs font-semibold tracking-[0.16em] uppercase text-[#7CE8EA] drop-shadow-[0_1px_8px_rgba(23,42,70,0.65)]"
            >
              3D Designs &amp; Visual Portfolio
            </p>
            <h1
              data-hero-animate
              className="font-display font-extrabold text-white text-[clamp(2.4rem,4.8vw,4.35rem)] leading-[1.06] tracking-[-0.03em]"
            >
              Artistic 3D depth &amp; custom surface concepts.
            </h1>
            <p
              data-hero-animate
              className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl"
            >
              Explore bespoke 3D floor visuals, metallic pigment compositions, and countertop surface
              directions—distinctly separated from completed client installations on Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC @JJEPOXY3D INSTAGRAM ARCHIVE SECTION — PEARL WHITE */}
      <section className="bg-[#F8F8F6] py-20 md:py-28 border-b border-[#172A46]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div data-reveal className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                Actual JJ Epoxy 3D Projects · {BRAND_INFO.handle}
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-2xl md:text-4xl leading-tight">
                Real completed epoxy floors &amp; custom surfaces from @jjepoxy3d.
              </h2>
              <p className="text-[#424A52] text-sm md:text-base leading-relaxed max-w-2xl">
                These authentic photographs are sourced directly from JJ Epoxy 3D&apos;s official
                Instagram showcase and kept strictly separate from the{' '}
                <strong className="text-[#172A46]">Original Artistic Concepts</strong> curated
                below.
              </p>
            </div>

            <div data-reveal className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
              <BorderlessCta href={BRAND_INFO.instagramUrl} tone="dark">
                View all 100+ posts on Instagram
              </BorderlessCta>
              <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="champagne">
                Request project photos on WhatsApp
              </BorderlessCta>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACTUAL_INSTAGRAM_PROJECTS.map((project) => (
              <article key={project.id} className="space-y-3">
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  className="aspect-square w-full"
                />
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#394E91]">
                  {project.sourceLabel}
                </p>
                <h3 className="font-display font-bold text-lg text-[#172A46] leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#424A52] leading-relaxed">{project.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CUSTOM DESIGN CONCEPTS FILTER & OPEN ARCHITECTURAL GALLERY — WARM IVORY / PEARL */}
      <section className="bg-[#F7F2E9] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Header & Borderless Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#172A46]/15">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A46A]">
                Custom Design Inspiration · Illustrative Visual Collection
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-tight">
                Curated surface studies
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {CONCEPT_FILTERS.map((filter) => {
                const isSelected = activeCategory === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(filter.id);
                      setLightboxIndex(null);
                    }}
                    aria-pressed={isSelected}
                    className={`bg-transparent border-0 p-0 pb-1.5 text-xs md:text-sm font-semibold tracking-[0.06em] uppercase cursor-pointer whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'text-[#172A46] border-b-2 border-[#2EC4C6]'
                        : 'text-[#424A52] hover:text-[#172A46]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
              <span className="text-xs text-[#424A52] tabular-nums pl-2">
                {visibleConcepts.length} {visibleConcepts.length === 1 ? 'concept' : 'concepts'}
              </span>
            </div>
          </div>

          {/* Open Asymmetric Editorial Showcase — Zero Cards, Zero Borders */}
          <div className="pt-14 space-y-20 md:space-y-24">
            {visibleConcepts.map((item, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <article
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  <div
                    className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Open fullscreen view of ${item.title}`}
                      className="group relative block w-full text-left bg-transparent border-0 p-0 cursor-pointer overflow-hidden focus-visible:outline-2"
                    >
                      <EditorialImage
                        src={item.image}
                        alt={item.title}
                        className={
                          item.aspect === 'portrait'
                            ? 'aspect-[4/3] w-full'
                            : 'aspect-[16/10] w-full'
                        }
                        imgClassName="group-hover:scale-[1.03]"
                      />
                      <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-[#394E91] group-hover:text-[#172A46]">
                        <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Inspect full resolution</span>
                      </span>
                    </button>
                  </div>

                  <div
                    className={`lg:col-span-5 space-y-4 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#394E91]">
                      <span>{String(idx + 1).padStart(2, '0')}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#C6A46A]">{item.originLabel}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl md:text-4xl text-[#172A46] leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[#424A52] text-base leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 text-xs text-[#28313C] space-y-1 border-t border-[#172A46]/15">
                      <p className="m-0 pt-3">
                        <span className="font-semibold text-[#172A46]">Setting:</span>{' '}
                        {item.application}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#172A46]">Palette:</span>{' '}
                        {item.palette}
                      </p>
                    </div>

                    <div className="pt-2">
                      <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                        Create a design like this
                      </BorderlessCta>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL MATERIAL DETAIL FILMSTRIP — DEEP MIDNIGHT BLUE */}
      <section className="bg-[#172A46] text-white py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#2EC4C6]">
                Tactile Surface Studies
              </p>
              <h2 className="font-display font-bold text-2xl md:text-4xl">
                Horizontal macro sequence
              </h2>
            </div>
            <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="aqua">
              Chat with us on WhatsApp
            </BorderlessCta>
          </div>

          <div className="editorial-strip flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {[
              {
                src: SURFACE_IMAGES.closeupMetallicSwirl,
                title: 'Metallic Champagne & Midnight Pigment Swirl',
              },
              {
                src: SURFACE_IMAGES.closeup3dAquaDepth,
                title: 'Layered 3D Electric Aqua & Violet Resin Strata',
              },
              {
                src: SURFACE_IMAGES.countertopAquaRiver,
                title: 'Aqua River & Warm Ivory Countertop Edge',
              },
              {
                src: SURFACE_IMAGES.heroLuxuryMetallic,
                title: 'Mirror-Gloss Architectural Daylight Reflection',
              },
            ].map((slide) => (
              <div
                key={slide.title}
                className="min-w-[280px] sm:min-w-[380px] lg:min-w-[440px] snap-start space-y-3 shrink-0"
              >
                <EditorialImage
                  src={slide.src}
                  alt={slide.title}
                  className="aspect-[4/3] w-full"
                />
                <p className="text-sm text-white/85 font-medium">{slide.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        concept={activeConcept}
        currentIndex={lightboxIndex ?? 0}
        total={visibleConcepts.length}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === null ? null : getAdjacentConceptIndex(prev, visibleConcepts.length, 'prev')
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === null ? null : getAdjacentConceptIndex(prev, visibleConcepts.length, 'next')
          )
        }
      />
    </div>
  );
};
