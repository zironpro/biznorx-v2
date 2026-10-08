import { Globe2 } from "lucide-react";

export function GlobalSection() {
  return (
    <section className="w-full bg-biznorx-navy text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_70%)]"></div>
      <div className="container-master relative z-10 text-center">
        
        <h2 className="font-bold text-sm tracking-widest uppercase text-gray-500 mb-4">Built Across Markets. Connected Globally.</h2>
        
        <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl mb-12 tracking-tight max-w-4xl mx-auto">
          Operating across key markets with a growing network of partners.
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-bold">
            <span className="text-4xl">🇮🇳</span> India
          </div>
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-bold">
            <span className="text-4xl">🇦🇪</span> UAE
          </div>
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-bold">
            <Globe2 className="w-10 h-10 text-gray-400" /> Global Markets
          </div>
        </div>
      </div>
    </section>
  );
}
