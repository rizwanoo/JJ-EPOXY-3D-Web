import React, { useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { BRAND_INFO, SURFACE_IMAGES } from '../data/brand';
import {
  EnquiryFieldErrors,
  EnquiryFormValues,
  PreferredContact,
  SpaceScope,
  SurfaceFocus,
  formatWhatsAppBrief,
  validateEnquiryForm,
} from '../utils/enquiry';
import { BorderlessCta } from '../components/BorderlessCta';
import { useCinematicReveal } from '../hooks/useCinematicReveal';

const INITIAL_VALUES: EnquiryFormValues = {
  fullName: '',
  phone: '',
  email: '',
  projectType: '',
  spaceScope: 'Residential',
  surfaceFocus: 'Custom Epoxy Floors',
  designPreferences: '',
  projectSize: '',
  projectDescription: '',
  preferredContact: 'WhatsApp',
};

export const ContactPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<EnquiryFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [preparedBrief, setPreparedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useCinematicReveal(pageRef);

  const updateField = <K extends keyof EnquiryFormValues>(
    field: K,
    val: EnquiryFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handlePrepareBrief = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEnquiryForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setPreparedBrief(null);
      return;
    }
    setPreparedBrief(formatWhatsAppBrief(values));
    setCopied(false);
  };

  const handleCopyBrief = async () => {
    if (!preparedBrief) return;
    try {
      await navigator.clipboard.writeText(preparedBrief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const inputBaseClass =
    'w-full bg-transparent border-0 border-b border-[#172A46]/25 focus:border-[#394E91] py-3 text-[15px] text-[#28313C] placeholder:text-[#424A52]/60 focus:outline-none transition-colors';

  const labelBaseClass =
    'block text-xs font-semibold tracking-[0.08em] uppercase text-[#172A46] mb-1';

  return (
    <div ref={pageRef} className="w-full overflow-hidden">
      {/* 1. CINEMATIC CONTACT TOP BANNER */}
      <section className="relative min-h-[62vh] flex items-end pb-14 md:pb-20 pt-36 bg-[#172A46]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-hero-parallax
            src={SURFACE_IMAGES.commercialReception}
            alt="Boutique commercial reception interior with royal indigo and champagne metallic epoxy floor"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#172A46]/92 via-[#172A46]/45 to-[#172A46]/45"
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
              Custom Design Enquiries
            </p>
            <h1
              data-hero-animate
              className="font-display font-extrabold text-white text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.06] tracking-[-0.03em]"
            >
              Start your custom epoxy surface project.
            </h1>
            <p
              data-hero-animate
              className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl"
            >
              Connect directly with {BRAND_INFO.name} via WhatsApp or Instagram to discuss custom
              epoxy floors, countertops, and 3D floor designs for residential or commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED CHANNELS + CUSTOM DESIGN BRIEF COMPOSER */}
      <section className="bg-[#F8F8F6] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* LEFT: VERIFIED OFFICIAL CONTACT CHANNELS */}
            <div data-reveal className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                  Official Contact Channels
                </p>
                <h2 className="font-display font-bold text-[#172A46] text-3xl md:text-4xl leading-tight">
                  Direct WhatsApp &amp; Instagram access.
                </h2>
                <p className="text-[#424A52] text-base leading-relaxed">
                  WhatsApp is our primary enquiry channel for custom floor measurements, countertop
                  quotes, and 3D design consultations.
                </p>
              </div>

              <div className="border-t border-[#172A46]/15 pt-8 space-y-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#424A52]">
                    Primary Enquiry Channel
                  </p>
                  <div>
                    <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                      Chat with us on WhatsApp
                    </BorderlessCta>
                  </div>
                </div>

                <div className="space-y-2 border-t border-[#172A46]/10 pt-6">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#424A52]">
                    Official Portfolio &amp; Updates
                  </p>
                  <div>
                    <BorderlessCta href={BRAND_INFO.instagramUrl} tone="champagne">
                      Follow our work on Instagram
                    </BorderlessCta>
                  </div>
                </div>

                <div className="space-y-2 border-t border-[#172A46]/10 pt-6 text-sm text-[#424A52]">
                  <p className="font-semibold text-[#172A46] m-0">Confirmed Services</p>
                  <p className="m-0">
                    Custom Epoxy Floors · Epoxy Countertops · 3D Design · Residential &amp; Commercial
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-12 gap-4 items-end">
                  <div className="col-span-5">
                    <img
                      src={BRAND_INFO.logoUrl}
                      alt="JJ EPOXY 3D Gold Emblem"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="col-span-7">
                    <img
                      src={SURFACE_IMAGES.studioCraftPortrait}
                      alt="Studio craftsmanship pouring metallic gold and midnight blue epoxy resin"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: VALIDATED PROJECT BRIEF COMPOSER (Open architectural column, zero boxed container) */}
            <div
              data-reveal
              className="lg:col-span-7 lg:border-l lg:border-[#172A46]/15 lg:pl-14"
            >
              <div className="space-y-3 pb-8 border-b border-[#172A46]/15">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#394E91]">
                  Project Brief Builder
                </p>
                <h2 className="font-display font-bold text-[#172A46] text-2xl md:text-3xl">
                  Prepare your custom design enquiry for WhatsApp
                </h2>
                <p className="text-sm text-[#424A52] leading-relaxed">
                  Direct email dispatch is not configured on this static showcase. Complete the
                  fields below to validate and format a clear project summary you can send straight
                  to JJ Epoxy 3D on WhatsApp.
                </p>
              </div>

              <form onSubmit={handlePrepareBrief} noValidate className="pt-8 space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="fullName" className={labelBaseClass}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="Your full name"
                      className={inputBaseClass}
                    />
                    {errors.fullName && (
                      <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBaseClass}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className={inputBaseClass}
                    />
                    {errors.phone && (
                      <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="email" className={labelBaseClass}>
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="you@example.com"
                      className={inputBaseClass}
                    />
                    {errors.email && (
                      <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className={labelBaseClass}>
                      Project / Room Type *
                    </label>
                    <input
                      id="projectType"
                      name="projectType"
                      type="text"
                      value={values.projectType}
                      onChange={(e) => updateField('projectType', e.target.value)}
                      placeholder="Living room, kitchen island, showroom..."
                      className={inputBaseClass}
                    />
                    {errors.projectType && (
                      <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                  <div>
                    <label htmlFor="spaceScope" className={labelBaseClass}>
                      Space Category
                    </label>
                    <select
                      id="spaceScope"
                      name="spaceScope"
                      value={values.spaceScope}
                      onChange={(e) => updateField('spaceScope', e.target.value as SpaceScope)}
                      className={inputBaseClass}
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="surfaceFocus" className={labelBaseClass}>
                      Flooring or Countertop
                    </label>
                    <select
                      id="surfaceFocus"
                      name="surfaceFocus"
                      value={values.surfaceFocus}
                      onChange={(e) => updateField('surfaceFocus', e.target.value as SurfaceFocus)}
                      className={inputBaseClass}
                    >
                      <option value="Custom Epoxy Floors">Custom Epoxy Floors</option>
                      <option value="Epoxy Countertops">Epoxy Countertops</option>
                      <option value="3D Design">3D Design</option>
                      <option value="Flooring & Countertops">Flooring &amp; Countertops</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className={labelBaseClass}>
                      Preferred Contact
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={values.preferredContact}
                      onChange={(e) =>
                        updateField('preferredContact', e.target.value as PreferredContact)
                      }
                      className={inputBaseClass}
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Instagram DM">Instagram DM</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="designPreferences" className={labelBaseClass}>
                      Design &amp; Colour Preferences *
                    </label>
                    <input
                      id="designPreferences"
                      name="designPreferences"
                      type="text"
                      value={values.designPreferences}
                      onChange={(e) => updateField('designPreferences', e.target.value)}
                      placeholder="Metallic champagne, 3D ocean aqua, marble..."
                      className={inputBaseClass}
                    />
                    {errors.designPreferences && (
                      <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                        {errors.designPreferences}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectSize" className={labelBaseClass}>
                      Project Size (If Known)
                    </label>
                    <input
                      id="projectSize"
                      name="projectSize"
                      type="text"
                      value={values.projectSize}
                      onChange={(e) => updateField('projectSize', e.target.value)}
                      placeholder="e.g., 450 sq ft or 10 ft island"
                      className={inputBaseClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className={labelBaseClass}>
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={3}
                    value={values.projectDescription}
                    onChange={(e) => updateField('projectDescription', e.target.value)}
                    placeholder="Describe your space, surface condition, and visual vision..."
                    className={inputBaseClass}
                  />
                  {errors.projectDescription && (
                    <p role="alert" className="text-xs text-[#9B1C1C] mt-1.5 font-medium">
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-8">
                  <BorderlessCta type="submit" tone="dark">
                    Generate WhatsApp project brief
                  </BorderlessCta>
                  <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="champagne">
                    Open WhatsApp directly
                  </BorderlessCta>
                </div>
              </form>

              {preparedBrief && (
                <div
                  aria-live="polite"
                  className="mt-10 pt-8 border-t border-[#172A46]/20 space-y-4"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#394E91]">
                    Ready to Send — Copy &amp; Paste into WhatsApp
                  </p>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-[#28313C] border-t border-b border-[#172A46]/15 py-5 m-0 leading-relaxed">
                    {preparedBrief}
                  </pre>
                  <div className="flex flex-wrap items-center gap-8 pt-2">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center gap-2 bg-transparent border-0 p-0 text-xs font-bold tracking-[0.08em] uppercase text-[#172A46] hover:text-[#394E91] cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#2EC4C6]" aria-hidden="true" />
                          <span>Brief copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          <span>Copy formatted brief</span>
                        </>
                      )}
                    </button>
                    <BorderlessCta href={BRAND_INFO.whatsappUrl} tone="dark">
                      Continue to WhatsApp
                    </BorderlessCta>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
