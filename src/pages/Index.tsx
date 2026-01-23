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
import Header from "../components/Header"; 
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* 1. Header is fixed at the top */}
      <Header 
        cartItems={cartItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      {/* 2. Main content area with clear section IDs for navigation */}
      <main className="flex flex-col w-full">
        <section id="home" className="w-full">
          <Hero />
        </section>

        <section id="menu" className="w-full">
          <MenuSection onAddToCart={handleAddToCart} />
        </section>

        <section id="services" className="w-full bg-secondary/20">
          <Services />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>

      {/* 3. Footer at the very bottom */}
      <Footer />
      
      {/* 4. Cart Sidebar (only visible when isCartOpen is true) */}
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