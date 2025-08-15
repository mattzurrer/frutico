import Image from 'next/image';

const CheckIcon = () => (
  <svg
    className="w-6 h-6 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0305 6.46967C21.3234 6.76256 21.3234 7.23744 21.0305 7.53033L9.85491 18.7059L3.46967 12.3207C3.17678 12.0278 3.17678 11.5529 3.46967 11.26C3.76256 10.9672 4.23744 10.9672 4.53033 11.26L9.85491 16.5846L19.9699 6.46967C20.2628 6.17678 20.7376 6.17678 21.0305 6.46967Z"
      fill="#029B14"
    />
  </svg>
);

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start gap-4">
    <CheckIcon />
    <div className="flex-1">
      <span className="font-bold text-base text-black">{title}</span>
      <span className="text-base text-black leading-[22px]"> {description}</span>
    </div>
  </div>
);

export default function TechnologySections() {
  return (
    <div className="w-full">
      {/* Technology Brief - Three Column Section */}
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

      {/* Cloud ERP Section */}
      <section className="px-6 lg:px-27 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 flex-1 lg:max-w-[599px]">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] max-w-[537px]">
              Was bedeutet Cloud-ERP-System?
            </h2>
            <div className="text-black text-base leading-[22px]">
              Ein Cloud-ERP (Enterprise Resource Planning) ist ein zentrales Unternehmenssystem, das komplett über das Internet läuft. Das bedeutet: Keine Server, keine Wartung vor Ort. Sie greifen sicher über den Browser auf alle Ihre Daten und Prozesse zu – jederzeit, von überall, sogar vom Handy.
              <br /><br />
              <span className="font-bold">Ihre Vorteile:</span> Echtzeitdaten, ortsunabhängiger Zugriff, keine IT-Infrastruktur nötig.
            </div>
          </div>
          
          <div className="flex flex-col gap-4 flex-1">
            <FeatureItem
              title="Sicherheit"
              description="Keine Investitionen in teure Hardware oder Softwarelizenzen nötig."
            />
            <FeatureItem
              title="Zugänglichkeit"
              description="Sie haben immer Zugriff auf die neuesten Funktionen und Sicherheitsverbesserungen, ohne dass Sie manuell Updates installieren müssen."
            />
            <FeatureItem
              title="Keine Wartung"
              description="Passen Sie die Nutzung der Software flexibel an Ihre Bedürfnisse an, zahlen Sie nur für das, was Sie wirklich nutzen."
            />
          </div>
        </div>
      </section>

      {/* SaaS Section */}
      <section className="px-6 lg:px-27 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 flex-1 lg:max-w-[599px]">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] max-w-[537px]">
              Was ist SaaS und welche Vorteile bietet es?
            </h2>
            <div className="text-black text-base leading-[22px]">
              Software-as-a-Service (SaaS) bedeutet, dass Sie die Software nicht kaufen und auf Ihren eigenen Servern installieren müssen. Stattdessen nutzen Sie die Software als Dienstleistung über das Internet.
            </div>
          </div>
          
          <div className="flex flex-col gap-4 flex-1">
            <FeatureItem
              title="Kosteneffizienz"
              description="Keine Investitionen in teure Hardware oder Softwarelizenzen nötig."
            />
            <FeatureItem
              title="Automatische Updates"
              description="Sie haben immer Zugriff auf die neuesten Funktionen und Sicherheitsverbesserungen, ohne dass Sie manuell Updates installieren müssen."
            />
            <FeatureItem
              title="Flexibilität"
              description="Passen Sie die Nutzung der Software flexibel an Ihre Bedürfnisse an, zahlen Sie nur für das, was Sie wirklich nutzen."
            />
            <FeatureItem
              title="Skalierbarkeit"
              description="Die Software wächst mit Ihrem Unternehmen und kann problemlos an steigende Anforderungen angepasst werden."
            />
          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="px-6 lg:px-27 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-7xl mx-auto">
          <div className="w-full lg:w-[508px] h-[286px] relative bg-[#4DB1E8] rounded flex items-center justify-center">
                    <Image
                      src="/img/placeholder.png"
                      alt="frutico logo"
                      width={162}
                      height={40}
                      className="h-10"
                    />
          </div>
          
          <div className="flex flex-col gap-5 flex-1">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
              Massgeschneiderte Funktionalität für mobile Geräte
            </h2>
            <p className="text-black text-base leading-[22px]">
              Für Produktion, Kommissionierung und Logistik bietet frutico massgeschneiderte Funktionalitäten für Tablets. Teure Hardware-Anschaffungen sind nicht mehr nötig – überall, wo ein Browser ist, da ist auch frutico.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="px-6 lg:px-27 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] mb-8">
            Anbindungen und Integrationen
          </h2>
          <p className="text-black text-base leading-[22px] max-w-[1222px]">
            Man muss nicht alles selbst können. Aus diesem Grund bindet frutico diverse Softwareprodukte und eine Auswahl an Hardware auf einfachste Weise an. Sie haben bereits eine Finanzbuchhaltungssoftware und einen Webshop? Sie setzen Waagen, Labeldrucker oder Scanner ein? Kein Problem für frutico. Unsere flexiblen Schnittstellen sind der Herausforderung gewachsen. Und wenn mal etwas nicht passt, dann wird es passend gemacht
          </p>
        </div>
      </section>
    </div>
  );
}
