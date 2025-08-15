import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div className="w-full">
      {/* Process Analysis and Consulting Section */}
      <section className="px-6 lg:px-27 py-12 lg:py-20">
        <div className="flex flex-col items-center gap-20 max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 w-full max-w-[1225px]">
            {/* Process Analysis Header */}
            <div className="flex flex-col gap-8 max-w-[702px]">
              <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
                Prozessanalyse und Beratung
              </h2>
              <p className="text-black text-base leading-[22px]">
                Mit der kostenlosen und unverbindlichen Prozessanalyse durch das Frutico-Team erhalten Sie klare Handlungsempfehlungen, wie Sie Ihre Betriebsprozesse effizienter gestalten und gleichzeitig Kosten reduzieren können. Wir begleiten Sie direkt im Hochbetrieb, analysieren Ihre Abläufe vor Ort und liefern Ihnen einen übersichtlichen Bericht mit konkreten Potenzialen zur Effizienzsteigerung. Frutico ist das Schweizer Cloud-ERP, das speziell für die Früchte- und Gemüsebranche entwickelt wurde – praxisnah, branchenerprobt und zukunftssicher.
              </p>
            </div>

            {/* Process Steps */}
            <div className="flex flex-col gap-8">
              <h3 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px]">
                So läuft die Prozessanalyse ab
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
                {/* Step 1 */}
                <div className="flex flex-col gap-5">
                  <div className="relative w-full h-[249px] rounded overflow-hidden">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F260a15db1dba4218a4e48a4dc8f6d15c%2F680dcad893a043b2bf90c2895aa1e0a4?format=webp&width=800"
                      alt="Process analysis step 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-black text-xl font-bold leading-8">1</div>
                  <p className="text-black text-base leading-[22px]">
                    In dem ersten Gespräch legen wir gemeinsam mit Ihnen das Ziel der Analyse fest.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-5">
                  <div className="relative w-full h-[249px] rounded overflow-hidden">
                    <Image
                      src="https://cdn.builder.io/o/assets%2F260a15db1dba4218a4e48a4dc8f6d15c%2F261e08b188a74baa8800153abcff9341?alt=media&token=cbef62fc-4afe-455b-a53b-a61f7c042ebe&apiKey=260a15db1dba4218a4e48a4dc8f6d15c"
                      alt="Process analysis step 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-black text-xl font-bold leading-8">2</div>
                  <p className="text-black text-base leading-[22px]">
                    Wir besuchen Sie während des Hochbetriebs, beobachten und dokumentieren die Kernprozesse.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-5">
                  <div className="relative w-full h-[249px] rounded overflow-hidden">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Workshop Image</span>
                    </div>
                  </div>
                  <div className="text-black text-xl font-bold leading-8">3</div>
                  <p className="text-black text-base leading-[22px]">
                    In einem Workshop besprechen wir mit Ihnen den Auswertungsbericht und das Verbesserungspotenzial.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center py-14">
              <button className="bg-[#0068A1] hover:bg-[#005580] text-white font-bold text-base px-6 py-4 rounded-full shadow-lg transition-colors duration-200 bg-gradient-to-b from-transparent to-black/10">
                Jetzt unverbindliche Prozessanalyse buchen
              </button>
            </div>
          </div>

          {/* Go-Live Support Section */}
          <div className="flex flex-col gap-10 w-full max-w-[1225px]">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-black text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] mb-2">
                  Go-Live Unterstützung
                </h2>
                <h3 className="text-black text-xl font-bold leading-8">
                  Wir begleiten Sie bis Go-Live und danach
                </h3>
              </div>
              <p className="text-black text-base leading-[22px] max-w-[498px]">
                Die Inbetriebnahme Ihres neuen Systems, das sogenannte Go-Live, ist eine der spannendsten Phasen bei der Einführung von frutico. Unsere Experten begleiten Sie Schritt für Schritt:
              </p>
            </div>

            {/* Go-Live Phases */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-7">
              {/* Phase 1 */}
              <div className="w-full h-72 bg-[#39C76D] rounded-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                <div className="text-white text-xl font-bold leading-8 mb-4">
                  Phase 1
                </div>
                <div className="text-white text-base font-bold mb-4">
                  Planung und Testmodus
                </div>
                <p className="text-white text-base leading-[22px]">
                  Einen Monat vor dem Go-Live erstellen wir gemeinsam mit Ihnen einen detaillierten Plan und lassen Sie frutico im Testmodus kennenlernen.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="w-full h-72 bg-[#39C76D] rounded-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                <div className="text-white text-xl font-bold leading-8 mb-4">
                  Phase 2
                </div>
                <div className="text-white text-base font-bold mb-4">
                  Datenvorbereitung
                </div>
                <p className="text-white text-base leading-[22px]">
                  Eineinhalb Monate vor dem Start erfassen wir Ihre Stammdaten und passen diese an.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="w-full h-72 bg-[#39C76D] rounded-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                <div className="text-white text-xl font-bold leading-8 mb-4">
                  Phase 3
                </div>
                <div className="text-white text-base font-bold mb-4">
                  Schulung und Hardware-Einführung
                </div>
                <p className="text-white text-base leading-[22px]">
                  Kurz vor dem Go-Live unterstützen wir Sie bei der Einführung neuer Hardware und führen Schulungen durch.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="w-full h-72 bg-[#39C76D] rounded-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                <div className="text-white text-xl font-bold leading-8 mb-4">
                  Phase 4
                </div>
                <div className="text-white text-base font-bold mb-4">
                  Unterstützung beim Go-Live
                </div>
                <p className="text-white text-base leading-[22px]">
                  In der heissen Phase sind wir vor Ort, beantworten Fragen und nehmen Justierungen vor, um einen reibungslosen Übergang sicherzustellen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
