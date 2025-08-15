import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Waves from "@/components/Waves";
import CTA from "@/components/CTA";
import Brands from "@/components/Brands";

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
        <section className="px-6 lg:px-27 py-0 lg:py-4">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-10">
            <div className="justify-start text-black text-5xl font-extrabold font-['Montserrat'] leading-[58px]">Kontaktieren Sie uns</div>
            <div className="self-stretch justify-start text-black text-3xl font-bold font-['Noto_Sans'] leading-9">Haben Sie Fragen zu frutico?<br /> Wir sind für Sie da und freuen uns, Ihnen weiterzuhelfen.</div>
            <div className="self-stretch inline-flex justify-start items-start gap-10">
                <div className="flex-1 justify-start"><strong>deepico AG</strong><br/>Rychenbergstrasse 67<br/>CH-8400 Winterthur<br/>Schweiz<br/><br/><a href="https://maps.app.goo.gl/dJkGaVcgtaFKMZ3d9" target="_blank">Finde uns auf Google Maps</a></div>
                <div className="flex-1 justify-start pt-7"><a href="mailto:bernadette@deepico.ch">bernadette@deepico.ch</a><br/>052 551 07 11</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-10 text-l">
                <div className="flex-1 justify-start"><strong>Standard Support</strong><br/>Montag - Freitag, 08:00 - 17:00</div>
                <div className="flex-1 justify-start"><strong>Premium Support</strong><br/>Rund um die Uhr (24/7) auf Anfrage</div>
            </div>
        </div>
        </section>
      </div>
      <Waves />
      <Brands />
      <CTA />
      <Footer />
    </div>
  );
}
