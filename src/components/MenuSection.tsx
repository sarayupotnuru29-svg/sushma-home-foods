// import { useState } from "react";
// import MenuCard, { MenuItem } from "./MenuCard";

// // Import all food images
// import chickenPicklebone from "@/assets/chicken_pickel.jpg";
// import chickenPickleboneless from "@/assets/Chicken_Pickel_boneless.jpg";
// import chickengongurabone from "@/assets/chicken_gongura_bone.jpg";
// import chickengonguraboneless from "@/assets/chicken_gongura_boneless.webp";
// import muttonPicklebone from "@/assets/mutton_pickel.jpg";
// import muttonPickleboneless from "@/assets/mutton_pickel_boneless.webp";
// import prawnPickle from "@/assets/prawn_pickel.jpg";
// import fishPickle from "@/assets/fish_Pickel.jpg";
// import mangoPickle from "@/assets/mangopickel.jpg";
// import lemonPickle from "@/assets/lemon_Pickel.jpg";
// import tomatoPickle from "@/assets/tomato_Pickel.jpg";
// import amlaPickle from "@/assets/amla_pickel.jpg";
// import kakarkaya from "@/assets/kakarkaya_pickel.jpg";
// import gonguraPickle from "@/assets/gongura_Pickel.jpg";
// import pandumirchiPickle from "@/assets/mandu_mirchi_pickel.jpg";
// import chocolateCookies from "@/assets/chocolate_Cookies.jpg";
// import ragiandoatscookies from "@/assets/ragi_and_oats_cookies.jpg";
// import redvelvetcookies from "@/assets/red_velvet_cookies.jpg";
// import palliladdu from "@/assets/palli_laddu.jpg";
// import nuvulaladdu from "@/assets/nuvula_laddu.jpg";
// import sunundalu from "@/assets/sunundalu.jpg";
// import kajuCookies from "@/assets/kaju_Cookies.jpg";
// import dryFruitsLaddu from "@/assets/dry_fruits_laddu.jpg";
// import palliChikki from "@/assets/palli_chikki.jpg";
// import karivepakuPodi from "@/assets/karivepaku_Podi.jpg";
// import munigakuPodi from "@/assets/munigaku_Podi.jpg";

// interface MenuSectionProps {
//   cartItems: MenuItem[];
//   onAddToCart: (item: MenuItem) => void;
// }

// const menuItems: MenuItem[] = [
//   // Non-Veg Pickles
//   { id: "chicken-bone", name: "Chicken Pickle (Bone)", description: "Spicy chicken with bone in aromatic oil", price: "₹1800/kg", image: chickenPicklebone, category: "Non-Veg Pickles" },
//   { id: "chicken-boneless", name: "Chicken Pickle (Boneless)", description: "Premium boneless chicken in rich spices", price: "₹2200/kg", image: chickenPickleboneless, category: "Non-Veg Pickles" },
//   { id: "chicken-gongura-bone", name: "Chicken Gongura (Bone)", description: "Tangy gongura with chicken pieces", price: "₹1900/kg", image: chickengongurabone, category: "Non-Veg Pickles" },
//   { id: "chicken-gongura-boneless", name: "Chicken Gongura (Boneless)", description: "Boneless chicken in tangy gongura", price: "₹2300/kg", image: chickengonguraboneless, category: "Non-Veg Pickles" },
//   { id: "mutton-bone", name: "Mutton Pickle (Bone)", description: "Tender mutton in traditional spices", price: "₹2200/kg", image: muttonPicklebone, category: "Non-Veg Pickles" },
//   { id: "mutton-boneless", name: "Mutton Pickle (Boneless)", description: "Premium boneless mutton pickle", price: "₹2800/kg", image: muttonPickleboneless, category: "Non-Veg Pickles" },
//   { id: "prawn", name: "Prawn Pickle", description: "Spicy prawns in aromatic oil", price: "₹2000/kg", image: prawnPickle, category: "Non-Veg Pickles" },
//   { id: "fish", name: "Fish Pickle", description: "Crispy fish in tangy spices", price: "₹1500/kg", image: fishPickle, category: "Non-Veg Pickles" },
  
