import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Cart from "@/components/Cart";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MenuItem } from "@/components/MenuCard";

interface CartItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = useCallback((item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const handleUpdateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) {
      setCartItems((prev) => prev.filter((i) => i.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
      );
    }
  }, []);

  const handleRemoveItem = useCallback((itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  }, []);

  const handleCartToggle = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header cartCount={totalCartItems} onCartClick={handleCartToggle} />
      
      <main>
        <Hero />
        <MenuSection cartItems={cartItems} onAddToCart={handleAddToCart} />
        <Services />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
