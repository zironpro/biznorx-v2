import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="w-full bg-white py-24 md:py-40">
      <div className="container-master flex flex-col items-center text-center">
        
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl text-biznorx-navy mb-6 tracking-tight">
          Have an Opportunity <br className="hidden md:block"/> in Mind?
        </h2>
        
        <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mb-12">
          Let's turn it into something real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="rounded-full pl-8 pr-4 py-8 gap-4 text-lg bg-biznorx-navy text-white hover:bg-biznorx-navy/90 border-0 cursor-pointer font-bold transition-all">
            <Link href="/contact">
              Start a Conversation
              <div className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="group rounded-full pl-8 pr-4 py-8 gap-4 text-lg border-2 border-biznorx-navy text-biznorx-navy hover:bg-biznorx-navy hover:text-white transition-colors cursor-pointer font-bold">
            <Link href="/services">
              Explore Services
              <div className="bg-biznorx-navy/10 rounded-full p-2 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-biznorx-navy group-hover:text-white transition-colors" />
              </div>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
