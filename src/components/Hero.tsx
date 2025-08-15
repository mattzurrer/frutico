import Image from "next/image";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`px-6 lg:px-27 py-12 lg:py-20 ${className}`}>
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
          
          <button className="bg-gradient-to-b from-transparent to-black/10 bg-[#0068A1] text-white px-6 py-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
            Jetzt Demo buchen
          </button>
        </div>
        
        <div className="flex-1 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
          <div className="relative w-full max-w-[572px] h-[400px] lg:h-[600px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/e6723a7b570dc07a3cbc52fb5baf9b89dd7d591d?width=502"
              alt="Melon"
              width={251}
              height={249}
              className="absolute left-0 top-8 lg:top-16 w-32 lg:w-60 h-auto"
            />
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/79e201f848550d273e1f27f8418eae0ffd6865b1?width=700"
              alt="Orange"
              width={350}
              height={438}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-40 lg:w-80 h-auto z-10"
            />
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/c9f061a37cfccfaf76e8db5ee82d8f954c00c9f6?width=502"
              alt="Tomato"
              width={251}
              height={249}
              className="absolute right-0 top-8 lg:top-16 w-32 lg:w-60 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
