import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { MenuItem } from "./MenuCard";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) => {
  
  // FIX: Accurate price extraction to prevent errors like ₹300200
  const getNumericPrice = (priceString: string) => {
    const pricePart = priceString.split('/')[0];
    const numericValue = pricePart.replace(/[^0-9]/g, "");
    return parseInt(numericValue) || 0;
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getNumericPrice(item.price) * item.quantity,
    0
  );

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "919553791179";
    
    // Cleaned formatting to remove the question mark icons in WhatsApp
    const itemsList = cartItems
      .map((item) => `- ${item.name} (x${item.quantity}) - ${item.price}`)
      .join("\n");
    
    const message = `New Order from Sushma Home Foods\n\n${itemsList}\n\nTotal Items: ${totalItemsCount}\nTotal Amount: RS ${totalAmount}\n\nPlease confirm my order. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen && cartItems.length === 0) return null;

  // UPDATED: Floating Cart Bar moved back to the Right Side
  if (!isOpen && cartItems.length > 0) {
    return (
      <div className="fixed bottom-6 right-6 z-40 w-auto animate-fade-in">
        <div 
          className="rounded-2xl p-4 shadow-2xl border border-white/10 bg-warm-darker/90 backdrop-blur-md cursor-pointer flex items-center gap-4" 
          onClick={onClose}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-sm">
                {totalItemsCount}
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-white">₹{totalAmount}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                View Cart
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWhatsAppOrder();
            }}
            className="bg-[#25D366] text-white px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            Order Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 animate-fade-in backdrop-blur-sm" onClick={onClose} />

      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-warm-darker z-50 shadow-2xl animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Your Cart</h2>
            <p className="text-xs text-gray-400">{totalItemsCount} items selected</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Your cart is empty</p>
              <button onClick={onClose} className="mt-4 text-primary font-bold">Browse Menu</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white/5 rounded-2xl p-3 border border-white/5">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-bold text-white text-sm">{item.name}</h3>
                  <p className="text-xs text-primary font-bold mb-2">{item.price}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-black/20 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-xs min-w-[20px] text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} className="text-destructive/80 text-[10px] font-bold uppercase tracking-widest hover:text-destructive">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-white/5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Total Items</span>
                <span>{totalItemsCount}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total Amount</span>
                <span className="text-primary">₹{totalAmount}</span>
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-3 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Cart;
