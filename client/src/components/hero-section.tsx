import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-blue/20" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="text-center z-10 px-6" ref={ref}>
        <h1 
          className="glitch font-orbitron mb-8 animate-float" 
          data-text="AYNIX"
        >
          AYNIX
        </h1>
        <p className="text-xl md:text-2xl text-silver mb-8 font-light tracking-wide">
          ENGINEERING THE ELITE FUTURE OF TECHNOLOGY
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Pakistan's most futuristic brand. From premium laptops to electric vehicles, we're building the future one innovation at a time.
        </p>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-ping" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-electric-green rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-neon-pink rounded-full animate-bounce" />
    </section>
  );
}
