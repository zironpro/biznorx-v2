"use client"

import { MapPin, Mail, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react"

const CONTACT_METHODS = [
  { Icon: MessageCircle, label: "India Office", value: "+91 9004072449",  href: "https://wa.me/919004072449",  color: "hover:text-green-600", bg: "group-hover:bg-green-50" },
  { Icon: MessageCircle, label: "UAE Office",   value: "+971 522585437", href: "https://wa.me/971522585437",  color: "hover:text-green-600", bg: "group-hover:bg-green-50" },
  { Icon: Mail,       label: "Email",        value: "business@biznorx.com", href: "mailto:business@biznorx.com", color: "hover:text-biznorx-red", bg: "group-hover:bg-biznorx-red/10" },
]

const SOCIAL_LINKS = [
  { Icon: Instagram,  href: "https://www.instagram.com/biznorx", label: "Instagram" },
  { Icon: Linkedin,   href: "https://www.linkedin.com/company/biznorx/", label: "LinkedIn" },
  { Icon: Facebook,   href: "#",                                  label: "Facebook" },
]

export function ContactInfo() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container-master px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          
          {/* Left: Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-biznorx-navy mb-8">Reach Us Directly</h2>
            <div className="space-y-6">
              {CONTACT_METHODS.map((method, i) => {
                const Icon = method.Icon
                return (
                  <a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-6 rounded-2xl border border-neutral-100 hover:shadow-md transition-all duration-300 ${method.bg}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center mr-6 group-hover:bg-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-current transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                        {method.label}
                      </p>
                      <p className={`text-xl font-bold text-biznorx-navy transition-colors duration-300 ${method.color.replace("hover:", "group-hover:")}`}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right: Offices & Socials */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold text-biznorx-navy mb-8">Our Offices</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-biznorx-red" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">India Office</p>
                      <p className="text-base font-medium text-biznorx-navy">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-biznorx-red" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">UAE Office</p>
                      <p className="text-base font-medium text-biznorx-navy">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-biznorx-navy mb-6">Follow Us</h2>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-biznorx-red hover:border-biznorx-red transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
