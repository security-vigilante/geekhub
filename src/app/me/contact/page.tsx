import MyPageTitle from '@/app/me/_components/MyPageTitle';
import ContactSection from '@/app/me/_components/ContactSection';

export default function page() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center gap-[12.4rem]">
      <MyPageTitle title="Customer Service center" />
      <ContactSection />
    </div>
  );
}
