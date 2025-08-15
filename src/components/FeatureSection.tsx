import Image from "next/image";

interface FeatureDetail {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  imageUrl: string;
  features: FeatureDetail[];
  imagePosition?: "left" | "right";
  className?: string;
}

export default function FeatureSection({
  title,
  imageUrl,
  features,
  imagePosition = "left",
  className = ""
}: FeatureSectionProps) {
  const isImageLeft = imagePosition === "left";
  
  return (
    <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6 lg:gap-12 ${className}`}>
      <div className="w-full lg:max-w-lg">
            <Image
            src={imageUrl}
            alt={title}
            width={508}
            height={508}
            className="w-full h-full object-contain"
          />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="text-black font-noto-sans text-2xl lg:text-3xl font-bold leading-tight">
          {title}
        </h2>
        <div className="space-y-4 text-black font-noto-sans text-base leading-relaxed">
          {features.map((feature, index) => (
            <div key={index}>
              <span className="font-bold">{feature.title}</span><br />
              {feature.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}