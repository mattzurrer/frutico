import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechnologySections from "@/components/TechnologySections";
import Waves from "@/components/Waves";
import CTA from "@/components/CTA";
import Brands from "@/components/Brands";
import PageHeaderSection from "@/components/PageHeaderSection";


export default function TechnologiePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
        <PageHeaderSection
          title="Die Technologie hinter frutico"
          subtitle="Modern. Sicher. Zukunftsfähig."
          description="Frutico basiert auf einer hochmodernen Cloud-ERP-Plattform, die speziell für die Bedürfnisse der Früchte- und Gemüsebranche entwickelt wurde. Unsere Lösung kombiniert höchste Datensicherheit mit intuitiver Bedienung, automatisierten Prozessen und nahtloser Skalierbarkeit.
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
        <div className="main-container relative">
        <main className="flex-1">
          <TechnologySections />
        </main>
      </div>
      <CTA />
      <Brands />
      <Footer />
    </div>
  );
}
