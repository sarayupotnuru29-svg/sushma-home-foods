// import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 9553791179",
//       href: "tel:+919553791179",
//     },
//     {
//       icon: Mail,
//       label: "Email",
//       // Use the full email here
//       value: "sushmareddyaluguvelly123@gmail.com",
//       href: "mailto:sushmareddyaluguvelly123@gmail.com",
//     },
//     {
//       icon: MapPin,
//       label: "Address",
//       value: "Home-based (Delivery available)",
//       href: null,
//     },
//   ];

//   const businessHours = [
//     { day: "Mon - Fri", time: "10 AM – 10 PM" },
//     { day: "Sat - Sun", time: "11 AM – 7 PM" },
//   ];

//   const socialLinks = [
//     {
//       name: "sushma_reddy_aluguvelli",
//       url: "https://instagram.com/sushma_reddy_aluguvelli",
//     },
//     {
//       name: "sushma.foods",
//       url: "https://instagram.com/sushma.foods",
//     },
//   ];

//   return (
//     <section id="contact" className="py-12 section-cream">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-8">
//           <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-darker mb-2">
//             Get in <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-warm-darker/70 text-sm max-w-xl mx-auto">
//             Have questions or want to place an order? We'd love to hear from you!
//           </p>
//         </div>

//         {/* Contact Grid */}
//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
//           {/* Left Column: Contact Cards & Socials */}
//           <div className="space-y-4">
//             <div className="grid gap-3">
//               {contactInfo.map((info) => (
//                 <a
//                   key={info.label}
//                   href={info.href || "#"}
//                   className={`flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-warm-light/50 hover-lift transition-all ${
//                     info.href ? "cursor-pointer" : "cursor-default"
//                   }`}
//                 >
//                   <div className="w-11 h-11 rounded-full bg-cta-gradient flex items-center justify-center flex-shrink-0">
//                     <info.icon className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <p className="text-[10px] uppercase tracking-wider text-warm-darker/50 font-bold mb-0.5">
//                       {info.label}
//                     </p>
//                     {/* Updated this p tag to remove truncate and allow wrapping */}
//                     <p className="text-warm-darker text-sm font-medium break-all leading-tight">
//                       {info.value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links - Vertical Stack */}
//             <div className="bg-white rounded-xl p-5 shadow-sm border border-warm-light/50">
//               <p className="text-xs font-bold text-warm-darker/50 uppercase mb-3 tracking-widest">Follow Us</p>
//               <div className="flex flex-col gap-2">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 bg-warm-light/20 text-warm-darker px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all w-full border border-warm-light/30"
//                   >
//                     <Instagram className="w-4 h-4" />
//                     <span className="truncate">@{social.name}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Business Hours & WhatsApp */}
//           <div className="flex flex-col gap-4">
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-light/50 flex-1">
//               <h3 className="font-display text-sm font-bold text-warm-darker mb-5 flex items-center gap-2 uppercase tracking-widest">
//                 <Clock className="w-4 h-4 text-primary" />
//                 Operating Hours
//               </h3>
//               <div className="space-y-3">
//                 {businessHours.map((schedule) => (
//                   <div
//                     key={schedule.day}
//                     className="flex justify-between items-center text-sm py-2 border-b border-warm-light/30 last:border-0"
//                   >
//                     <span className="text-warm-darker/70 font-medium">{schedule.day}</span>
//                     <span className="font-bold text-warm-darker">{schedule.time}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Final CTA Button */}
//             <a
//               href="https://wa.me/919553791179?text=Hi! I would like to place an order."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl p-5 flex items-center justify-center gap-3 font-bold transition-all active:scale-95 shadow-lg group"
//             >
//               <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//               </svg>
//               Place WhatsApp Order
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9553791179",
      href: "tel:+919553791179",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sushmareddyaluguvelly123@gmail.com",
      href: "mailto:sushmareddyaluguvelly123@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Home-based (Delivery available)",
      href: null,
    },
  ];

  const businessHours = [
    { day: "Mon - Fri", time: "10 AM – 10 PM" },
    { day: "Sat - Sun", time: "11 AM – 7 PM" },
  ];

  const socialLinks = [
    {
      name: "sushma_reddy_aluguvelli",
      url: "https://instagram.com/sushma_reddy_aluguvelli",
    },
    {
      name: "sushma.foods",
      url: "https://instagram.com/sushma.foods",
    },
  ];

  return (
    <section id="contact" className="py-12 section-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-darker mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-warm-darker/70 text-sm max-w-xl mx-auto">
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          {/* Left Column: Contact Cards */}
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href || "#"}
                className={`flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-warm-light/50 hover-lift transition-all ${
                  info.href ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-cta-gradient flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-warm-darker/50 font-bold mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-warm-darker text-sm font-medium break-all leading-tight">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Operating Hours & Follow Us */}
          <div className="flex flex-col gap-4">
            {/* Operating Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-light/50">
              <h3 className="font-display text-sm font-bold text-warm-darker mb-5 flex items-center gap-2 uppercase tracking-widest">
                <Clock className="w-4 h-4 text-primary" />
                Operating Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center text-sm py-2 border-b border-warm-light/30 last:border-0"
                  >
                    <span className="text-warm-darker/70 font-medium">{schedule.day}</span>
                    <span className="font-bold text-warm-darker">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us Details - Now positioned under Hours */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-warm-light/50">
              <p className="text-xs font-bold text-warm-darker/50 uppercase mb-3 tracking-widest">Follow Us</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-warm-light/20 text-warm-darker px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all w-full border border-warm-light/30"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="truncate">@{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button - Middle of the page (centered) */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <a
            href="https://wa.me/919553791179?text=Hi! I would like to place an order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-2/3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl p-5 flex items-center justify-center gap-3 font-bold transition-all active:scale-95 shadow-lg group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Place WhatsApp Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;