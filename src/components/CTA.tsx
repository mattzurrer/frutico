import Image from "next/image";

interface CallToActionProps {
  className?: string;
}

export default function CTA({ className = "" }: CallToActionProps) {
  return (
      <section className="bg-[#228C49] shadow-xl">
        <div className="main-container px-6 lg:px-27">
        <div className="flex flex-col lg:flex-row items-center justify-end gap-10">
          <div className="flex flex-col items-end text-right text-white/95">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">052 551 07 11</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">bernadette@deepico.ch</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Image
              src="/images/bernadette.png"
              alt="Bernadette Hug"
              width={165}
              height={165}
              className="rounded-full w-32 h-32 lg:w-60 lg:h-60"
            />
            <div className="flex flex-col items-center gap-2">
              <button className="bg-white/95 text-[#228C49] px-6 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-shadow">
                Jetzt unverbindliche Demo buchen
              </button>
              <div className="flex items-center gap-6 text-white/95">
                <div className="flex items-center gap-2">
                  <span className="text-base">052 551 07 11</span>
                </div>
                <span className="text-base">Bernadette Hug</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}
