import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";

export default function ReferenzenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="main-container">
        <section className="px-6 lg:px-27 py-6 lg:py-12">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-10 tracking-tight">
                Referenzen
              </h1>
              {/* Subtitle */}
              <h2 className="text-black mb-8 font-noto-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                Das sagen unsere Kunden zu frutico
              </h2>
            </div>
          </div>
        </section>
        <main className="px-6 lg:px-27 py-8">
          <Testimonials />
        </main>
      </div>
      <Footer />
    </div>
  );
}