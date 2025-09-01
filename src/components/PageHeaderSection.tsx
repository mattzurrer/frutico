import Image from "next/image";

interface HeaderImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

interface PageHeaderSectionProps {
  title: string;
  subtitle: string;
  description: string;
  images: HeaderImage[];
  className?: string;
  containerClassName?: string;
  textColumnClassName?: string;
  imageColumnClassName?: string;
  imageFrameClassName?: string;
}

export default function PageHeaderSection({
  title,
  subtitle,
  description,
  images,
  className = "",
  containerClassName = "flex flex-col lg:flex-row items-start gap-12 lg:gap-20",
  textColumnClassName = "flex-1 max-w-2xl",
  imageColumnClassName = "flex-1 flex justify-center items-center relative min-h-[100px] lg:min-h-[200px]",
  imageFrameClassName = "relative w-full max-w-[572px] h-[200px] lg:h-[300px]",
}: PageHeaderSectionProps) {
  return (
    <section className={`px-6 lg:px-27 py-6 lg:py-20 ${className}`}>
      <div className={containerClassName}>
        <div className={textColumnClassName}>
          <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-10 tracking-tight">
            {title}
          </h1>

          <h2 className="text-black mb-8 font-noto-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
            {subtitle}
          </h2>

          <p className="text-base text-black mb-10 leading-6">
            {description}
          </p>
        </div>
        <div className={imageColumnClassName}>
          <div className={imageFrameClassName}>
            {images.map((img, idx) => (
              <Image
                key={`${img.src}-${idx}`}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
