// import { useState } from "react";
// import Navbar from "../components/Header"; // Adjust based on your Header.tsx name
// import Hero from "../components/Hero";
// import MenuSection from "../components/MenuSection";
// import Cart from "../components/Cart";
// import { toast } from "sonner";

// const Index = () => {
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleAddToCart = (item: any, weight: string, price: string) => {
//     const cartId = `${item.id}-${weight}`;
    
//     const newItem = {
//       ...item,
//       id: cartId,
//       name: `${item.name} (${weight})`,
//       price: price,
//       quantity: 1
//     };

//     setCartItems((prev) => {
//       const exists = prev.find(i => i.id === cartId);
//       if (exists) {
//         return prev.map(i => i.id === cartId ? { ...i, quantity: i.quantity + 1 } : i);
//       }
//       return [...prev, newItem];
//     });

//     toast.success(`Added ${item.name} (${weight}) to cart!`);
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar cartItems={cartItems} onOpenCart={() => setIsCartOpen(true)} />
//       <Hero />
//       <MenuSection onAddToCart={handleAddToCart} />
//       {/* Add other components like Services, Contact, Footer here */}
//       <Cart 
//         isOpen={isCartOpen} 
//         onClose={() => setIsCartOpen(false)} 
//         cartItems={cartItems}
//         onUpdateQuantity={(id, q) => {/* add logic */}}
//         onRemoveItem={(id) => {/* add logic */}}
//       />
//     </div>
//   );
// };

// export default Index;
import { useState } from "react";
import Header from "../components/Header"; // This is your 'trolley' component
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Cart from "../components/Cart";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Controls the cart visibility

  const handleAddToCart = (item: any, weight: string, price: string) => {
    const cartId = `${item.id}-${weight}`;
    const newItem = {
      ...item,
      id: cartId,
      name: `${item.name} (${weight})`,
      price: price,
      quantity: 1
    };

    setCartItems((prev) => {
      const exists = prev.find(i => i.id === cartId);
      if (exists) {
        return prev.map(i => i.id === cartId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, newItem];
    });

    toast.success(`Added ${item.name} (${weight}) to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* IMPORTANT: Pass setIsCartOpen(true) to the Header 
        so the trolley icon can open the list
      */}
      <Header 
        cartItems={cartItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      <MenuSection onAddToCart={handleAddToCart} />
      
      {/* This is the actual Cart drawer that shows the list and total 
      */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={(id, q) => {
          setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: Math.max(0, q) } : item
          ).filter(item => item.quantity > 0));
        }}
        onRemoveItem={(id) => {
          setCartItems(prev => prev.filter(item => item.id !== id));
        }}
      />
    </div>
  );
};

export default Index;