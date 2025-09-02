"use client";

import { useState } from "react";
import Image from "next/image";
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
                src="/images/meloneganz.png"
                alt="Melon"
                width={251}
                height={249}
                className="absolute left-0 top-8 lg:top-16 w-32 lg:w-60 h-auto"
              />
              <Image
                  src="/images/meloneganz.png"
                alt="Orange"
                width={350}
                height={438}
                className="absolute left-1/2 transform -translate-x-1/2 top-0 w-40 lg:w-80 h-auto z-10"
              />
              <Image
                  src="/images/meloneganz.png"
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
        <section className="px-6 lg:px-27 py-16">
        <div className="mb-16">
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

      {/* References Section */}
      <div className="main-container">
        <section className="px-6 lg:px-27 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReferenceCard
            title="Referenzen"
            description="frutico hilft bereits zahlreichen Unternehmen in der Früchte- und Gemüsebranche, ihre Prozesse zu optimieren und ihre Effizienz zu steigern."
            linkText="Das sagen unsere Kunden"
            linkColor="text-[#108DD1]"
          />
          <ReferenceCard
            title="Module & Funktionen"
            description="Erfahren Sie mehr über die vielfältigen Module und Funktionen von frutico, die alle Ihre Geschäftsprozesse abdecken"
          />
          <ReferenceCard
            title="Technologie"
            description="Entdecken Sie die innovative Technologie, die frutico zu einer der fortschrittlichsten Cloud-ERP-Lösungen macht."
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

function ReferenceCard({ 
  title, 
  description, 
  linkText, 
  linkColor = "text-black" 
}: { 
  title: string; 
  description: string; 
  linkText?: string;
  linkColor?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="h-[221px] bg-[#4DB1E8] rounded-lg flex items-center justify-center">
        <Image
          src="/images/meloneganz.png"
          alt="Placeholder"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-black leading-8">{title}</h3>
        <div className="text-base leading-6">
          <span className="text-black">{description}</span>
          {linkText && (
            <>
              <br /><br />
              <span className={linkColor}>{linkText}</span>
            </>
          )}
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

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 14 15">
      <path d="M10.2539 8.10841L13.3164 9.42091C13.8086 9.61232 14.082 10.1318 13.9727 10.6514L13.3164 13.7139C13.207 14.2061 12.7422 14.5889 12.25 14.5889C12.0586 14.5889 11.8945 14.5615 11.7305 14.5615C11.457 14.5615 11.1836 14.5342 10.9375 14.5068C4.78516 13.8506 0 8.65529 0 2.31154C0 1.81935 0.355469 1.35451 0.847656 1.24513L3.91016 0.588881C4.42969 0.479506 4.94922 0.752943 5.14062 1.24513L6.45312 4.30763C6.64453 4.74513 6.53516 5.26466 6.15234 5.56544L5.03125 6.49513C5.76953 7.75294 6.80859 8.79201 8.06641 9.53029L8.99609 8.40919C9.29688 8.02638 9.81641 7.91701 10.2539 8.10841ZM12.0586 13.249L12.6328 10.542L9.89844 9.36622L9.10547 10.3506C8.69531 10.8428 7.98438 10.9795 7.41016 10.6514C5.96094 9.80372 4.75781 8.6006 3.91016 7.15138C3.58203 6.57716 3.71875 5.86622 4.21094 5.45607L5.19531 4.6631L4.01953 1.92872L1.3125 2.50294C1.39453 8.40919 6.15234 13.167 12.0586 13.249Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 14 11">
      <path d="M1.75 1.6394C1.50391 1.6394 1.3125 1.85815 1.3125 2.0769V2.70581L6.01562 6.56128C6.58984 7.02612 7.38281 7.02612 7.95703 6.56128L12.6875 2.70581V2.0769C12.6875 1.85815 12.4688 1.6394 12.25 1.6394H1.75ZM1.3125 4.40112V9.0769C1.3125 9.323 1.50391 9.5144 1.75 9.5144H12.25C12.4688 9.5144 12.6875 9.323 12.6875 9.0769V4.40112L8.80469 7.573C7.73828 8.448 6.23438 8.448 5.19531 7.573L1.3125 4.40112ZM0 2.0769C0 1.11987 0.765625 0.326904 1.75 0.326904H12.25C13.207 0.326904 14 1.11987 14 2.0769V9.0769C14 10.0613 13.207 10.8269 12.25 10.8269H1.75C0.765625 10.8269 0 10.0613 0 9.0769V2.0769Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 fill-[#0068A1]" viewBox="0 0 16 14">
      <path d="M15.708 7.4292L9.52051 13.6167C9.30957 13.8276 8.92285 13.8276 8.71191 13.6167C8.50098 13.4058 8.50098 13.019 8.71191 12.8081L13.9502 7.56982H0.696289C0.379883 7.56982 0.133789 7.32373 0.133789 7.00732C0.133789 6.72607 0.379883 6.44482 0.696289 6.44482H13.9502L8.71191 1.2417C8.50098 1.03076 8.50098 0.644043 8.71191 0.433105C8.92285 0.222168 9.30957 0.222168 9.52051 0.433105L15.708 6.62061C15.9189 6.83154 15.9189 7.21826 15.708 7.4292Z" />
    </svg>
  );
}
