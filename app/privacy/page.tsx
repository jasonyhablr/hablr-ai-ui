import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import PrivacyPage from './PrivacyContent';

export const metadata = {
  title: 'Privacy Policy – Hablr.ai',
  description: 'How we collect, use, and protect your data.',
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14 prose prose-slate">
        <h1>Privacy Policy</h1>
        <PrivacyPage />
      </main>
      <SiteFooter />
    </>
  );
}
