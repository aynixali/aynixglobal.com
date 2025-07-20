export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-4">AYNIX</div>
        <p className="text-gray-500 mb-6">Engineering the Elite Future of Technology • Pakistan's Most Futuristic Brand</p>
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
            TERMS
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
            PRIVACY
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
            PRODUCTS
          </a>
        </div>
        <p className="text-gray-600 text-sm mb-4">© 2025 AYNIX. All rights reserved. Unauthorized access is prohibited.</p>
        <p className="text-neon-cyan text-sm font-semibold">CEO Ali Yahya - Co-Founder of Aynix </p>
      </div>
    </footer>
  );
}
