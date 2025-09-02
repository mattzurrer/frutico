import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Waves from "@/components/Waves";
import CTA from "@/components/CTA";
import ServicesSection from "@/components/ServicesSection";
import PageHeaderSection from "@/components/PageHeaderSection";
import Brands from "@/components/Brands";

export default function DienstleistungenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
         <PageHeaderSection
                  title="Von ERP-Profis für Frischeprofis"
                  subtitle="Begleitung von Anfang an: Prozessanalyse, Schulungen und umfassende Systemdokumentation inklusive"
                  description="So stellen wir sicher, dass Ihr Team schnell arbeitsfähig ist, Fehler vermieden werden und Sie von Anfang an das volle Potenzial Ihres ERP-Systems ausschöpfen.Frutico basiert auf einer hochmodernen Cloud-ERP-Plattform, die speziell für die Bedürfnisse der Früchte- und Gemüsebranche entwickelt wurde. Unsere Lösung kombiniert höchste Datensicherheit mit intuitiver Bedienung, automatisierten Prozessen und nahtloser Skalierbarkeit.
        Ob Sie mit einem Standort starten oder wachsen – Frutico bleibt schlank, flexibel und leistungsfähig. Sie profitieren von maximaler Effizienz, minimalem IT-Aufwand und jederzeit aktuellem Funktionsumfang."
                  images={[
                    {
                      src: "/images/tomate.png",
                      alt: "Tomato",
                      width: 350,
                      height: 438,
                      className: "absolute left-0 top-8 lg:top-16 w-40 lg:w-80 h-auto z-1",
                    },
                    {
                      src: "/images/kuerbis.png",
                      alt: "Pumpkin",
                      width: 350,
                      height: 438,
                      className: "absolute left-1/2 transform -translate-x-1/2 top-16 w-40 lg:w-80 h-auto z-5",
                    },
                    {
                      src: "/images/apfel-halb.png",
                      alt: "Apple",
                      width: 350,
                      height: 438,
                      className: "absolute right-0 top-8 lg:top-16 w-40 lg:w-80 h-auto z-10",
                    },
                  ]}
                />
      </div>
      <Waves />
      <div className="main-container">
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
      <CTA />
      <Brands />
      <Footer />
    </div>
  );
}
