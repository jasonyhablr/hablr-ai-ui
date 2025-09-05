import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import AboutPage from './AboutContent';

export const metadata = {
  title: 'About – Hablr.ai',
  description: 'Why we built Hablr.ai and what comes next.',
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-3xl font-bold tracking-tight">About Hablr.ai</h1>
        <p className="mt-3 text-slate-600">
          We started Hablr.ai after seeing teams spend thousands on call centers that didn’t convert,
          while data lived across tools with no safe way to share. We’re fixing that with empathy-first AI,
          HID ownership, and simple Reader/Editor permissions.
        </p>
        <AboutPage />
      </main>
      <SiteFooter />
    </>
  );
}
