import Link from "next/link";

interface CtaButtonProps {
  className?: string;
}

export default function ctaButton({ className = "" }: CtaButtonProps) {
  return (
  <span>
  <Link href="/kontakt/">
      <button className="bg-gradient-to-b from-transparent to-black/10 bg-[#0068A1] text-white px-6 py-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        Jetzt Demo buchen
      </button>
  </Link>
  </span>      
  )
}