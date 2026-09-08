import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./icons/SocialIcons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full bg-biznorx-navy text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      
      {/* Optional faint background gradient or glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-biznorx-red/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-master relative z-10">

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 items-start text-left">
            <img src="/logo/logo.png" alt="BiznorX Logo" className="w-auto h-auto max-h-12 object-contain brightness-0 invert" />
            <p className="text-white/60 leading-relaxed text-sm lg:pr-4">
              The premier recruiting agency connecting ambitious professionals with industry-leading companies globally.
            </p>
          </div>

          {/* Column 2 - For Employers */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">For Employers</h4>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Find Talent</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Executive Search</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Recruiting Solutions</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Case Studies</Link>
          </div>

          {/* Column 3 - For Candidates */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">For Candidates</h4>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Browse Jobs</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Submit Resume</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Career Advice</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Job Alerts</Link>
          </div>

          {/* Column 4 - Company */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-lg mb-2">Company</h4>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Our Team</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Contact</Link>
            <Link href="#" className="text-white/60 hover:text-biznorx-red transition-colors text-sm">Privacy Policy</Link>
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
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
