import { Plus, Check } from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
  isInCart: boolean;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, isInCart, onAddToCart }: MenuCardProps) => {
  return (
    <div className="card-warm group hover-lift flex flex-col h-full max-w-[280px] mx-auto">
      {/* Image - Reduced height from h-48 to h-36 */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content - Reduced padding from p-4 to p-3 */}
      <div className="flex-1 p-3 flex flex-col bg-warm-cream">
        {/* Title - Reduced font size and line height */}
        <h3 className="font-display text-base font-semibold text-warm-darker mb-1 leading-tight">
          {item.name}
        </h3>
        
        {/* Description - Reduced font size and clamped to 2 lines to save space */}
        <p className="text-xs text-warm-darker/70 mb-2 flex-1 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto gap-2">
          {/* Price - Reduced font size */}
          <span className="font-bold text-terracotta text-sm whitespace-nowrap">
            {item.price}
          </span>
          
          {/* Button - Made more compact with smaller padding and text */}
          <button
            onClick={() => onAddToCart(item)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-medium text-[10px] uppercase tracking-wider transition-all duration-300 ${
              isInCart
                ? "bg-forest text-white"
                : "btn-cart"
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3 h-3" />
                Added
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
