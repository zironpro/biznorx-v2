"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Digital", href: "/digital" },
  ]

  const rightNavLinks = [
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ]

  const allLinks = [...navLinks, ...rightNavLinks]

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-40 w-full bg-white border-b border-neutral-200/50 py-4">
        <div className="container-master flex items-center justify-between relative">
          
          {/* Mobile Menu Toggle (Left on mobile, hidden on md) */}
          <div className="flex md:hidden flex-1 justify-start">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-neutral-600 hover:text-biznorx-navy transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Left Links */}
          <div className="hidden md:flex flex-1 items-center justify-start gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors ${pathname === link.href ? 'text-biznorx-red font-bold' : 'text-neutral-600 hover:text-biznorx-red'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" className="block">
              <img src="/logo/logo.png" alt="BiznorX Logo" className="w-auto h-auto max-h-12 md:max-h-16" />
            </Link>
          </div>

          {/* Desktop Right Links & CTA */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6 text-base font-medium">
            {rightNavLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'text-biznorx-red font-bold' : 'text-neutral-600 hover:text-biznorx-red'}`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full pl-5 pr-2 gap-2 text-base bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 h-10 border-0">
              <Link href="/contact">
                Get started 
                <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </Button>
          </div>
          
          {/* Mobile Right Spacer (to keep logo centered) */}
          <div className="flex md:hidden flex-1 justify-end"></div>
        </div>
      </nav>

      {/* Mobile Bottom Sheet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
            />
            
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  setIsMobileMenuOpen(false)
                }
              }}
              className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl shadow-2xl flex flex-col h-auto max-h-[85vh] md:hidden"
            >
              {/* Drag Handle Area */}
              <div className="w-full flex justify-center py-4 cursor-grab active:cursor-grabbing shrink-0 touch-none">
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
              </div>

              {/* Logo Header */}
              <div className="flex items-center justify-center px-6 pb-6 border-b border-neutral-100 shrink-0">
                <img src="/logo/logo.png" alt="BiznorX Logo" className="w-36 md:w-48 h-auto object-contain" />
              </div>

              {/* Scrollable Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5 overscroll-contain">
                {allLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold tracking-tight transition-colors ${
                      pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) 
                        ? 'text-biznorx-red' 
                        : 'text-biznorx-navy hover:text-biznorx-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Button asChild className="w-full mt-2 rounded-full h-12 pl-6 pr-3 gap-3 text-base font-bold bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 border-0 cursor-pointer">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get started
                    <div className="bg-white/20 rounded-full p-1.5 flex items-center justify-center ml-auto">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
