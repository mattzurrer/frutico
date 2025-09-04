import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FeatureSection from "@/components/FeatureSection";
import PageHeaderSection from "@/components/PageHeaderSection";
import Brands from "@/components/Brands";

export default function FunktionenPage() {
  return (
   <div className="min-h-screen bg-white">
         {/* Navigation */}
         <Navigation />
         <div className="main-container">
               <PageHeaderSection
                 title="Funktionen und Module"
                 subtitle="Alles im Griff – mit den richtigen Werkzeugen"
                 description="frutico bietet Ihnen alle Funktionen, die Sie für den erfolgreichen Betrieb in der Früchte- und Gemüsebranche brauchen – klar strukturiert, einfach zu bedienen und vollständig digital. Vom Einkauf bis zur Auslieferung: Mit Frutico steuern Sie Ihre Prozesse effizient, zuverlässig und flexibel. Hier finden Sie einen Überblick über alle Kernmodule."
                 images={[
                   {
                     src: "/images/melone.png",
                     alt: "Melon",
                     width: 350,
                     height: 438,
                     className: "absolute left-0 top-8 lg:top-16 w-40 lg:w-80 h-auto z-1",
                   },
                   {
                     src: "/images/kiwi-halb.png",
                     alt: "Kiwi",
                     width: 350,
                     height: 438,
                     className: "absolute left-1/2 transform -translate-x-1/2 top-16 w-40 lg:w-80 h-auto z-5",
                   },
                   {
                     src: "/images/orange-halb.png",
                     alt: "Orange",
                     width: 350,
                     height: 438,
                     className: "absolute right-0 top-8 lg:top-16 w-40 lg:w-80 h-auto z-10",
                   },
                 ]}
               />


        {/* Features Section */}
        <section className="px-6 lg:px-27 py-8">
          <div className="max-w-7xl mx-auto space-y-20">

            <FeatureSection
              title="Einkauf"
              imageUrl="/images/einkauf.svg"
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
              imageUrl="/images/produktion.svg"
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
              imageUrl="/images/lagerverwaltung.svg"
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
              imageUrl="/images/logistik.svg"
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
              imageUrl="/images/verkauf.svg"
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
              imageUrl="/images/qs.svg"
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
              imageUrl="/images/reporting.svg"
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
      </div>
      <CTA />
      <Brands />
      <Footer />
    </div>
  );
}