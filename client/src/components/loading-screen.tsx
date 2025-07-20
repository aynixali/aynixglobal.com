import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [currentText, setCurrentText] = useState('');
  const [glitchChars, setGlitchChars] = useState<string[]>([]);
  
  const targetText = 'AYNIX';
  const glitchCharset = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        // Show glitch characters for dramatic effect
        const glitchArray = Array.from({ length: 20 }, () => 
          glitchCharset[Math.floor(Math.random() * glitchCharset.length)]
        );
        setGlitchChars(glitchArray);
        
        // Build up the actual text letter by letter
        setCurrentText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setGlitchChars([]);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Glitch background effect */}
      <div className="absolute inset-0">
        {glitchChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-neon-cyan/20 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>
      
      {/* Main AYNIX animation */}
      <div className="text-center z-10">
        <div className="text-6xl md:text-8xl font-orbitron font-bold text-neon-cyan mb-8 relative">
          <div className="glitch-text" data-text={targetText}>
            {currentText}
            <span className="animate-pulse text-electric-green">|</span>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-neon-cyan rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-electric-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <p className="text-neon-cyan/70 font-light tracking-widest animate-pulse">
          ENGINEERING THE FUTURE
        </p>
      </div>

      {/* Add futuristic sound effect simulation with CSS animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-neon-cyan animate-pulse"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}