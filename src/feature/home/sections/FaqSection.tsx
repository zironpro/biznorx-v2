"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What services does BiznorX provide?",
    answer: "BiznorX is a unified global partner offering comprehensive solutions across four core verticals: Talent & Workforce, Real Estate & Land, Digital & Technology, and Business & Growth. We help organizations scale from opportunity to execution."
  },
  {
    question: "Do you operate globally or regionally?",
    answer: "We operate on a global scale, leveraging an extensive international network of experts and partners. This allows us to provide localized insights while executing global strategies across all our business verticals."
  },
  {
    question: "Can we engage BiznorX for multiple verticals at once?",
    answer: "Absolutely. Our unique ecosystem is designed so that our services complement each other. Many of our clients utilize our technology solutions alongside our talent acquisition and business growth strategies for a cohesive expansion plan."
  },
  {
    question: "How do you ensure quality across such diverse sectors?",
    answer: "Each vertical is led by dedicated industry veterans who specialize deeply in their respective fields. We enforce a rigorous, data-driven methodology across the board, ensuring consistently high standards whether you are building software or acquiring real estate."
  },
  {
    question: "How do we get started with a project?",
    answer: "You can begin by scheduling a consultation with our strategic advisory team. We will assess your current challenges, define your objectives, and architect a customized solution blueprint leveraging the right mix of our core verticals."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-neutral-50 py-12 md:py-32 border-t border-neutral-100">
      <div className="container-master">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24">
          
          {/* Left Column - Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start">
            <span className="text-biznorx-red tracking-widest text-sm font-bold uppercase mb-4 block">FAQ</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy mb-6 tracking-tight leading-tight">
              Answers to your <br className="hidden lg:block"/>questions.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Everything you need to know about our global ecosystem, cross-vertical solutions, and how we drive your business forward.
            </p>
            <Button className="rounded-full bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 text-white px-8 py-6 text-sm md:text-base h-12 md:h-14 font-bold shadow-md cursor-pointer transition-all">
              Contact Support
            </Button>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`border border-neutral-200/60 rounded-[1.5rem] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white shadow-xl shadow-neutral-200/30 border-transparent' : 'bg-transparent hover:bg-white/50'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 pr-8 ${isOpen ? 'text-biznorx-red' : 'text-biznorx-navy group-hover:text-biznorx-red'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-biznorx-red/10' : 'bg-neutral-100 group-hover:bg-biznorx-red/5'}`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-biznorx-red" />
                      ) : (
                        <Plus className="w-5 h-5 text-biznorx-navy group-hover:text-biznorx-red transition-colors" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 md:p-8 pt-0 text-slate-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
