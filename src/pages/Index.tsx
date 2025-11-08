import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      <main className="min-h-screen">
        <Header />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
