import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  logo?: {
    type: 'owiamo' | 'jeune-primeur' | 'tenti';
    image?: string;
  };
  imagePosition: 'left' | 'right';
}

const OwiamoLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-12 h-12 bg-[#97C222] rounded-full flex items-center justify-center relative">
      <div className="w-9 h-[27px] relative">
        <svg
          className="absolute right-0 top-[7px] w-[19px] h-[19px]"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8186 0.343506C15.1144 0.343506 19.4074 4.63658 19.4075 9.93237C19.4075 15.2282 15.1145 19.5212 9.8186 19.5212C4.52281 19.5212 0.229736 15.2282 0.229736 9.93237C0.229801 4.63662 4.52285 0.34357 9.8186 0.343506ZM6.95337 3.85522C6.84163 3.70705 6.63703 3.66106 6.47095 3.7439C1.67366 6.13675 2.65245 11.2675 3.90747 13.8347C4.01058 14.0452 4.27475 14.1096 4.46899 13.9783C8.90348 10.9801 9.32448 7.00031 6.95337 3.85522Z"
            fill="#82368C"
          />
        </svg>
        <div className="absolute left-0 top-0 w-6 h-[27px] bg-[#E40428]"></div>
      </div>
    </div>
    <span className="text-black text-base font-bold">Owiamo</span>
  </div>
);

const JeunePrimeurLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-[30px] h-12 bg-[#00A24F] rounded-full flex items-center justify-center relative">
      <Image
        src="/img/jeune-primeur-logo.png"
        alt="Jeune Primeur"
        width={49}
        height={49}
        className="absolute -left-[9px] top-0"
      />
    </div>
    <span className="text-black text-base font-bold">Jeune Primeur AG</span>
  </div>
);

const TentiLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-12 h-12 bg-[#007A44] rounded-full flex items-center justify-center relative">
      <Image
        src="/img/tenti-logo.png"
        alt="Tenti"
        width={39}
        height={16}
        className="absolute left-1 top-4"
      />
    </div>
    <span className="text-black text-base font-bold">Tenti AG</span>
  </div>
);

const Testimonial = ({ quote, author, company, image, imagePosition }: TestimonialProps) => {
  const content = (
    <div className="flex flex-col gap-8 flex-1">
      <blockquote className="text-black text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
        {quote}
      </blockquote>
      <p className="text-black text-base leading-[22px] max-w-[602px]">
        {author} - {company}
      </p>
    </div>
  );

  const imageElement = (
    <div className="w-full max-w-[496px] h-[286px] relative rounded overflow-hidden flex-shrink-0">
      <Image
        src={image}
        alt={author}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full">
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageElement}
        </>
      )}
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"Frutico versteht und löst die Herausforderungen der Früchte- und Gemüse-Branche wie kein anderes EDV-System."',
      author: 'Marcel Weder',
      company: 'Geschäftsführer Owiamo GmbH und CC Markthalle GmbH',
      image: '/img/marcel-weder.png',
      logo: { type: 'owiamo' as const },
      imagePosition: 'right' as const,
    },
    {
      quote: '«Wir wollen mit Frutico wachsen – vor allem schneller als unsere Konkurrenz. Und wir wollen die Betriebsprozesse fehlerfrei abwickeln.»',
      author: 'Beat Beerli',
      company: 'Geschäftsführer Querbeet Bio-Handels GmbH',
      image: '/img/beat-beerli.png',
      logo: { type: 'owiamo' as const },
      imagePosition: 'left' as const,
    },
    {
      quote: '«Mit Frutico haben wir ein vollintegriertes Betriebssystem, mit dem wir die Produktion steuern und unsere Prozesse optimieren.»',
      author: 'Martin Wyss',
      company: 'Geschäftsführer Jeune Primeur AG',
      image: '/img/martin-wyss.png',
      logo: { type: 'jeune-primeur' as const },
      imagePosition: 'right' as const,
    },
    {
      quote: '«Frutico nutzt die aktuellste Technologie. Es ist die Zukunft der Früchte- und Gemüsebranche.»',
      author: 'Rolf Spiller',
      company: 'Geschäftsführer Tenti AG',
      image: '/img/rolf-spiller.png',
      logo: { type: 'tenti' as const },
      imagePosition: 'left' as const,
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
