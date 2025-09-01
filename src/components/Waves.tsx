import Image from "next/image";

interface WavesProps {
  className?: string;
}

export default function Footer({ className = "" }: WavesProps) {
  return (
      <div className="relative w-full h-full">
        <Image
          src="/images/waves.svg"
          alt="Waves"
          width="3200"
          height="320"
        />
      </div>)
}
