import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

const Index = () => {
  return (
    <div className="max-w-none text-[#202124] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <main>
        <ContactHero />
        <section className="flex gap-10 px-[120px] py-10 max-md:flex-col max-md:px-5 max-md:py-[30px] max-sm:px-[15px] max-sm:py-5">
          <ContactInfo />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
