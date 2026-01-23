import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
// 1. IMPORT YOUR NEW LOGO HERE
// Make sure your logo file (e.g., logo.png) is in the src/assets folder
import logoImage from "@/assets/favicon.ico"; 

interface HeaderProps {
  cartItems: any[];
  onOpenCart: () => void;
}

const Header = ({ cartItems, onOpenCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-warm-darker shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden shadow-md">
             {/* 2. UPDATE THE SRC HERE */}
             <img 
               src={logoImage} 
               alt="Sushma Foods" 
               className="w-full h-full object-contain" 
             />
          </div>
          <span className="text-white font-display text-lg md:text-xl font-bold">
            Sushma Foods
          </span>
        </div>

        {/* 1. RESTORED DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-white hover:text-primary transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-warm-darker">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* 2. MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* 3. RESTORED MOBILE NAVIGATION OVERLAY */}
      <div 
        className={`fixed inset-0 top-[70px] bg-warm-darker/98 backdrop-blur-xl z-[90] md:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 h-full -mt-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsMenuOpen(false); onOpenCart(); }}
            className="mt-4 bg-cta-gradient px-8 py-3 rounded-full text-white font-bold"
          >
            View Cart ({totalItemsCount})
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;