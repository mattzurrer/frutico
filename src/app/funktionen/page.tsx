import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FeatureSection from "@/components/FeatureSection";

export default function FunktionenPage() {
  return (
   <div className="min-h-screen bg-white">
         {/* Navigation */}
         <Navigation />
         <div className="main-container">
               <section className="px-6 lg:px-27 py-6 lg:py-20">
                 <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                   <div className="flex-1 max-w-2xl">
                     <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-10 tracking-tight">
                       Funktionen und Module
                     </h1>

                     {/* Subtitle */}
                    <h2 className="text-black mb-8 font-noto-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                        Alles im Griff – mit den richtigen Werkzeugen
                    </h2>

                     <p className="text-base text-black mb-10 leading-6">
                       frutico bietet Ihnen alle Funktionen, die Sie für den erfolgreichen Betrieb in der Früchte- und Gemüsebranche brauchen – klar strukturiert, einfach zu bedienen und vollständig digital. Vom Einkauf bis zur Auslieferung: Mit Frutico steuern Sie Ihre Prozesse effizient, zuverlässig und flexibel. Hier finden Sie einen Überblick über alle Kernmodule.
                     </p>

                   </div>

                   <div className="flex-1 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
                     <div className="relative w-full max-w-[572px] h-[400px] lg:h-[600px]">

                     </div>
                   </div>
                 </div>
               </section>


        {/* Features Section */}
        <section className="px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto space-y-20">

            <FeatureSection
              title="Einkauf"
              imageUrl="/img/Einkauf.svg"
              imagePosition="left"
              features={[
                {
                  title: "Automatisierte Bestellprozesse",
                  description: "Reduzieren Sie manuelle Eingaben durch automatisierte Bestellungen, basierend auf Bestands- und Bedarfsanalysen."
                },
                {
                  title: "Lieferantenmanagement",
                  description: "Verwalten Sie Ihre Lieferanten effizient und verfolgen Sie Lieferantenbewertungen und -verträge."
                },
                {
                  title: "Preis- und Vertragsmanagement",
                  description: "Behalten Sie den Überblick über Preise und Vertragskonditionen, um stets die besten Konditionen zu sichern."
                }
              ]}
            />

            <FeatureSection
              title="Produktion"
              imageUrl="/img/Verkauf.svg"
              imagePosition="right"
              features={[
                {
                  title: "Produktionsplanung und -steuerung",
                  description: "Optimieren Sie Ihre Produktionsprozesse durch präzise Planung und Steuerung, angepasst an saisonale Schwankungen."
                },
                {
                  title: "Ressourcenmanagement",
                  description: "Verwalten Sie Ihre Ressourcen effizient, um Engpässe zu vermeiden und die Produktion reibungslos zu gestalten."
                },
                {
                  title: "Qualitätskontrollen",
                  description: "Implementieren Sie strenge Qualitätskontrollen und dokumentieren Sie diese digital, um die höchsten Standards zu gewährleisten."
                }
              ]}
            />

            <FeatureSection
              title="Lagerverwaltung"
              imageUrl="/img/Lagerverwaltung.svg"
              imagePosition="left"
              features={[
                {
                  title: "Echtzeit-Lagerverwaltung",
                  description: "Verfolgen Sie Bestände in Echtzeit und automatisieren Sie Lagerbewegungen, um die Effizienz zu maximieren."
                },
                {
                  title: "Inventurmanagement",
                  description: "Vereinfachen Sie die Inventurprozesse durch digitale Lösungen und reduzieren Sie Bestandsfehler."
                },
                {
                  title: "Kühlkettenmanagement",
                  description: "Überwachen Sie die Kühlkette Ihrer Produkte, um deren Frische und Qualität zu gewährleisten."
                }
              ]}
            />

            <FeatureSection
              title="Logistik und Transport"
              imageUrl="/img/Logistik.png"
              imagePosition="right"
              features={[
                {
                  title: "Tourenplanung und -optimierung",
                  description: "Planen Sie Transportwege effizient und optimieren Sie die Touren, um Lieferzeiten zu verkürzen."
                },
                {
                  title: "Echtzeit-Tracking",
                  description: "Verfolgen Sie Ihre Lieferungen in Echtzeit, um Ihren Kunden aktuelle Informationen bereitzustellen."
                },
                {
                  title: "Liefermanagement",
                  description: "Verwalten Sie Ihre Lieferprozesse digital und sorgen Sie für eine reibungslose und pünktliche Auslieferung."
                }
              ]}
            />

            <FeatureSection
              title="Verkauf"
              imageUrl="/img/Verkauf.svg"
              imagePosition="left"
              features={[
                {
                  title: "Integrierter Online-Shop",
                  description: "Nutzen Sie unseren nahtlos integrierten Online-Shop, um Ihren Kunden eine benutzerfreundliche Bestellmöglichkeit zu bieten."
                },
                {
                  title: "Kundenmanagement (CRM)",
                  description: "Pflegen Sie Kundenbeziehungen durch ein umfassendes CRM-System und verfolgen Sie Verkaufsstatistiken und Kundenzufriedenheit."
                },
                {
                  title: "Dynamische Preisgestaltung",
                  description: "Passen Sie die Preise flexibel an Marktbedingungen und Kundenanforderungen an."
                }
              ]}
            />

            <FeatureSection
              title="Rückverfolgbarkeit und Qualitätssicherung"
              imageUrl="/img/QS.svg"
              imagePosition="right"
              features={[
                {
                  title: "Lückenlose Rückverfolgbarkeit",
                  description: "Verfolgen Sie jeden Schritt in der Lieferkette, von der Ernte bis zum Endverbraucher, um die Qualität zu gewährleisten und gesetzliche Vorschriften einzuhalten."
                },
                {
                  title: "Qualitätsmanagement",
                  description: "Implementieren Sie strenge Qualitätskontrollen und dokumentieren Sie diese digital, um die höchsten Standards zu gewährleisten."
                },
                {
                  title: "Kundenvertrauen",
                  description: "Erhöhen Sie das Vertrauen Ihrer Kunden durch transparente und nachverfolgbare Prozesse."
                }
              ]}
            />

            <FeatureSection
              title="Reporting und Analyse"
              imageUrl="/img/Reporting.svg"
              imagePosition="left"
              features={[
                {
                  title: "Umfassendes Reporting",
                  description: "Nutzen Sie das Reporting-Tool Metabase für detaillierte Berichte und Analysen Ihrer Geschäftsprozesse."
                },
                {
                  title: "Echtzeit-Datenanalyse",
                  description: "Treffen Sie fundierte Entscheidungen basierend auf Echtzeit-Daten und identifizieren Sie Optimierungspotenziale."
                },
                {
                  title: "Dashboard-Ansichten",
                  description: "Erhalten Sie einen schnellen Überblick über Ihre wichtigsten Kennzahlen durch benutzerdefinierte Dashboards."
                }
              ]}
            />

          </div>
        </section>
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
