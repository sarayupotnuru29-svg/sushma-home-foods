// const services = [
//   {
//     icon: "🍗",
//     title: "Non-Veg Pickles",
//     description: "Premium chicken, mutton, prawn & fish pickles",
//     color: "from-deep-red to-terracotta",
//   },
//   {
//     icon: "🥭",
//     title: "Veg Pickles",
//     description: "Traditional mango, lemon, gongura & more",
//     color: "from-golden to-golden-light",
//   },
//   {
//     icon: "🍪",
//     title: "Cookies",
//     description: "Homemade chocolate, kaju & healthy cookies",
//     color: "from-terracotta to-golden",
//   },
//   {
//     icon: "🍬",
//     title: "Laddus & Sweets",
//     description: "Dry fruits laddus, chikkis & traditional sweets",
//     color: "from-golden-light to-golden",
//   },
//   {
//     icon: "🌶️",
//     title: "Podis",
//     description: "Aromatic curry leaves & drumstick powders",
//     color: "from-forest to-golden",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 section-warm">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             What We <span className="text-gradient">Offer</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             From tangy pickles to sweet treats, discover our range of authentic homemade delicacies
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               className="group relative bg-warm-medium rounded-2xl p-6 text-center hover-lift cursor-pointer overflow-hidden"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Gradient Background on Hover */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
//               />
              
//               {/* Icon */}
//               <div className="relative text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
              
//               {/* Content */}
//               <h3 className="relative font-display text-lg font-semibold text-foreground mb-2">
//                 {service.title}
//               </h3>
//               <p className="relative text-sm text-muted-foreground">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Quality Promise */}
//         <div className="mt-16 bg-warm-dark rounded-3xl p-8 md:p-12">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
//                 Our Commitment to <span className="text-gradient">Quality</span>
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 We prioritize sustainable sourcing and high-quality ingredients to ensure 
//                 that every jar of our pickles delivers a fresh, flavorful experience while 
//                 respecting our planet's resources.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "100% Natural Ingredients",
//                   "No Artificial Preservatives",
//                   "Traditional Recipes",
//                   "Freshly Made to Order",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center gap-3 text-foreground">
//                     <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs">
//                       ✓
//                     </span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-golden/20 rounded-2xl blur-3xl" />
//               <div className="relative grid grid-cols-2 gap-4">
//                 {["🌿", "🍯", "🏺", "❤️"].map((emoji, index) => (
//                   <div
//                     key={index}
//                     className="aspect-square bg-warm-medium rounded-2xl flex items-center justify-center text-4xl animate-float"
//                     style={{ animationDelay: `${index * 0.5}s` }}
//                   >
//                     {emoji}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { Drumstick, Leaf, Cookie, Candy, Flame, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Drumstick className="w-8 h-8" />,
    title: "Non-Veg Pickles",
    description: "Premium chicken, mutton, prawn & fish pickles",
    color: "from-red-500 to-orange-700",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-500"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Veg Pickles",
    description: "Traditional mango, lemon, gongura & more",
    color: "from-yellow-500 to-yellow-200",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-600"
  },
  {
    icon: <Cookie className="w-8 h-8" />,
    title: "Cookies",
    description: "Homemade chocolate, kaju & healthy cookies",
    color: "from-orange-400 to-yellow-600",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-600"
  },
  {
    icon: <Candy className="w-8 h-8" />,
    title: "Laddus & Sweets",
    description: "Dry fruits laddus, chikkis & traditional sweets",
    color: "from-pink-400 to-orange-400",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-600"
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Podis",
    description: "Aromatic curry leaves & drumstick powders",
    color: "from-green-600 to-yellow-500",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-600"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#1a1614]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From tangy pickles to sweet treats, discover our range of authentic homemade delicacies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/5 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 border border-white/5 hover:border-orange-500/30"
            >
              {/* Icon Container */}
              <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl ${service.iconBg} flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
                {/* Subtle Glow */}
                <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity ${service.iconBg}`} />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-24 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] p-8 md:p-16 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Our Commitment to <span className="text-orange-500">Quality</span>
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                We prioritize sustainable sourcing and high-quality ingredients to ensure 
                that every jar of our pickles delivers a fresh, flavorful experience.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "100% Natural Ingredients",
                  "No Artificial Preservatives",
                  "Traditional Recipes",
                  "Freshly Made to Order",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* Visual element instead of floating emojis */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex items-center justify-center">
                   <div className="text-center">
                      <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
                      <div className="text-white font-medium uppercase tracking-widest text-sm">Homemade</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;