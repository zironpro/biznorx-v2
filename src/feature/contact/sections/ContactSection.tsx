"use client"

import { MapPin, Mail, MessageCircle, Send, ArrowRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons"
import { Button } from "@/components/ui/button"

const CONTACT_METHODS = [
  { Icon: MessageCircle, label: "India Office", value: "+91 9004072449",  href: "https://wa.me/919004072449" },
  { Icon: MessageCircle, label: "UAE Office",   value: "+971 522585437", href: "https://wa.me/971522585437" },
  { Icon: Mail,       label: "Email",        value: "business@biznorx.com", href: "mailto:business@biznorx.com" },
]

const SOCIAL_LINKS = [
  { Icon: InstagramIcon,  href: "https://www.instagram.com/biznorx", label: "Instagram" },
  { Icon: LinkedinIcon,   href: "https://www.linkedin.com/company/biznorx/", label: "LinkedIn" },
  { Icon: FacebookIcon,   href: "#",                                  label: "Facebook" },
]

export function ContactSection() {
  return (
    <section className="w-full relative min-h-screen flex flex-col lg:flex-row bg-white">
      
      {/* Left Side - The Form */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 order-2 lg:order-1 relative">
        <div className="max-w-2xl mx-auto w-full relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-biznorx-red mb-4">
            Send us a message
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight mb-4">
            Let's start a <br/>conversation.
          </h1>
          <p className="text-slate-500 mb-12 font-medium leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours to discuss your workforce requirements.
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <select defaultValue="" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all appearance-none cursor-pointer">
                <option value="" disabled>Select an inquiry type</option>
                <option value="recruitment">Recruitment Services</option>
                <option value="hr">HR Consulting</option>
                <option value="partnership">Business Partnership</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your requirements..." 
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 text-slate-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-biznorx-red/20 focus:border-biznorx-red transition-all resize-none"
              ></textarea>
            </div>

            <Button className="w-full sm:w-auto bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 text-white rounded-lg px-10 py-7 text-lg font-bold shadow-lg shadow-biznorx-red/20 transition-all hover:scale-105 group border-0">
              Send Message <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Contact Info & Locations */}
      <div className="w-full lg:w-5/12 bg-biznorx-navy flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 order-1 lg:order-2 text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-biznorx-red/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] mb-12">
            Contact Information
          </h2>

          <div className="space-y-8 mb-8 md:mb-16">
            {CONTACT_METHODS.map((method, i) => {
              const Icon = method.Icon
              return (
                <a
                  key={i}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-biznorx-red group-hover:border-biznorx-red transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
                      {method.label}
                    </p>
                    <p className="text-lg font-medium text-white group-hover:text-biznorx-red transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="w-full h-px bg-white/10 mb-12"></div>

          <h3 className="text-xl font-bold mb-8">Our Locations</h3>
          <div className="space-y-8 mb-8 md:mb-16">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-biznorx-red mr-4 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg mb-1">India Headquarters</p>
                <p className="text-white/60 leading-relaxed text-sm">
                  Mumbai, Maharashtra<br/>
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-biznorx-red mr-4 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg mb-1">UAE Operations</p>
                <p className="text-white/60 leading-relaxed text-sm">
                  Dubai,<br/>
                  United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-6">Follow our journey</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-biznorx-red hover:border-biznorx-red transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
