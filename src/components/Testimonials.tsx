import Image from 'next/image';


const Testimonial = ({ quote, author, company, image, imagePosition } : {
  quote: string;
  author: string;
  company: string;
  image: string;
  imagePosition: 'left' | 'right';
  }) => {
  const content = (
    <div className="flex flex-col gap-8 flex-1">
      <blockquote className="text-black text-2xl md:text-3xl lg:text-[24px] font-bold leading-tight lg:leading-[38px]">
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
      quote: '«Frutico versteht und löst die Herausforderungen der Früchte- und Gemüse-Branche wie kein anderes EDV-System.»',
      author: 'Marcel Weder',
      company: 'Geschäftsführer Owiamo GmbH und CC Markthalle GmbH',
      image: '/images/marcel-weder.jpg',
      logo: { type: 'owiamo' as const },
      imagePosition: 'right' as const,
    },
    {
      quote: '«Wir wollen mit Frutico wachsen – vor allem schneller als unsere Konkurrenz. Und wir wollen die Betriebsprozesse fehlerfrei abwickeln.»',
      author: 'Beat Beerli',
      company: 'Geschäftsführer Querbeet Bio-Handels GmbH',
      image: '/images/beat-beerli.jpg',
      imagePosition: 'left' as const,
    },
    {
      quote: '«Mit Frutico haben wir ein vollintegriertes Betriebssystem, mit dem wir die Produktion steuern und unsere Prozesse optimieren.»',
      author: 'Martin Wyss',
      company: 'Geschäftsführer Jeune Primeur AG',
      image: '/images/martin-wyss.jpg',
      imagePosition: 'right' as const,
    },
    {
      quote: '«Frutico nutzt die aktuellste Technologie. Es ist die Zukunft der Früchte- und Gemüsebranche.»',
      author: 'Rolf Spiller',
      company: 'Geschäftsführer Tenti AG',
      image: '/images/rolf-spiller.jpg',
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
