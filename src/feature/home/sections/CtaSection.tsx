import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="w-full bg-white py-24 md:py-40">
      <div className="container-master flex flex-col items-center text-center">
        
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 text-biznorx-navy">
          Have an Opportunity <br className="hidden md:block"/> in Mind?
        </h2>
        
        <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mb-12">
          Let's turn it into something real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="rounded-full pl-6 pr-2 py-6 gap-3 text-sm md:text-base bg-biznorx-navy text-white hover:bg-biznorx-navy/90 h-12 md:h-14 border-0 w-full sm:w-auto cursor-pointer font-bold transition-all">
            <Link href="/contact">
              Start a Conversation
              <div className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="group rounded-full pl-6 pr-2 py-6 gap-3 text-sm md:text-base border-2 border-biznorx-navy text-biznorx-navy hover:bg-biznorx-navy hover:text-white transition-colors h-12 md:h-14 w-full sm:w-auto cursor-pointer font-bold">
            <Link href="/services">
              Explore Services
              <div className="bg-biznorx-navy/10 rounded-full p-2 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-biznorx-navy group-hover:text-white transition-colors" />
              </div>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
