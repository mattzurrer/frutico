"use client";

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Waves from "@/components/Waves";
import CtaButton from "@/components/CtaButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="main-container">
        <section className="px-6 lg:px-27 pt-2 lg:py-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <h1 className="font-montserrat text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-black mb-10 tracking-tight">
              Die Zukunft der Früchte- und Gemüsebranche
            </h1>
            
            <p className="text-xl font-bold text-black mb-6 leading-8">
              frutico, das technologisch modernste Cloud-ERP für eine vollständige Digitalisierung und effiziente Produktionsplanung.<br />
              Für maximale Frische und Qualität.
            </p>
            
            <p className="text-base text-black mb-10 leading-6">
              Unsere hoch spezialisierte Cloud-ERP-Lösung digitalisiert und automatisiert Ihre Geschäftsprozesse von Anfang bis Ende. Mit frutico optimieren Sie Ihre Abläufe, sparen Ressourcen und erhöhen Ihre Wettbewerbsfähigkeit – alles ohne Papier und Stifte.
            </p>
            
            <CtaButton />
          </div>
          
          <div className="flex-1 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
            <div className="relative w-full max-w-[572px] h-[400px] lg:h-[600px]">
              <Image
                src="/images/melone.png"
                alt="Melon"
                width={251}
                height={249}
                className="absolute left-0 top-8 lg:top-16 w-32 lg:w-60 h-auto"
              />
              <Image
                  src="/images/orange.png"
                alt="Orange"
                width={350}
                height={438}
                className="absolute left-1/2 transform -translate-x-1/2 top-0 w-40 lg:w-80 h-auto z-10"
              />
              <Image
                  src="/images/tomate.png"
                alt="Tomato"
                width={251}
                height={249}
                className="absolute right-0 top-8 lg:top-16 w-32 lg:w-60 h-auto"
              />
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Waves SVG */}
      <Waves />

      {/* Why frutico Section */}
      <div className="main-container">
        <section className="px-6 lg:px-27 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-10 leading-tight">
            Warum frutico?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FeatureCard
            image="/images/digitalisierung.svg"
            title="Vollständige Digitalisierung"
            features={[
              {
                title: "Digitalisierte Geschäftsprozesse vom Einkauf bis zur Rechnung",
                description: "Alle Abläufe – von der Bestellung über Lager- und Tourenverwaltung bis zur Rechnungsstellung – laufen vollständig digital und automatisiert in einem System. Das reduziert Fehlerquellen und spart Zeit​."
              },
              {
                title: "Integrierter B2B-Webshop und Schnittstellen zu Partner-Systemen",
                description: "Kunden können direkt über einen nahtlos integrierten Online-Shop bestellen. Zudem gibt es fertige Schnittstellen zu externen Systemen wie bexio, Abacus oder Hoga Shop – das erleichtert die Integration in bestehende IT-Landschaften​."
              },
              {
                title: "Mehr Vertrauen durch Transparenz und Zuverlässigkeit",
                description: "Frutico schafft Vertrauen – mit lückenloser Rückverfolgbarkeit vom Feld bis zur Auslieferung, zuverlässigen Lieferterminen dank smarter Tourenplanung und klaren, digitalen Abläufen. Ihre Kunden wissen: Wer mit Frutico arbeitet, liefert pünktlich, transparent und in gleichbleibender Qualität."
              }
            ]}
          />
          
          <FeatureCard
            image="/images/logistik.svg"
            title="Effiziente Logistik und Qualitätssicherung"
            features={[
              {
                title: "Tourenplanung & Auslieferung digital gesteuert",
                description: "Mit dem integrierten Modul für Tourenplanung und Auslieferung können Lieferungen effizient organisiert und gesteuert werden. Die Touren werden digital geplant, was Fahrzeiten verkürzt, Routen optimiert und eine pünktliche Belieferung sicherstellt​."
              },
              {
                title: "Kommissionierung mit digitaler Unterstützung",
                description: "Die digitale Kommissionierung sorgt dafür, dass Bestellungen präzise zusammengestellt werden. Fehlerquellen durch manuelle Eingriffe werden reduziert. Zudem lassen sich durch angebundene Barcode-Scanner und Waagen Qualität und Genauigkeit der Aufträge sicherstellen​."
              },
              {
                title: "Rückverfolgbarkeit und Echtzeitdaten durch Lager- und Chargenverwaltung",
                description: "Durch die vollständige Integration der Lagerverwaltung ist eine lückenlose Rückverfolgbarkeit von Chargen und Produkten möglich. So wird nicht nur die Qualitätssicherung verbessert, sondern auch eine schnelle Reaktion bei Rückrufen oder Qualitätsproblemen ermöglicht​."
              }
            ]}
          />
          
          <FeatureCard
            image="/images/cloud.svg"
            title="Flexibilität, Skalierbarkeit und Umsatzsteigerung"
            features={[
              {
                title: "Cloudbasierter Betrieb mit automatischen Updates",
                description: "Unsere Evergreen-Software läuft sicher auf der AWS-Infrastruktur und wird ständig automatisch aktualisiert."
              },
              {
                title: "Branchenspezifische Module",
                description: "Du kannst Deepico jederzeit modular erweitern – z. B. mit zusätzlicher Produktionsplanung, Verkaufsstellen oder Absatzplanung. Diese Erweiterbarkeit erlaubt es dir, das System flexibel an neue Anforderungen oder Wachstumsziele anzupassen, ohne das Grundsystem neu aufzusetzen​."
              },
              {
                title: "Mehr Umsatz durch digitale Power",
                description: "Mit Frutico steigern Sie Ihren Umsatz auf mehreren Ebenen: Der integrierte B2B-Webshop eröffnet neue Verkaufskanäle, automatisierte Prozesse beschleunigen Ihre Abläufe und die smarte Absatzplanung sorgt dafür, dass Sie genau das produzieren, was der Markt braucht – nicht mehr, nicht weniger."
              }
            ]}
          />
        </div>
        </section>
      </div>

      {/* Challenges Section */}
      <div className="main-container">
        <section className="px-6 lg:px-27 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-black mb-8 leading-tight">
              Ihre täglichen Herausforderungen: Schneller, flexibler, günstiger
            </h2>
            <p className="text-base text-black leading-6">
              Wir verstehen die Herausforderungen der Früchte- und Gemüsebranche. Gemeinsam mit Experten haben wir frutico entwickelt, um Ihnen massgeschneiderte Lösungen zu bieten.
              <br /><br />
              Schnellere Lieferungen, mehr Flexibilität und Individualität bei steigendem Kostendruck – frutico bietet die Lösungen, die Sie benötigen, um die Komplexität des täglichen Geschäfts optimal zu bewältigen und die Effizienz in Ihrem Unternehmen deutlich zu steigern.
            </p>
          </div>
          <div className="flex-1 max-w-lg">
            <Image
              src="/images/herausforderungen.svg"
              alt="Herausforderungen"
              width={505}
              height={290}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
        </section>
      </div>

      {/* Subpages Section */}
      <div className="main-container">
        <section className="px-6 lg:px-27 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SubpagesCard
            title="Referenzen"
            description="frutico hilft bereits zahlreichen Unternehmen in der Früchte- und Gemüsebranche, ihre Prozesse zu optimieren und ihre Effizienz zu steigern."
            linkText="Das sagen unsere Kunden"
            linkURL="/referenzen"
            linkColor="text-[#108DD1]"
          />
          <SubpagesCard
            title="Module & Funktionen"
            description="Erfahren Sie mehr über die vielfältigen Module und Funktionen von frutico, die alle Ihre Geschäftsprozesse abdecken"
            linkText="Alle Funktionen und Module"
            linkURL="/funktionen"
          />
          <SubpagesCard
            title="Technologie"
            description="Entdecken Sie die innovative Technologie, die frutico zu einer der fortschrittlichsten Cloud-ERP-Lösungen macht."
            linkText="Unsere Technologie zu Ihrem Nutzen"
            linkURL="/technologie"
          />
        </div>
        </section>
      </div>

      {/* Call to Action */}
      <CTA />

      {/* Brands Section */}
      <Brands />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Components

