// import { useState, useEffect } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";
// import logo from "@/assets/favicon.svg";

// interface HeaderProps {
//   cartCount: number;
//   onCartClick: () => void;
// }

// const Header = ({ cartCount, onCartClick }: HeaderProps) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#menu", label: "Menu" },
//     { href: "#services", label: "Services" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-warm-darker/95 backdrop-blur-md shadow-warm py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-2">
//           <img 
//             src={logo} 
//             alt="Sushma Foods Logo" 
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-glow"
//           />
//           <span className="font-display text-xl md:text-2xl font-bold text-gradient">
//             Sushma Foods
//           </span>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Cart & Mobile Menu */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={onCartClick}
//             className="relative p-2 rounded-full bg-warm-medium hover:bg-primary transition-colors duration-200"
//           >
//             <ShoppingCart className="w-5 h-5" />
//             {cartCount > 0 && (
//               <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
//                 {cartCount}
//               </span>
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 rounded-full bg-warm-medium hover:bg-primary transition-colors duration-200"
//           >
//             {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <nav className="md:hidden absolute top-full left-0 right-0 bg-warm-darker/98 backdrop-blur-md border-t border-border animate-fade-in">
//           <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartItems: any[];
  onOpenCart: () => void; // New prop to handle the click
}

const Header = ({ cartItems, onOpenCart }: HeaderProps) => {
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-darker/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Your Logo and Menu Links */}
        <div className="flex items-center gap-2">
          <span className="text-white font-display text-xl font-bold">Sushma Foods</span>
        </div>

        {/* Trolley Symbol */}
        <button 
          onClick={onOpenCart} // FIX: Trigger the open function here
          className="relative p-2 text-white hover:text-primary transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;