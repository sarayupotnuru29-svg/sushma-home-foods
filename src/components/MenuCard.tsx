import { Plus } from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: { [weight: string]: string };
  image: string;
  category: string;
}

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, weight: string, price: string) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-warm-darker/5 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-warm-darker text-sm md:text-base mb-1 line-clamp-1">{item.name}</h3>
        <p className="text-warm-darker/60 text-[10px] md:text-xs mb-3 line-clamp-2 leading-tight">{item.description}</p>
        
        <div className="mt-auto space-y-2">
          {Object.entries(item.prices).map(([weight, price]) => (
            <div key={weight} className="flex items-center justify-between bg-secondary/30 p-2 rounded-xl border border-warm-darker/5">
              <div className="flex flex-col">
                <span className="text-[9px] text-warm-darker/50 font-medium uppercase">{weight}</span>
                <span className="text-xs md:text-sm font-bold text-primary">{price}</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAddToCart(item, weight, price);
                }}
                className="bg-cta-gradient text-white p-1.5 md:px-3 md:py-1.5 rounded-lg flex items-center gap-1 hover:scale-105 transition-transform"
              >
                <Plus className="w-3 h-3" />
                <span className="text-[10px] font-bold">ADD</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;