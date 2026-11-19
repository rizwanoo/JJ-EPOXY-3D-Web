import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';
import { BrandMark } from './BrandMark';

const EPOXY_SUBMENU = [
  { label: 'Custom Epoxy Floors', to: '/epoxy-services#custom-floors' },
  { label: 'Epoxy Countertops', to: '/epoxy-services#countertops' },
  { label: 'Residential Spaces', to: '/epoxy-services#residential' },
  { label: 'Commercial Spaces', to: '/epoxy-services#commercial' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const openedByHoverRef = useRef<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    openedByHoverRef.current = false;
  }, [location.pathname, location.hash]);

  // Close dropdown on Escape key or outside click
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
        openedByHoverRef.current = false;
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        openedByHoverRef.current = false;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const openDropdown = () => {
    if (dropdownTimerRef.current) {
      window.clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    if (!dropdownOpen) {
      openedByHoverRef.current = true;
    }
    setDropdownOpen(true);
  };

  const closeDropdownDelayed = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
      openedByHoverRef.current = false;
    }, 200);
  };

  const handleDropdownButtonClick = () => {
    if (dropdownOpen && openedByHoverRef.current) {
      openedByHoverRef.current = false;
      return;
    }
    openedByHoverRef.current = false;
    setDropdownOpen((prev) => !prev);
  };

  const isLightHeader = scrolled || mobileOpen;
  const navTextClass = isLightHeader
    ? 'text-[#172A46] hover:text-[#394E91]'
    : 'text-white/95 hover:text-[#2EC4C6]';

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isLightHeader
          ? 'bg-[#F8F8F6]/95 backdrop-blur-md border-b border-[#172A46]/10'
          : 'bg-gradient-to-b from-[#172A46]/55 via-[#172A46]/20 to-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" aria-label="JJ EPOXY 3D Home" className="shrink-0">
          <BrandMark variant={isLightHeader ? 'dark' : 'light'} size="nav" />
        </Link>

        {/* Zone 2: Desktop Single-Line Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-[14px] font-semibold tracking-[0.04em]"
        >
          <Link
            to="/"
            className={`whitespace-nowrap shrink-0 py-2 transition-colors ${navTextClass} ${
              isActive('/') ? 'underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Home
          </Link>

          {/* Epoxy Floors with continuous hover/focus/click submenu */}
          <div
            ref={dropdownContainerRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownDelayed}
          >
            <div className="inline-flex items-center gap-1">
              <Link
                to="/epoxy-services"
                className={`whitespace-nowrap shrink-0 py-2 transition-colors ${navTextClass} ${
                  isActive('/epoxy-services') ? 'underline underline-offset-8 decoration-2' : ''
                }`}
              >
                Epoxy Floors
              </Link>
              <button
                type="button"
                aria-label="Toggle Epoxy Floors submenu"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={handleDropdownButtonClick}
                className={`p-1 bg-transparent border-0 cursor-pointer transition-transform ${navTextClass}`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {dropdownOpen && (
              <div
                role="menu"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownDelayed}
                className="absolute left-0 top-full pt-2 min-w-[236px]"
              >
                <div className="bg-[#F8F8F6] border-t-2 border-[#2EC4C6] py-3 px-5 shadow-lg">
                  <ul className="space-y-1 m-0 p-0 list-none">
                    {EPOXY_SUBMENU.map((sub) => (
                      <li key={sub.to} role="none">
                        <Link
                          role="menuitem"
                          to={sub.to}
                          onClick={() => setDropdownOpen(false)}
                          className="block py-2 text-[14px] font-medium text-[#28313C] hover:text-[#394E91] transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/epoxy-services#countertops"
            className={`whitespace-nowrap shrink-0 py-2 transition-colors ${navTextClass}`}
          >
            Countertops
          </Link>

          <Link
            to="/3d-designs"
            className={`whitespace-nowrap shrink-0 py-2 transition-colors ${navTextClass} ${
              isActive('/3d-designs') ? 'underline underline-offset-8 decoration-2' : ''
            }`}
          >
            3D Designs
          </Link>

          <Link
            to="/contact"
            className={`whitespace-nowrap shrink-0 py-2 transition-colors ${navTextClass} ${
              isActive('/contact') ? 'underline underline-offset-8 decoration-2' : ''
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: Borderless Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-5 shrink-0">
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex cta-borderless text-[13px] ${
              isLightHeader
                ? 'text-[#172A46] hover:text-[#394E91]'
                : 'text-white hover:text-[#2EC4C6]'
            }`}
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 cta-arrow" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden p-2 bg-transparent border-0 cursor-pointer ${
              isLightHeader ? 'text-[#172A46]' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Width Navigation Panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F8F6] border-t border-[#172A46]/10 px-6 py-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-display font-bold text-2xl text-[#172A46]"
            >
              Home
            </Link>
            <div className="border-t border-[#172A46]/10 pt-4">
              <Link
                to="/epoxy-services"
                onClick={() => setMobileOpen(false)}
                className="font-display font-bold text-2xl text-[#172A46] block mb-3"
              >
                Epoxy Floors &amp; Countertops
              </Link>
              <div className="pl-4 flex flex-col space-y-2.5 border-l border-[#C6A46A]/60">
                {EPOXY_SUBMENU.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-[#424A52] hover:text-[#172A46]"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/3d-designs"
              onClick={() => setMobileOpen(false)}
              className="font-display font-bold text-2xl text-[#172A46] border-t border-[#172A46]/10 pt-4"
            >
              3D Designs &amp; Gallery
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-display font-bold text-2xl text-[#172A46] border-t border-[#172A46]/10 pt-4"
            >
              Contact &amp; Enquiries
            </Link>

            <div className="border-t border-[#172A46]/15 pt-6 flex flex-col items-start gap-4">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="cta-borderless text-[#172A46]"
              >
                <span>Chat with us on WhatsApp</span>
                <ArrowRight className="w-4 h-4 cta-arrow" aria-hidden="true" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="cta-borderless text-[#394E91]"
              >
                <span>Follow @jjepoxy3d on Instagram</span>
                <ArrowRight className="w-4 h-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
