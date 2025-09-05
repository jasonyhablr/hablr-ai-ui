import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import TermsPage from './TermsContent';

export const metadata = {
  title: 'Terms of Service – Hablr.ai',
  description: 'The terms that govern your use of Hablr.ai.',
};

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14 prose prose-slate">
        <h1>Terms of Service</h1>
        <TermsPage />
      </main>
      <SiteFooter />
    </>
  );
}
