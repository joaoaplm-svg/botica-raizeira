import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import BrandPresentation from "@/components/sections/BrandPresentation";
import Philosophy from "@/components/sections/Philosophy";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HowItWorks from "@/components/sections/HowItWorks";
import Differentials from "@/components/sections/Differentials";
import ResponsibleNotice from "@/components/sections/ResponsibleNotice";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandPresentation />
        <Philosophy />
        <Categories />
        <FeaturedProducts />
        <HowItWorks />
        <Differentials />
        <ResponsibleNotice />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
