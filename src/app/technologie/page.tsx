import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechnologySections from "@/components/TechnologySections";
import Waves from "@/components/Waves";
import CTA from "@/components/CTA";
import Brands from "@/components/Brands";


export default function TechnologiePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
        <section className="px-6 lg:px-27 py-0 lg:py-4">
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
              <div className="flex-1 max-w-2xl">
                <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-10 tracking-tight">
                  Die Technologie hinter Frutico
                </h1>

                {/* Subtitle */}
              <h2 className="text-black mb-8 font-noto-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                  Modern. Sicher. Zukunftsfähig.
              </h2>

                <p className="text-base text-black mb-10 leading-6">
                  Frutico basiert auf einer hochmodernen Cloud-ERP-Plattform, die speziell für die Bedürfnisse der Früchte- und Gemüsebranche entwickelt wurde. Unsere Lösung kombiniert höchste Datensicherheit mit intuitiver Bedienung, automatisierten Prozessen und nahtloser Skalierbarkeit.
Ob Sie mit einem Standort starten oder wachsen – Frutico bleibt schlank, flexibel und leistungsfähig. Sie profitieren von maximaler Effizienz, minimalem IT-Aufwand und jederzeit aktuellem Funktionsumfang.
                </p>

              </div>

              <div className="flex-1 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
                <div className="relative w-full max-w-[572px] h-[400px] lg:h-[600px]">

                </div>
              </div>
            </div>
          </section>
        <Waves />
        <main className="flex-1">
          <TechnologySections />
        </main>
        <CTA />
        <Brands />
      </div>
      <Footer />
    </div>
  );
}
