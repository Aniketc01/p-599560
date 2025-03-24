
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col text-[#202124]">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 py-16">
          <ContactInfo />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
