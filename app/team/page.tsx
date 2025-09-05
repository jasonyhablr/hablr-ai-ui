import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import TeamPage from './TeamContent'; // <-- keep your existing content in a separate file if you like

export const metadata = {
  title: 'Our Team – Hablr.ai',
  description: 'Meet the team behind Hablr.ai',
};

export default function Team() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-6 py-14">
        <TeamPage />
      </div>
      <SiteFooter />
    </>
  );
}
