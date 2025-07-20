import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className={`py-24 px-6 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-pink mb-4">
            CONNECT WITH US
          </h2>
          <div className="w-24 h-1 gradient-pink-cyan mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to experience the future of technology? Connect with Pakistan's most futuristic brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="glass-dark rounded-xl p-8 text-center">
            <div className="text-electric-green text-4xl mb-4">📧</div>
            <h4 className="font-orbitron font-bold text-neon-cyan mb-2 text-xl">EMAIL</h4>
            <p className="text-gray-300 text-lg">aynixofficial@gmail.com</p>
          </div>
          <div className="glass-dark rounded-xl p-8 text-center">
            <div className="text-neon-pink text-4xl mb-4">📍</div>
            <h4 className="font-orbitron font-bold text-neon-cyan mb-2 text-xl">LOCATION</h4>
            <p className="text-gray-300 text-lg">Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