function FeatureCard({ image, title, features }: {
  image: string;
  title: string;
  features: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="flex flex-col gap-10">
      <Image
        src={image}
        alt={title}
        width={392}
        height={229}
        className="w-full h-auto rounded-2xl shadow-lg"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black leading-8">{title}</h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <ExpandableItem
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpandableItem({ title, description }: { title: string; description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-[#D6D6D6] pb-5">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-base text-black leading-6 flex-1 pr-4">{title}</h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      {isExpanded && (
        <p className="text-base text-black leading-6 animate-fade-in">{description}</p>
      )}
    </div>
  );
}

function SubpagesCard({ 
  title, 
  description, 
  linkText,
  linkURL,
  linkColor = "text-black" 
}: { 
  title: string; 
  description: string;
  linkURL: string;
  linkText?: string;
  linkColor?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="h-[221px] bg-[#4DB1E8] rounded-lg flex items-center justify-center">
        <Image
          src="/images/herausforderungen.svg"
          alt="Placeholder"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-black leading-8">{title}</h3>
        <div className="text-base leading-6">
          <p className="text-black">{description}</p>
          <p className="mt-4">
          <Link
            href={{
              pathname: linkURL,
              query: { name: 'test' },
            }}
          >
            { linkText }
            </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ src, alt, name }: { src: string; alt: string; name: string }) {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
      <span className="text-lg font-bold text-gray-600">{name}</span>
    </div>
  );
}

// Icons
function PlusIcon() {
  return (
    <svg className="w-6 h-6 text-black/80" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="w-6 h-6 text-black/80" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}