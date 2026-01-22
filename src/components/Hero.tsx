import logo from "@/assets/favicon.svg";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Homemade pickles and snacks"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-darker via-warm-darker/80 to-warm-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={logo}
            alt="Sushma Home Foods"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full shadow-glow object-cover"
          />
        </div>

        {/* Brand Name */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient">Sushma</span>
          <span className="text-foreground"> Home Foods</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Authentic Homemade Pickles, Cookies & Snacks
          <br />
          <span className="text-golden">Made with Love, Served with Trust</span>
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#menu"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Explore Menu
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Features */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: "🏠", text: "100% Homemade" },
            { icon: "🌿", text: "Fresh Ingredients" },
            { icon: "❤️", text: "Made with Love" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-muted-foreground"
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
