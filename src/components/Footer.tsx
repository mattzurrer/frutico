import Image from "next/image";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className="relative py-8 bg-[url('/img/footerwaves.svg')] bg-cover bg-center bg-no-repeat">
      <div className="main-container px-6 lg:px-16">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-20" />
      
      <div className="relative z-10 flex flex-col justify-end min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">frutico</h3>
            <div className="space-y-1">
              <p className="font-semibold">deepico AG</p>
              <p className="text-sm">Rychenbergstrasse 67</p>
              <p className="text-sm">8400 Winterthur</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span className="text-sm">052 551 07 11</span>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <span className="text-sm">bernadette@deepico.ch</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Social Media</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/deepico/posts/"
                className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
                target="blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/deepico.ch"
                className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
                target="blank"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="E-Mail eingeben"
                className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder:text-white/70 text-sm focus:outline-none focus:border-white/50"
              />
              <button className="px-4 py-2 bg-[#0068A1] text-white rounded font-semibold text-sm hover:bg-[#0068A1]/90 transition-colors">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-white/20 text-white/80">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <SwissFlag />
            <span className="text-sm">Swiss Made in Winterthur</span>
          </div>
          
          <div className="flex gap-6 text-sm light-link">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

// Icons
function PhoneIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 14 15">
      <path d="M10.2539 8.10841L13.3164 9.42091C13.8086 9.61232 14.082 10.1318 13.9727 10.6514L13.3164 13.7139C13.207 14.2061 12.7422 14.5889 12.25 14.5889C12.0586 14.5889 11.8945 14.5615 11.7305 14.5615C11.457 14.5615 11.1836 14.5342 10.9375 14.5068C4.78516 13.8506 0 8.65529 0 2.31154C0 1.81935 0.355469 1.35451 0.847656 1.24513L3.91016 0.588881C4.42969 0.479506 4.94922 0.752943 5.14062 1.24513L6.45312 4.30763C6.64453 4.74513 6.53516 5.26466 6.15234 5.56544L5.03125 6.49513C5.76953 7.75294 6.80859 8.79201 8.06641 9.53029L8.99609 8.40919C9.29688 8.02638 9.81641 7.91701 10.2539 8.10841ZM12.0586 13.249L12.6328 10.542L9.89844 9.36622L9.10547 10.3506C8.69531 10.8428 7.98438 10.9795 7.41016 10.6514C5.96094 9.80372 4.75781 8.6006 3.91016 7.15138C3.58203 6.57716 3.71875 5.86622 4.21094 5.45607L5.19531 4.6631L4.01953 1.92872L1.3125 2.50294C1.39453 8.40919 6.15234 13.167 12.0586 13.249Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 14 11">
      <path d="M1.75 1.6394C1.50391 1.6394 1.3125 1.85815 1.3125 2.0769V2.70581L6.01562 6.56128C6.58984 7.02612 7.38281 7.02612 7.95703 6.56128L12.6875 2.70581V2.0769C12.6875 1.85815 12.4688 1.6394 12.25 1.6394H1.75ZM1.3125 4.40112V9.0769C1.3125 9.323 1.50391 9.5144 1.75 9.5144H12.25C12.4688 9.5144 12.6875 9.323 12.6875 9.0769V4.40112L8.80469 7.573C7.73828 8.448 6.23438 8.448 5.19531 7.573L1.3125 4.40112ZM0 2.0769C0 1.11987 0.765625 0.326904 1.75 0.326904H12.25C13.207 0.326904 14 1.11987 14 2.0769V9.0769C14 10.0613 13.207 10.8269 12.25 10.8269H1.75C0.765625 10.8269 0 10.0613 0 9.0769V2.0769Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function SwissFlag() {
  return (
    <Image
      src="img/swissflag.svg"
      alt="Swiss Flag, it's a big plus"
      width={20}
      height={20}
    />
  );
}
