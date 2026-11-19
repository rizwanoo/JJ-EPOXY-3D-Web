export type SpaceScope = 'Residential' | 'Commercial';
export type SurfaceFocus = 'Custom Epoxy Floors' | 'Epoxy Countertops' | '3D Design' | 'Flooring & Countertops';
export type PreferredContact = 'WhatsApp' | 'Instagram DM' | 'Phone Call' | 'Email';

export interface EnquiryFormValues {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  spaceScope: SpaceScope;
  surfaceFocus: SurfaceFocus;
  designPreferences: string;
  projectSize: string;
  projectDescription: string;
  preferredContact: PreferredContact;
}

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFormValues, string>>;

export function validateEnquiryForm(values: EnquiryFormValues): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) {
    errors.phone = 'Please provide a contact phone or WhatsApp number.';
  } else if (phoneDigits.length < 7) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).';
  }

  if (values.email.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address or leave blank.';
    }
  } else if (values.preferredContact === 'Email') {
    errors.email = 'Email address is required when Email is your preferred contact method.';
  }

  if (!values.projectType.trim()) {
    errors.projectType = 'Please specify the room or space type (e.g., Living Room, Kitchen Island, Showroom).';
  }

  if (!values.designPreferences.trim()) {
    errors.designPreferences = 'Please describe your preferred finish or palette (e.g., Metallic, Marble, 3D Ocean).';
  }

  if (!values.projectDescription.trim() || values.projectDescription.trim().length < 10) {
    errors.projectDescription = 'Please share a brief overview of your project (at least 10 characters).';
  }

  return errors;
}

export function formatWhatsAppBrief(values: EnquiryFormValues): string {
  const lines = [
    'JJ EPOXY 3D — Custom Design Enquiry',
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.email.trim() ? `Email: ${values.email.trim()}` : null,
    `Space Category: ${values.spaceScope}`,
    `Surface Focus: ${values.surfaceFocus}`,
    `Project Type: ${values.projectType.trim()}`,
    `Design Preferences: ${values.designPreferences.trim()}`,
    values.projectSize.trim() ? `Approximate Size: ${values.projectSize.trim()}` : null,
    `Preferred Contact: ${values.preferredContact}`,
    `Project Notes: ${values.projectDescription.trim()}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join('\n');
}
