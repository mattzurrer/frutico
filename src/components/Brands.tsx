import Image from "next/image";
import Link from "next/link";

interface BrandsProps {
  className?: string;
}

export default function Brands({ className = "" }: BrandsProps) {
  return (
    <section className={`py-16 text-center ${className}`}>
      <div className="main-container px-6 lg:px-27">
      <h2 className="text-3xl font-bold text-black mb-8">
        frutico ist ein ERP von deepico
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-6 mb-12">
        <p className="text-base text-black leading-6">
          frutico ist Teil der <span className="font-bold">spezialisierten ERP-Produktfamilie von deepico</span> und wurde gezielt für die Früchte- und Gemüsebranche entwickelt. Als Deepico-Plattformlösung vereint Frutico alle Vorteile der Cloud-Technologie mit branchenspezifischer Funktionalität für maximale Effizienz im Tagesgeschäft.
        </p>
        
        <p className="text-base text-black leading-6">
          Neben frutico bietet deepico weitere spezialisierte ERP-Lösungen wie meatico für die Fleischverarbeitung, lattico für die Milch- und Käsebranche, fontico für die Getränkeindustrie und crustico für Bäckereien und Konditoreien.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        <BrandLogo
          src="/images/frutico-logo.svg"
          alt="frutico"
          name="frutico"
          url="https:frutico.ch"
        />
        <BrandLogo
          src="/images/logo/crustico-logo.svg"
          alt="crustico"
          name="crustico"
          url="https://crustico.ch"
        />
        <BrandLogo
          src="/images/logo/fontico-logo.svg"
          alt="fontico"
          name="fontico"
          url="https://fontico.ch"
        />
        <BrandLogo
          src="/images/logo/meatico-logo.svg"
          alt="meatico"
          name="meatico"
          url="https://meatico.ch"
        />
        <BrandLogo
          src="/images/logo/lattico-logo.svg"
          alt="lattico"
          name="lattico"
          url="https://lattico.app"
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-black leading-6 mb-4">
          Kontaktieren Sie uns für weitere Informationen oder um eine Demo zu buchen. Wir sind für Sie da und freuen uns, Ihnen zu zeigen, wie deepico Ihr Unternehmen unterstützen kann.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://deepico.ch/about" rel="nofollow" className="text-base">
            Lernen Sie das Team hinter deepico kennen
          </a>
          <ArrowIcon />
        </div>
      </div>
      </div>
    </section>
  );
}

function BrandLogo({ src, alt, name, url }: { src: string; alt: string; name: string; url: string }) {
  return (
    <div className="flex items-center justify-center p-4 rounded-lg">
      <Link href={url} passHref target="blank">
      <Image
        src={src}
        alt={alt}
        width={203}
        height={44}
        className="h-auto max-h-10 w-auto object-contain"
      />
      </Link>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 fill-[#0068A1]" viewBox="0 0 16 14">
      <path d="M15.708 7.4292L9.52051 13.6167C9.30957 13.8276 8.92285 13.8276 8.71191 13.6167C8.50098 13.4058 8.50098 13.019 8.71191 12.8081L13.9502 7.56982H0.696289C0.379883 7.56982 0.133789 7.32373 0.133789 7.00732C0.133789 6.72607 0.379883 6.44482 0.696289 6.44482H13.9502L8.71191 1.2417C8.50098 1.03076 8.50098 0.644043 8.71191 0.433105C8.92285 0.222168 9.30957 0.222168 9.52051 0.433105L15.708 6.62061C15.9189 6.83154 15.9189 7.21826 15.708 7.4292Z" />
    </svg>
  );
}