//   // Veg Pickles
//   { id: "tomato", name: "Tomato Pickle", description: "Tangy tomato in traditional style", price: "₹400/kg", image: tomatoPickle, category: "Veg Pickles" },
//   { id: "mango", name: "Mango Pickle", description: "Classic raw mango in mustard oil", price: "₹400/kg", image: mangoPickle, category: "Veg Pickles" },
//   { id: "amla", name: "Amla Pickle", description: "Healthy gooseberry pickle", price: "₹400/kg", image: amlaPickle, category: "Veg Pickles" },
//   { id: "gongura", name: "Gongura Pickle", description: "Tangy sorrel leaves pickle", price: "₹350/kg", image: gonguraPickle, category: "Veg Pickles" },
//   { id: "lemon", name: "Lemon Pickle", description: "Zesty lemon in spiced oil", price: "₹300/kg", image: lemonPickle, category: "Veg Pickles" },
//   { id: "kakarkaya", name: "kakarkaya Pickle", description: "Bold, tangy, and spicy sun-dried bitter gourd", price: "₹300/kg", image: kakarkaya, category: "Veg Pickles" },
//   { id: "pandu-mirchi", name: "Pandu Mirchi Pickle", description: "Spicy red chilli pickle", price: "₹450/kg", image: pandumirchiPickle, category: "Veg Pickles" },
  
//   // Cookies
//   { id: "chocolate-cookies", name: "Chocolate Cookies", description: "Rich chocolate chip cookies", price: "₹350 / 200g", image: chocolateCookies, category: "Cookies" },
//   { id: "kaju-cookies", name: "Kaju Cookies", description: "Buttery cashew cookies", price: "₹350 / 200g", image: kajuCookies, category: "Cookies" },
//   { id: "ragi-oats", name: "Ragi & Oats Cookies", description: "Healthy ragi oats blend", price: "₹300 / 200g", image: ragiandoatscookies, category: "Cookies" },
//   { id: "red-velvet", name: "Red Velvet Cookies", description: "Premium red velvet cookies", price: "₹300 / 200g", image: redvelvetcookies, category: "Cookies" },
  
//   // Laddus & Sweets
//   { id: "dry-fruits-laddu", name: "Dry Fruits Laddu", description: "Nutritious dry fruits laddu", price: "₹300 / 250g", image: dryFruitsLaddu, category: "Laddus & Sweets" },
//   { id: "palli-laddu", name: "Palli Laddu", description: "Traditional peanut laddu", price: "₹160 / 250g", image: palliladdu, category: "Laddus & Sweets" },
//   { id: "nuvvula-laddu", name: "Nuvvula Laddu", description: "Sesame seeds laddu", price: "₹250 / 250g", image: nuvulaladdu, category: "Laddus & Sweets" },
//   { id: "sunnundalu", name: "Sunnundalu", description: "Classic urad dal laddu", price: "₹200 / 250g", image: sunundalu, category: "Laddus & Sweets" },
//   { id: "palli-chikki", name: "Palli Chikki", description: "Crunchy peanut brittle", price: "₹180 / 200g", image: palliChikki, category: "Laddus & Sweets" },
  
//   // Podis
//   { id: "karivepaku-podi", name: "Karivepaku Podi", description: "Aromatic curry leaves powder", price: "₹300/kg", image: karivepakuPodi, category: "Podis" },
//   { id: "munigaku-podi", name: "Munigaku Podi", description: "Nutritious drumstick leaves powder", price: "₹400/kg", image: munigakuPodi, category: "Podis" },
// ];

// const categories = ["All", "Non-Veg Pickles", "Veg Pickles", "Cookies", "Laddus & Sweets", "Podis"];

// const MenuSection = ({ cartItems, onAddToCart }: MenuSectionProps) => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredItems = activeCategory === "All" 
//     ? menuItems 
//     : menuItems.filter(item => item.category === activeCategory);

//   const isInCart = (itemId: string) => cartItems.some(item => item.id === itemId);

//   return (
//     <section id="menu" className="py-20 section-light">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-warm-darker mb-4">
//             Our <span className="text-gradient">Delicious</span> Menu
//           </h2>
//           <p className="text-warm-darker/70 max-w-2xl mx-auto">
//             Discover our mouthwatering assortment of pickles, cookies, and snacks - 
//             all crafted with love from fresh, quality ingredients
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-cta-gradient text-white shadow-glow"
//                   : "bg-white text-warm-darker hover:bg-secondary"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Menu Grid - UPDATED: 2 Columns on Mobile, 3 on Laptop, 4 on large desktops */}
//         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="animate-fade-up"
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <MenuCard
//                 item={item}
//                 isInCart={isInCart(item.id)}
//                 onAddToCart={onAddToCart}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuSection;
import { useState } from "react";
import MenuCard from "./MenuCard";

