import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function VisionSection() {
  const { ref, isVisible } = useScrollReveal();

  const visionCards = [
    {
      title: "AYNIX PHONE",
      description: "Flagship Android smartphone with custom AynixOS skin and premium design that redefines mobile computing.",
      icon: "📱"
    },
    {
      title: "AYNIX LAPTOP SERIES",
      description: "Premium lightweight laptops engineered for creators and visionaries. Designed with elite specs, sleek body, and signature AynixOS interface.",
      icon: "💻"
    },
    {
      title: "AYNIX WATCH",
      description: "Powerful, minimal smartwatch that redefines wearable technology.",
      icon: "⌚"
    },
    {
      title: "AYNIX MOTORS",
      description: "Future electric vehicle technology with intelligent automotive systems.",
      icon: "🚗"
    }
  ];

  return (
    <section id="vision" className={`py-24 px-6 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-blue mb-4">
            AYNIX DEVICES
          </h2>
          <div className="w-24 h-1 gradient-blue-green mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionCards.map((card, index) => (
            <div 
              key={index}
              className="glass-dark rounded-2xl p-8 hover:neon-glow-blue transition-all duration-500 group"
            >
              <div className="w-full h-48 bg-gradient-to-br from-neon-blue/20 via-transparent to-electric-green/20 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-6xl">{card.icon}</div>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 mb-4">{card.description}</p>
              {card.title === "AYNIX LAPTOP SERIES" && (
                <div className="text-neon-cyan font-semibold text-sm">Working</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
