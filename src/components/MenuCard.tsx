// import { Plus, Check } from "lucide-react";

// export interface MenuItem {
//   id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
//   category: string;
// }

// interface MenuCardProps {
//   item: MenuItem;
//   isInCart: boolean;
//   onAddToCart: (item: MenuItem) => void;
// }

// const MenuCard = ({ item, isInCart, onAddToCart }: MenuCardProps) => {
//   return (
//     <div className="card-warm group hover-lift flex flex-col h-full max-w-[280px] mx-auto">
//       {/* Image - Reduced height from h-48 to h-36 */}
//       <div className="relative h-36 overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-warm-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Content - Reduced padding from p-4 to p-3 */}
//       <div className="flex-1 p-3 flex flex-col bg-warm-cream">
//         {/* Title - Reduced font size and line height */}
//         <h3 className="font-display text-base font-semibold text-warm-darker mb-1 leading-tight">
//           {item.name}
//         </h3>
        
//         {/* Description - Reduced font size and clamped to 2 lines to save space */}
//         <p className="text-xs text-warm-darker/70 mb-2 flex-1 line-clamp-2">
//           {item.description}
//         </p>
        
//         <div className="flex items-center justify-between mt-auto gap-2">
//           {/* Price - Reduced font size */}
//           <span className="font-bold text-terracotta text-sm whitespace-nowrap">
//             {item.price}
//           </span>
          
//           {/* Button - Made more compact with smaller padding and text */}
//           <button
//             onClick={() => onAddToCart(item)}
//             className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-medium text-[10px] uppercase tracking-wider transition-all duration-300 ${
//               isInCart
//                 ? "bg-forest text-white"
//                 : "btn-cart"
//             }`}
//           >
//             {isInCart ? (
//               <>
//                 <Check className="w-3 h-3" />
//                 Added
//               </>
//             ) : (
//               <>
//                 <Plus className="w-3 h-3" />
//                 Add
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCard;
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
                onClick={() => onAddToCart(item, weight, price)}
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