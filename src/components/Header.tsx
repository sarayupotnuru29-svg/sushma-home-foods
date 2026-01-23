// import { ShoppingCart } from "lucide-react";

// interface HeaderProps {
//   cartItems: any[];
//   onOpenCart: () => void; // New prop to handle the click
// }

// const Header = ({ cartItems, onOpenCart }: HeaderProps) => {
//   const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-darker/90 backdrop-blur-md border-b border-white/5">
//       <div className="container mx-auto px-4 h-20 flex items-center justify-between">
//         {/* Your Logo and Menu Links */}
//         <div className="flex items-center gap-2">
//           <span className="text-white font-display text-xl font-bold">Sushma Foods</span>
//         </div>

//         {/* Trolley Symbol */}
//         <button 
//           onClick={onOpenCart} // FIX: Trigger the open function here
//           className="relative p-2 text-white hover:text-primary transition-colors"
//         >
//           <ShoppingCart className="w-6 h-6" />
//           {totalItemsCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
//               {totalItemsCount}
//             </span>
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartItems: any[];
  onOpenCart: () => void;
}

const Header = ({ cartItems, onOpenCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-warm-darker shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden">
             <img src="/logo.png" alt="Sushma Foods" className="w-full h-full object-contain" />
          </div>
          <span className="text-white font-display text-lg md:text-xl font-bold tracking-tight">
            Sushma Foods
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-white hover:text-primary transition-colors"
            aria-label="Open Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-warm-darker">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - FIXED "Clumsy" Look */}
      <div 
        className={`fixed inset-0 top-[72px] bg-warm-darker/98 backdrop-blur-xl z-[90] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-start pt-12 gap-8 h-full">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-2xl font-display font-bold text-white transition-all duration-300 transform ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10 w-2/3 flex justify-center">
             <button 
               onClick={() => { handleLinkClick(); onOpenCart(); }}
               className="bg-cta-gradient px-8 py-3 rounded-full text-white font-bold shadow-glow"
             >
               View Cart ({totalItemsCount})
             </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;