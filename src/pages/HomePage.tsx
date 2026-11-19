import React, { useRef } from 'react';
import { ACTUAL_INSTAGRAM_PROJECTS, BRAND_INFO, SURFACE_IMAGES } from '../data/brand';
import { BorderlessCta } from '../components/BorderlessCta';
import { EditorialImage } from '../components/EditorialImage';
import { useCinematicReveal } from '../hooks/useCinematicReveal';

export const HomePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  useCinematicReveal(pageRef);

  return (
    <div ref={pageRef} className="w-full overflow-hidden">
      {/* 1. CINEMATIC FULL-BLEED HERO (Extends behind transparent navbar) */}
      <section className="relative min-h-[100svh] flex items-end pb-16 md:pb-24 pt-32 bg-[#172A46]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-hero-parallax
            src={SURFACE_IMAGES.heroLuxuryMetallic}
            alt="Luxury modern living pavilion with high-gloss midnight blue and champagne metallic epoxy floor"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle local bottom-left readability scrim keeping floor reflections bright */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#172A46]/90 via-[#172A46]/25 to-[#172A46]/40"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#172A46]/82 via-[#172A46]/35 to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-6">
            <p
              data-hero-animate
              className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#7CE8EA] drop-shadow-[0_1px_8px_rgba(23,42,70,0.65)]"
            >
              JJ EPOXY 3D · Artistic Surface Design
            </p>
            <h1
              data-hero-animate
              className="font-display font-extrabold text-white text-[clamp(2.65rem,5.4vw,4.75rem)] leading-[1.04] tracking-[-0.03em]"
            >
              Floors that become art.
            </h1>
            <p
              data-hero-animate
              className="text-white/90 text-base md:text-xl leading-relaxed max-w-xl font-normal"
            >
              Custom epoxy floors, decorative countertops, and bespoke 3D designs crafted for
              residential and commercial interiors.
            </p>

            <div
              data-hero-animate
              className="pt-4 flex flex-wrap items-center gap-8 md:gap-12"
            >
              <BorderlessCta to="/3d-designs" tone="aqua">
                Explore our designs
              </BorderlessCta>
              <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="light">
                Get a custom quote
              </BorderlessCta>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION — PEARL WHITE */}
      <section className="bg-[#F8F8F6] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div data-reveal className="lg:col-span-6 space-y-7">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                The Craft of Seamless Surfaces
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Architectural resin artistry poured without seams.
              </h2>
              <p className="text-[#424A52] text-base md:text-lg leading-relaxed max-w-xl">
                JJ Epoxy 3D transforms ordinary concrete and worktops into continuous sculptural
                surfaces. From luminous metallic pigments and natural marble veining to multi-layer
                3D floor concepts, every pour is designed around the architecture it inhabits.
              </p>

              <div className="pt-4 border-t border-[#172A46]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-display font-bold text-[#172A46]">Custom Floors</p>
                  <p className="text-[#424A52] mt-1">Metallic &amp; marble-effect finishes</p>
                </div>
                <div>
                  <p className="font-display font-bold text-[#172A46]">Countertops</p>
                  <p className="text-[#424A52] mt-1">Bespoke islands &amp; worktops</p>
                </div>
                <div>
                  <p className="font-display font-bold text-[#172A46]">3D Design</p>
                  <p className="text-[#424A52] mt-1">Residential &amp; commercial</p>
                </div>
              </div>

              <div className="pt-2">
                <BorderlessCta to="/epoxy-services" tone="dark">
                  Explore custom epoxy floors
                </BorderlessCta>
              </div>
            </div>

            <div data-reveal className="lg:col-span-6 lg:pl-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
                <div className="sm:col-span-7">
                  <EditorialImage
                    src={SURFACE_IMAGES.studioCraftPortrait}
                    alt="Epoxy surface artist pouring metallic champagne gold and deep midnight blue resin in sunlit studio"
                    className="aspect-[3/4] w-full"
                  />
                </div>
                <div className="sm:col-span-5 space-y-3">
                  <EditorialImage
                    src={SURFACE_IMAGES.closeupMetallicSwirl}
                    alt="Macro detail of cured metallic champagne gold and midnight blue epoxy resin swirl"
                    className="aspect-[3/4] w-full"
                  />
                  <p className="text-xs text-[#424A52] leading-relaxed">
                    Studio Craftsmanship Visual · Hand-poured metallic depth &amp; mirror edge finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUSTOM EPOXY FLOORING SHOWCASE — WARM IVORY */}
      <section className="bg-[#F7F2E9] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A46A]">
                Custom Epoxy Floors
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Fluid metallic movement and sculpted marble depth.
              </h2>
            </div>
            <BorderlessCta to="/epoxy-services#custom-floors" tone="dark">
              View flooring systems
            </BorderlessCta>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div data-reveal className="lg:col-span-7 space-y-4">
              <EditorialImage
                src={SURFACE_IMAGES.metallicChampagneLiving}
                alt="Warm pearl and champagne metallic epoxy floor in contemporary sunlit living room"
                className="aspect-[4/3] w-full"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 pt-1">
                <h3 className="font-display font-semibold text-xl text-[#172A46]">
                  Metallic Pigment Living Spaces
                </h3>
                <span className="text-xs text-[#424A52]">Original Artistic Concept</span>
              </div>
            </div>

            <div data-reveal className="lg:col-span-5 lg:pt-16 space-y-4">
              <EditorialImage
                src={SURFACE_IMAGES.marbleCalacattaFloor}
                alt="High-gloss white and silver marble-effect seamless epoxy floor in dining space"
                className="aspect-[4/3] w-full"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 pt-1">
                <h3 className="font-display font-semibold text-xl text-[#172A46]">
                  Marble-Effect Dining &amp; Kitchen Floors
                </h3>
                <span className="text-xs text-[#424A52]">Original Artistic Concept</span>
              </div>
              <p className="text-sm md:text-base text-[#424A52] leading-relaxed pt-2">
                Hand-poured tonal transitions eliminate grout lines, carrying natural sunlight
                smoothly from room to room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3D ARTISTIC DESIGN SPOTLIGHT — DEEP MIDNIGHT BLUE */}
      <section className="bg-[#172A46] text-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-reveal className="lg:col-span-7">
              <EditorialImage
                src={SURFACE_IMAGES.oceanWave3d}
                alt="3D coastal ocean wave epoxy floor inside minimalist stone spa bathroom"
                className="aspect-[16/10] w-full"
              />
            </div>

            <div data-reveal className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#2EC4C6]">
                3D Artistic Design
              </p>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Dimensional depth beneath a glass-clear coat.
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                From coastal ocean currents to deep mineral compositions, JJ Epoxy 3D creates
                dimensional floor concepts that turn an entire room into a living focal piece.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-8">
                <BorderlessCta to="/3d-designs" tone="aqua">
                  Discover 3D designs
                </BorderlessCta>
                <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="light">
                  Chat on WhatsApp
                </BorderlessCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EPOXY COUNTERTOPS PRESENTATION — ICE BLUE */}
      <section className="bg-[#E6F0F3] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div data-reveal className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                Epoxy Countertops
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Custom kitchen islands &amp; river-style worktops.
              </h2>
              <p className="text-[#424A52] text-base md:text-lg leading-relaxed">
                Bespoke poured resin countertops bring dramatic waterfall veining, metallic gold
                accents, and translucent aqua channels to kitchens, bars, and feature prep spaces.
              </p>
              <div className="pt-2">
                <BorderlessCta to="/epoxy-services#countertops" tone="dark">
                  Explore our countertops
                </BorderlessCta>
              </div>
            </div>

            <div data-reveal className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <EditorialImage
                src={SURFACE_IMAGES.countertopObsidianGold}
                alt="Bespoke midnight blue and champagne gold veined epoxy waterfall kitchen island"
                className="aspect-[16/9] w-full"
              />
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-6">
                  <EditorialImage
                    src={SURFACE_IMAGES.countertopAquaRiver}
                    alt="Close-up of translucent electric aqua and ivory epoxy river countertop"
                    className="aspect-[4/3] w-full"
                  />
                </div>
                <p className="sm:col-span-6 text-sm text-[#424A52] leading-relaxed">
                  Original Artistic Concepts · Custom colour blending allows every kitchen island and
                  river worktop to match surrounding cabinetry, timber, and hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESIDENTIAL & COMMERCIAL POSITIONING — SOFT MARBLE */}
      <section className="bg-[#ECEDEA] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-3xl space-y-4 mb-14">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
              Residential | Commercial
            </p>
            <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
              Tailored for private residences and signature commercial interiors.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div data-reveal className="lg:col-span-7 space-y-4">
              <EditorialImage
                src={SURFACE_IMAGES.commercialShowroom}
                alt="Contemporary commercial showroom with reflective graphite and royal indigo epoxy floor"
                className="aspect-[16/10] w-full"
              />
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#172A46]/15 pb-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#172A46]">
                    Commercial Spaces
                  </h3>
                  <p className="text-sm text-[#424A52] mt-1">
                    Showrooms, reception lobbies, studios, and customer-facing galleries.
                  </p>
                </div>
                <BorderlessCta to="/epoxy-services#commercial" tone="dark">
                  Commercial applications
                </BorderlessCta>
              </div>
            </div>

            <div data-reveal className="lg:col-span-5 space-y-4">
              <EditorialImage
                src={SURFACE_IMAGES.marbleCalacattaFloor}
                alt="Sunlit residential kitchen and dining interior with white and silver marble-effect epoxy floor"
                className="aspect-[4/3] w-full"
              />
              <div className="pt-2 space-y-4 border-b border-[#172A46]/15 pb-6">
                <h3 className="font-display font-bold text-2xl text-[#172A46]">
                  Residential Living
                </h3>
                <p className="text-sm text-[#424A52] leading-relaxed">
                  Living rooms, kitchens, bathrooms, and custom countertop focal pieces designed for
                  everyday life.
                </p>
                <BorderlessCta to="/epoxy-services#residential" tone="dark">
                  Residential applications
                </BorderlessCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AUTHENTIC @JJEPOXY3D COMPLETED WORK & WHATSAPP FINALE — PURE WHITE */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-16">
          <div
            data-reveal
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#172A46]/15 pt-14"
          >
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                Actual JJ Epoxy 3D Projects · {BRAND_INFO.handle}
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Genuine installations from {BRAND_INFO.handle} &amp; direct WhatsApp consultation.
              </h2>
              <p className="text-[#424A52] text-base md:text-lg leading-relaxed max-w-2xl">
                Below are authentic completed floors and custom epoxy installations shared on our
                official Instagram account. Explore more posts and reels on Instagram or message us
                on WhatsApp to begin your space.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5">
              <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                Chat with us on WhatsApp
              </BorderlessCta>
              <BorderlessCta href={BRAND_INFO.instagramUrl} tone="champagne">
                Follow our work on Instagram
              </BorderlessCta>
              <BorderlessCta to="/contact" tone="dark">
                Prepare a project brief
              </BorderlessCta>
            </div>
          </div>

          <div
            data-reveal
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-b border-[#172A46]/15 pb-16"
          >
            {ACTUAL_INSTAGRAM_PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-3">
                <EditorialImage
                  src={proj.image}
                  alt={proj.title}
                  className="aspect-[4/3] w-full"
                />
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#394E91]">
                  {proj.sourceLabel}
                </p>
                <h3 className="font-display font-bold text-lg text-[#172A46]">{proj.title}</h3>
                <p className="text-xs text-[#424A52] leading-relaxed">{proj.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
