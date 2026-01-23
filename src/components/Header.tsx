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
