import test from 'node:test';
import assert from 'node:assert/strict';
import { EnquiryFormValues, formatWhatsAppBrief, validateEnquiryForm } from './enquiry';

const validSample: EnquiryFormValues = {
  fullName: 'Jordan Vance',
  phone: '+1 555 234 5678',
  email: 'jordan@example.com',
  projectType: 'Open Kitchen & Dining',
  spaceScope: 'Residential',
  surfaceFocus: 'Epoxy Countertops',
  designPreferences: 'Deep midnight blue with champagne gold veining',
  projectSize: '120 sq ft',
  projectDescription: 'Looking for a seamless waterfall island countertop with high-gloss resin finish.',
  preferredContact: 'WhatsApp',
};

test('validateEnquiryForm passes for complete valid submission', () => {
  const errors = validateEnquiryForm(validSample);
  assert.deepEqual(errors, {});
});

test('validateEnquiryForm catches missing required fields and bad phone/email', () => {
  const errors = validateEnquiryForm({
    ...validSample,
    fullName: '',
    phone: '123',
    email: 'invalid-email',
    projectType: '',
    designPreferences: '',
    projectDescription: 'short',
  });

  assert.ok(errors.fullName);
  assert.ok(errors.phone);
  assert.ok(errors.email);
  assert.ok(errors.projectType);
  assert.ok(errors.designPreferences);
  assert.ok(errors.projectDescription);
});

test('validateEnquiryForm requires email only when preferredContact is Email', () => {
  const whatsappNoEmail = validateEnquiryForm({
    ...validSample,
    email: '',
    preferredContact: 'WhatsApp',
  });
  assert.equal(whatsappNoEmail.email, undefined);

  const emailPreferredNoEmail = validateEnquiryForm({
    ...validSample,
    email: '',
    preferredContact: 'Email',
  });
  assert.ok(emailPreferredNoEmail.email);
});

test('formatWhatsAppBrief produces clean readable summary', () => {
  const brief = formatWhatsAppBrief(validSample);
  assert.match(brief, /JJ EPOXY 3D — Custom Design Enquiry/);
  assert.match(brief, /Jordan Vance/);
  assert.match(brief, /Epoxy Countertops/);
  assert.match(brief, /120 sq ft/);
});
