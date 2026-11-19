import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/brand';
import { BrandMark } from './BrandMark';
import { BorderlessCta } from './BorderlessCta';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#172A46] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" aria-label="JJ EPOXY 3D Home" className="inline-block">
              <BrandMark variant="light" size="footer" />
            </Link>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Custom epoxy floors, countertops &amp; 3D design for residential and commercial spaces.
            </p>
            <p className="text-xs tracking-[0.12em] uppercase text-[#C6A46A] font-semibold">
              Artist · {BRAND_INFO.handle}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display font-bold text-sm tracking-[0.14em] uppercase text-[#C6A46A]">
              Explore
            </h2>
            <ul className="space-y-3 m-0 p-0 list-none text-[15px]">
              <li>
                <Link to="/" className="text-white/85 hover:text-[#2EC4C6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/epoxy-services"
                  className="text-white/85 hover:text-[#2EC4C6] transition-colors"
                >
                  Epoxy Floors &amp; Countertops
                </Link>
              </li>
              <li>
                <Link
                  to="/3d-designs"
                  className="text-white/85 hover:text-[#2EC4C6] transition-colors"
                >
                  3D Designs &amp; Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/85 hover:text-[#2EC4C6] transition-colors"
                >
                  Contact &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h2 className="font-display font-bold text-sm tracking-[0.14em] uppercase text-[#C6A46A]">
              Direct Channels
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              Discuss your residential or commercial flooring, countertop, or 3D surface concept directly via our official channels.
            </p>
            <div className="flex flex-col items-start gap-3">
              <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="aqua">
                Chat with us on WhatsApp
              </BorderlessCta>
              <BorderlessCta href={BRAND_INFO.instagramUrl} tone="light">
                Follow @jjepoxy3d on Instagram
              </BorderlessCta>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p className="m-0">
            &copy; {year} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className="m-0">
            Residential · Commercial · Custom Epoxy Floors, Countertops &amp; 3D Design
          </p>
        </div>
      </div>
    </footer>
  );
};