// Import all food images
import chickenPicklebone from "@/assets/chicken_pickel.jpg";
import chickenPickleboneless from "@/assets/Chicken_Pickel_boneless.jpg";
import chickengongurabone from "@/assets/chicken_gongura_bone.jpg";
import chickengonguraboneless from "@/assets/chicken_gongura_boneless.webp";
import muttonPicklebone from "@/assets/mutton_pickel.jpg";
import muttonPickleboneless from "@/assets/mutton_pickel_boneless.webp";
import prawnPickle from "@/assets/prawn_pickel.jpg";
import fishPickle from "@/assets/fish_Pickel.jpg";
import mangoPickle from "@/assets/mangopickel.jpg";
import lemonPickle from "@/assets/lemon_Pickel.jpg";
import tomatoPickle from "@/assets/tomato_Pickel.jpg";
import amlaPickle from "@/assets/amla_pickel.jpg";
import kakarkaya from "@/assets/kakarkaya_pickel.jpg";
import gonguraPickle from "@/assets/gongura_Pickel.jpg";
import pandumirchiPickle from "@/assets/mandu_mirchi_pickel.jpg";
import chocolateCookies from "@/assets/chocolate_Cookies.jpg";
import ragiandoatscookies from "@/assets/ragi_and_oats_cookies.jpg";
import redvelvetcookies from "@/assets/red_velvet_cookies.jpg";
import palliladdu from "@/assets/palli_laddu.jpg";
import nuvulaladdu from "@/assets/nuvula_laddu.jpg";
import sunundalu from "@/assets/sunundalu.jpg";
import kajuCookies from "@/assets/kaju_Cookies.jpg";
import dryFruitsLaddu from "@/assets/dry_fruits_laddu.jpg";
import palliChikki from "@/assets/palli_chikki.jpg";
import karivepakuPodi from "@/assets/karivepaku_Podi.jpg";
import munigakuPodi from "@/assets/munigaku_Podi.jpg";

interface MenuSectionProps {
  cartItems: any[];
  onAddToCart: (item: any, weight: string, price: string) => void;
}

