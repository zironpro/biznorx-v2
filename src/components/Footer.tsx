import Link from "next/link";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./icons/SocialIcons";

export function Footer() {
  return (
    <footer className="w-full bg-biznorx-navy text-white pt-10 md:pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      
      {/* Optional faint background gradient or glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-biznorx-red/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-master relative z-10">

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-8 md:mb-16">
          {/* Column 1 - Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 items-start text-left">
            <img src="/logo/logo-secondary.png" alt="BiznorX Logo" className="w-auto h-auto max-h-24 object-contain" />
            <p className="text-white/60 leading-relaxed text-sm lg:pr-4">
              The premier recruiting agency connecting ambitious professionals with industry-leading companies globally.
            </p>
          </div>

          {/* Column 2 - Solutions */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">Solutions</h4>
            <Link href="/services" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Our Services</Link>
            <Link href="/digital" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Digital Services</Link>
            <Link href="/industries" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Industries</Link>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">Company</h4>
            <Link href="/about" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">About Us</Link>
            <Link href="/careers" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Careers</Link>
            <Link href="/contact" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Contact</Link>
          </div>

          {/* Column 4 - Legal */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">Legal</h4>
            <Link href="/privacy" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Terms of Service</Link>
          </div>

          {/* Column 5 - Socials */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">Social</h4>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm flex items-center gap-3">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm flex items-center gap-3">
              <TwitterIcon className="w-4 h-4" /> Twitter
            </Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm flex items-center gap-3">
              <FacebookIcon className="w-4 h-4" /> Facebook
            </Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm flex items-center gap-3">
              <InstagramIcon className="w-4 h-4" /> Instagram
            </Link>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} BiznorX. All rights reserved.</p>
          <p>Designed and developed by <a href="https://zironpro.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">Zironpro</a></p>
        </div>

      </div>
    </footer>
  );
}
