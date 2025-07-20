import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const subProjects = [
    {
      name: "AYNIX POWER",
      classification: "WORKING",
      description: "Fast-charging power banks with intelligent power management",
      classColor: "electric-green"
    },
    {
      name: "AYNIX AIR",
      classification: "WORKING",
      description: "Next-generation mini fans and personal cooling devices",
      classColor: "neon-pink"
    },
    {
      name: "AYNIX OS",
      classification: "WORKING",
      description: "Custom operating system designed for all Aynix devices",
      classColor: "neon-cyan"
    }
  ];

  return (
    <section id="projects" className={`py-24 px-6 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-electric-green mb-4">
            OUR FUTURE PLANS
          </h2>
          <div className="w-24 h-1 gradient-green-pink mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-dark rounded-2xl overflow-hidden hover:neon-glow transition-all duration-500">
            <div className="w-full h-64 bg-gradient-to-br from-electric-green/20 via-transparent to-neon-pink/20 flex items-center justify-center">
              <div className="text-electric-green text-8xl">⚡</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-4">GLOBAL VISION</h3>
              <p className="text-gray-400 mb-6">Mission Status: BUILDING THE FUTURE</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aynix aims to become a global tech powerhouse. We're starting from elite laptops and smart devices, 
                but we dream beyond — into electric cars, wearables, and intelligent ecosystems. Step by step, 
                we're building Pakistan's most futuristic brand.
              </p>
              <div>
                <span className="text-electric-green font-semibold">STATUS: EXPANDING</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {subProjects.map((project, index) => (
              <div 
                key={index}
                className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-orbitron font-bold text-neon-blue">{project.name}</h4>
                  <span className={`text-xs text-${project.classColor} px-3 py-1 bg-${project.classColor}/20 rounded-full`}>
                    {project.classification}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