const menuItems = [
  { id: "chicken-bone", name: "Chicken Pickle (Bone)", description: "Spicy chicken with bone in aromatic oil", prices: { "0.5kg": "₹950", "1kg": "₹1800" }, image: chickenPicklebone, category: "Non-Veg Pickles" },
  { id: "chicken-boneless", name: "Chicken Pickle (Boneless)", description: "Premium boneless chicken in rich spices", prices: { "0.5kg": "₹1150", "1kg": "₹2200" }, image: chickenPickleboneless, category: "Non-Veg Pickles" },
  { id: "chicken-gongura-bone", name: "Chicken Gongura (Bone)", description: "Tangy gongura with chicken pieces", prices: { "0.5kg": "₹1000", "1kg": "₹1900" }, image: chickengongurabone, category: "Non-Veg Pickles" },
  { id: "chicken-gongura-boneless", name: "Chicken Gongura (Boneless)", description: "Boneless chicken in tangy gongura", prices: { "0.5kg": "₹1200", "1kg": "₹2300" }, image: chickengonguraboneless, category: "Non-Veg Pickles" },
  { id: "mutton-bone", name: "Mutton Pickle (Bone)", description: "Tender mutton in traditional spices", prices: { "0.5kg": "₹1150", "1kg": "₹2200" }, image: muttonPicklebone, category: "Non-Veg Pickles" },
  { id: "mutton-boneless", name: "Mutton Pickle (Boneless)", description: "Premium boneless mutton pickle", prices: { "0.5kg": "₹1450", "1kg": "₹2800" }, image: muttonPickleboneless, category: "Non-Veg Pickles" },
  { id: "prawn", name: "Prawn Pickle", description: "Spicy prawns in aromatic oil", prices: { "0.5kg": "₹1050", "1kg": "₹2000" }, image: prawnPickle, category: "Non-Veg Pickles" },
  { id: "fish", name: "Fish Pickle", description: "Crispy fish in tangy spices", prices: { "0.5kg": "₹800", "1kg": "₹1500" }, image: fishPickle, category: "Non-Veg Pickles" },
  { id: "tomato", name: "Tomato Pickle", description: "Tangy tomato in traditional style", prices: { "0.5kg": "₹220", "1kg": "₹400" }, image: tomatoPickle, category: "Veg Pickles" },
  { id: "mango", name: "Mango Pickle", description: "Classic raw mango in mustard oil", prices: { "0.5kg": "₹220", "1kg": "₹400" }, image: mangoPickle, category: "Veg Pickles" },
  { id: "amla", name: "Amla Pickle", description: "Healthy gooseberry pickle", prices: { "0.5kg": "₹220", "1kg": "₹400" }, image: amlaPickle, category: "Veg Pickles" },
  { id: "gongura", name: "Gongura Pickle", description: "Tangy sorrel leaves pickle", prices: { "0.5kg": "₹180", "1kg": "₹350" }, image: gonguraPickle, category: "Veg Pickles" },
  { id: "lemon", name: "Lemon Pickle", description: "Zesty lemon in spiced oil", prices: { "0.5kg": "₹160", "1kg": "₹300" }, image: lemonPickle, category: "Veg Pickles" },
  { id: "kakarkaya", name: "kakarkaya Pickle", description: "Bold and spicy bitter gourd", prices: { "0.5kg": "₹160", "1kg": "₹300" }, image: kakarkaya, category: "Veg Pickles" },
  { id: "pandu-mirchi", name: "Pandu Mirchi Pickle", description: "Spicy red chilli pickle", prices: { "0.5kg": "₹240", "1kg": "₹450" }, image: pandumirchiPickle, category: "Veg Pickles" },
  { id: "chocolate-cookies", name: "Chocolate Cookies", description: "Rich chocolate chip cookies", prices: { "100g": "₹180", "200g": "₹350" }, image: chocolateCookies, category: "Cookies" },
  { id: "kaju-cookies", name: "Kaju Cookies", description: "Buttery cashew cookies", prices: { "100g": "₹180", "200g": "₹350" }, image: kajuCookies, category: "Cookies" },
  { id: "ragi-oats", name: "Ragi & Oats Cookies", description: "Healthy ragi oats blend", prices: { "100g": "₹160", "200g": "₹300" }, image: ragiandoatscookies, category: "Cookies" },
  { id: "red-velvet", name: "Red Velvet Cookies", description: "Premium red velvet cookies", prices: { "100g": "₹160", "200g": "₹300" }, image: redvelvetcookies, category: "Cookies" },
  { id: "dry-fruits-laddu", name: "Dry Fruits Laddu", description: "Nutritious dry fruits laddu", prices: { "250g": "₹300", "500g": "₹580" }, image: dryFruitsLaddu, category: "Laddus & Sweets" },
  { id: "palli-laddu", name: "Palli Laddu", description: "Traditional peanut laddu", prices: { "250g": "₹160", "500g": "₹300" }, image: palliladdu, category: "Laddus & Sweets" },
  { id: "nuvvula-laddu", name: "Nuvvula Laddu", description: "Sesame seeds laddu", prices: { "250g": "₹250", "500g": "₹480" }, image: nuvulaladdu, category: "Laddus & Sweets" },
  { id: "sunnundalu", name: "Sunnundalu", description: "Classic urad dal laddu", prices: { "250g": "₹200", "500g": "₹380" }, image: sunundalu, category: "Laddus & Sweets" },
  { id: "palli-chikki", name: "Palli Chikki", description: "Crunchy peanut brittle", prices: { "200g": "₹180", "500g": "₹420" }, image: palliChikki, category: "Laddus & Sweets" },
  { id: "karivepaku-podi", name: "Karivepaku Podi", description: "Aromatic curry leaves powder", prices: { "0.5kg": "₹160", "1kg": "₹300" }, image: karivepakuPodi, category: "Podis" },
  { id: "munigaku-podi", name: "Munigaku Podi", description: "Nutritious drumstick leaves powder", prices: { "0.5kg": "₹220", "1kg": "₹400" }, image: munigakuPodi, category: "Podis" },
];

const categories = ["All", "Non-Veg Pickles", "Veg Pickles", "Cookies", "Laddus & Sweets", "Podis"];

const MenuSection = ({ cartItems, onAddToCart }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-warm-darker mb-4">
            Our <span className="text-gradient">Delicious</span> Menu
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all ${
                activeCategory === category ? "bg-cta-gradient text-white" : "bg-white text-warm-darker"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;