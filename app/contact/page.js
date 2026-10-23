// app/contact/page.js — Server Component (holds metadata)
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact ShoURL — Get in Touch with Our Team',
  description:
    'Have questions about ShoURL? Contact our support team anytime. We help with short links, analytics, and anything else you need.',
  alternates: {
    canonical: 'https://shourl-alpha.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}