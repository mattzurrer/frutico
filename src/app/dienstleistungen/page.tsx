import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Waves from "@/components/Waves";
import CTA from "@/components/CTA";
import ServicesSection from "@/components/ServicesSection";

export default function DienstleistungenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
        <section className="px-6 lg:px-27 py-2 lg:py-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-10 tracking-tight">
                Von ERP-Profis für Frischeprofis
              </h1>
              {/* Subtitle */}
              <h2 className="text-black mb-8 font-noto-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                Begleitung von Anfang an: Prozessanalyse, Schulungen und umfassende Systemdokumentation inklusive
              </h2>

              <p className="text-base text-black mb-10 leading-6">
                So stellen wir sicher, dass Ihr Team schnell arbeitsfähig ist, Fehler vermieden werden und Sie von Anfang an das volle Potenzial Ihres ERP-Systems ausschöpfen.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
              <div className="relative w-full max-w-[572px] h-[400px] lg:h-[600px]">

              </div>
            </div>
          </div>
        </section>
        <Waves />
        <CTA />
        <section className="px-6 lg:px-27 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24 max-w-7xl mx-auto">
            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
                Ihre Daten sind sicher – in der Cloud
              </h2>
              <div className="text-black text-base leading-[22px]">
                Gehostet auf AWS (Amazon Web Services) in hochsicheren Rechenzentren
                <br />
                Regelmässige Backups & Verschlüsselung
                <br />
                Zugriffskontrollen & Berechtigungsmanagement
              </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
                Skalierbar mit Ihrem Erfolg
              </h2>
              <div className="text-black text-base leading-[22px]">
                Flexible Lizenzmodelle
                <br />
                Modular erweiterbar
                <br />
                Unterstützung für mehrere Produktions- und Verkaufsstandorte
              </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
                Immer aktuell – ganz automatisch
              </h2>
              <div className="text-black text-base leading-[22px]">
                Evergreen-Software: Sie arbeiten immer mit der neuesten Version
                <br />
                Keine manuellen Updates oder versteckten Kosten
                <br />
                Neue Funktionen & Sicherheitsupdates werden kontinuierlich eingespielt
              </div>
            </div>
          </div>
        </section>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
