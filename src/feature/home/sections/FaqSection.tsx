"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in placing top-tier talent across Technology, Finance, Healthcare, and Executive Leadership sectors. Our deep industry knowledge allows us to understand the nuanced requirements of these highly competitive markets."
  },
  {
    question: "How long does your typical hiring process take?",
    answer: "While timelines vary based on the role's complexity, our rigorous data-driven methodology typically reduces time-to-hire by 40%. On average, our clients see their first round of highly qualified candidates within 5 to 7 business days."
  },
  {
    question: "Do you offer retained or contingency recruiting?",
    answer: "We offer both retained and exclusive contingency search models, tailored to your specific hiring needs. For executive and highly specialized roles, we recommend our retained search to dedicate maximum resources to your placement."
  },
  {
    question: "How do you vet your candidates?",
    answer: "Our vetting process is exhaustive. It includes deep behavioral interviewing, technical assessments (if applicable), comprehensive background and reference checks, and cultural alignment evaluations before you ever see a resume."
  },
  {
    question: "What happens if a placement doesn't work out?",
    answer: "We stand behind our placements with a comprehensive guarantee period. If a candidate leaves or is let go within this timeframe, we will conduct a replacement search at no additional cost to ensure your team remains strong."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-neutral-50 py-24 md:py-32 border-t border-neutral-100">
      <div className="container-master">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Header */}
          <div className="w-full lg:w-1/3">
            <span className="text-biznorx-red tracking-widest text-sm font-bold uppercase mb-4 block">FAQ</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy mb-6 tracking-tight leading-tight">
              Answers to your <br className="hidden lg:block"/>questions.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Everything you need to know about our recruiting methodology, timelines, and how we guarantee the perfect hire.
            </p>
            <Button className="rounded-full bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 text-white px-8 h-12 shadow-md">
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
