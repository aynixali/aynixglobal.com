import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className={`py-24 px-6 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-cyan mb-4">
            ABOUT AYNIX
          </h2>
          <div className="w-24 h-1 gradient-cyan-blue mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-dark rounded-2xl p-8 relative overflow-hidden">
            <div className="w-full h-64 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-blue/20 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-neon-cyan text-6xl">📱</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-orbitron font-bold text-white">
              PREMIUM ELECTRONICS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Aynix creates next-generation consumer electronics that combine premium design with intelligent engineering. 
              Based in Pakistan, we build products that don't just work—they inspire.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From elite laptops to electric vehicles, our mission is to revolutionize everyday technology 
              with an intimidating, minimalist aesthetic that defines Pakistan's tech future.
            </p>
            <div className="flex space-x-4 flex-wrap">
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-neon-cyan font-semibold">SMARTPHONES</span>
              </div>
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-electric-green font-semibold">LAPTOPS</span>
              </div>
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-neon-pink font-semibold">WEARABLES</span>
              </div>
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-neon-blue font-semibold">ELECTRIC VEHICLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
