import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND_INFO, SURFACE_IMAGES } from '../data/brand';
import { BorderlessCta } from '../components/BorderlessCta';
import { EditorialImage } from '../components/EditorialImage';
import { useCinematicReveal } from '../hooks/useCinematicReveal';

export const ServicesPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  useCinematicReveal(pageRef);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }, [location.hash]);

  return (
    <div ref={pageRef} className="w-full overflow-hidden">
      {/* FULL-BLEED TOP HERO OVERLAYING TRANSPARENT NAVBAR */}
      <section className="relative min-h-[72vh] flex items-end pb-16 md:pb-20 pt-36 bg-[#172A46]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-hero-parallax
            src={SURFACE_IMAGES.countertopObsidianGold}
            alt="Custom midnight blue and gold veined epoxy waterfall kitchen island"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#172A46]/92 via-[#172A46]/45 to-[#172A46]/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#172A46]/80 via-[#172A46]/30 to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-5">
            <p
              data-hero-animate
              className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E2C58F] drop-shadow-[0_1px_8px_rgba(23,42,70,0.65)]"
            >
              Confirmed Offerings · Residential | Commercial
            </p>
            <h1
              data-hero-animate
              className="font-display font-extrabold text-white text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.06] tracking-[-0.03em]"
            >
              Epoxy floors &amp; bespoke countertops.
            </h1>
            <p
              data-hero-animate
              className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl"
            >
              Every surface is custom-blended and poured to complement your interior—spanning
              artistic metallic floors, marble-effect finishes, decorative countertops, and 3D
              installations.
            </p>

            {/* Anchor chapter index */}
            <div
              data-hero-animate
              className="pt-4 flex flex-wrap items-center gap-6 md:gap-10 text-xs font-semibold tracking-[0.1em] uppercase text-white/85"
            >
              <a href="#custom-floors" className="hover:text-[#2EC4C6] transition-colors">
                01. Custom Epoxy Floors
              </a>
              <a href="#countertops" className="hover:text-[#2EC4C6] transition-colors">
                02. Epoxy Countertops
              </a>
              <a href="#residential" className="hover:text-[#2EC4C6] transition-colors">
                03. Residential
              </a>
              <a href="#commercial" className="hover:text-[#2EC4C6] transition-colors">
                04. Commercial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 01. CUSTOM EPOXY FLOORING — PEARL WHITE */}
      <section id="custom-floors" className="bg-[#F8F8F6] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-reveal className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                01. Custom Epoxy Flooring
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Seamless depth, metallic movement, and mirror clarity.
              </h2>
              <p className="text-[#424A52] text-base md:text-lg leading-relaxed">
                Our custom epoxy floors replace fractured tiles and ordinary concrete with continuous,
                artistic surfaces. Whether your space calls for flowing metallic pigments, soft
                marble veining, or deep high-gloss tones, each installation is composed on-site.
              </p>

              <div className="border-t border-[#172A46]/15 pt-6 space-y-3 text-sm text-[#28313C]">
                <p className="m-0">
                  <span className="font-semibold text-[#172A46]">Visual Directions:</span> Metallic
                  swirl, Calacatta-inspired marble effect, high-gloss single-tone, and layered 3D
                  artistic finishes.
                </p>
                <p className="m-0 text-[#424A52]">
                  Illustrative concepts below show sample colour palettes and surface directions;
                  visit <span className="font-semibold">@jjepoxy3d</span> on Instagram to inspect
                  real completed jobs.
                </p>
              </div>

              <div className="pt-2">
                <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                  Enquire about epoxy flooring on WhatsApp
                </BorderlessCta>
              </div>
            </div>

            <div data-reveal className="lg:col-span-7 space-y-8">
              <EditorialImage
                src={SURFACE_IMAGES.metallicChampagneLiving}
                alt="Custom metallic champagne and pearl grey epoxy floor inside modern residence"
                className="aspect-[16/10] w-full"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                <EditorialImage
                  src={SURFACE_IMAGES.marbleCalacattaFloor}
                  alt="Marble-effect white and silver high-gloss epoxy kitchen floor"
                  className="aspect-[4/3] w-full"
                />
                <EditorialImage
                  src={SURFACE_IMAGES.closeupMetallicSwirl}
                  alt="Macro close-up of metallic pigment swirl and optical epoxy topcoat"
                  className="aspect-[4/3] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. EPOXY COUNTERTOPS — WARM IVORY */}
      <section id="countertops" className="bg-[#F7F2E9] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-reveal className="lg:col-span-7 order-2 lg:order-1 space-y-8">
              <EditorialImage
                src={SURFACE_IMAGES.countertopAquaRiver}
                alt="Decorative translucent electric aqua and ivory marble-effect epoxy kitchen countertop"
                className="aspect-[16/10] w-full"
              />
              <p className="text-xs text-[#424A52]">
                Original Artistic Concept · Translucent aqua channel paired with warm ivory veined
                resin over natural edge geometry.
              </p>
            </div>

            <div data-reveal className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C6A46A]">
                02. Decorative Epoxy Countertops
              </p>
              <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Sculptural kitchen islands and custom resin worktops.
              </h2>
              <p className="text-[#424A52] text-base md:text-lg leading-relaxed">
                JJ Epoxy 3D crafts custom epoxy countertops for kitchens, dining islands, reception
                desks, and vanity surfaces. Choose rich obsidian and champagne marbling, bright white
                stone-inspired veining, or river-style translucent colour currents.
              </p>

              <div className="border-t border-[#172A46]/15 pt-6 space-y-2 text-sm text-[#424A52]">
                <p className="m-0">· Waterfall island edges and continuous backsplashes</p>
                <p className="m-0">· Custom pigment blending matched to cabinetry and fixtures</p>
                <p className="m-0">· Seamless glossy finish without visible stone joints</p>
              </div>

              <div className="pt-2">
                <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                  Discuss a countertop design on WhatsApp
                </BorderlessCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. RESIDENTIAL APPLICATIONS — ICE BLUE */}
      <section id="residential" className="bg-[#E6F0F3] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div data-reveal className="max-w-3xl space-y-4 mb-14">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
              03. Residential Applications
            </p>
            <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
              Signature artistry for modern homes.
            </h2>
            <p className="text-[#424A52] text-base md:text-lg leading-relaxed">
              From open-plan living areas and dining halls to spa-inspired bathrooms and bespoke
              kitchens, residential surfaces bring quiet visual drama to daily living.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div data-reveal className="lg:col-span-8">
              <EditorialImage
                src={SURFACE_IMAGES.oceanWave3d}
                alt="Residential luxury spa bathroom featuring a 3D ocean-inspired epoxy floor"
                className="aspect-[16/9] w-full"
              />
            </div>

            <div data-reveal className="lg:col-span-4 space-y-6">
              <div className="border-b border-[#172A46]/15 pb-4">
                <h3 className="font-display font-bold text-xl text-[#172A46]">Living &amp; Dining</h3>
                <p className="text-sm text-[#424A52] mt-1">
                  Wide seamless floors that reflect daylight across open architectural footprints.
                </p>
              </div>
              <div className="border-b border-[#172A46]/15 pb-4">
                <h3 className="font-display font-bold text-xl text-[#172A46]">Kitchens &amp; Islands</h3>
                <p className="text-sm text-[#424A52] mt-1">
                  Coordinated marble-effect floors paired with custom decorative epoxy countertops.
                </p>
              </div>
              <div className="border-b border-[#172A46]/15 pb-4">
                <h3 className="font-display font-bold text-xl text-[#172A46]">Bathrooms &amp; Feature Suites</h3>
                <p className="text-sm text-[#424A52] mt-1">
                  Coastal 3D water effects and serene mineral resin surfaces.
                </p>
              </div>

              <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                Plan your residential project
              </BorderlessCta>
            </div>
          </div>
        </div>
      </section>

      {/* 04. COMMERCIAL APPLICATIONS — DEEP MIDNIGHT BLUE */}
      <section id="commercial" className="bg-[#172A46] text-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
            <div data-reveal className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#2EC4C6]">
                04. Commercial Applications
              </p>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
                Unforgettable first impressions for commercial spaces.
              </h2>
            </div>
            <div data-reveal className="lg:col-span-6 space-y-6">
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Showrooms, reception lobbies, design studios, and retail interiors benefit from
                seamless decorative flooring that elevates architectural lighting and defines brand
                character the moment guests walk through the door.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="aqua">
                  Enquire for commercial spaces
                </BorderlessCta>
                <BorderlessCta to="/3d-designs" tone="light">
                  Browse concept gallery
                </BorderlessCta>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div data-reveal className="lg:col-span-7">
              <EditorialImage
                src={SURFACE_IMAGES.commercialShowroom}
                alt="Commercial architectural showroom with reflective graphite and royal indigo epoxy floor"
                className="aspect-[16/10] w-full lg:h-full"
              />
            </div>
            <div data-reveal className="lg:col-span-5">
              <EditorialImage
                src={SURFACE_IMAGES.commercialReception}
                alt="Commercial reception lobby featuring custom royal indigo and champagne epoxy floor"
                className="aspect-[4/3] w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
