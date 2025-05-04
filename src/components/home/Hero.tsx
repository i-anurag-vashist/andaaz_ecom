import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop')",
          backgroundPosition: "center 40%",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Shop the Latest Trends
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-in">
            Discover premium products for every need. Quality meets
            affordability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand text-black hover:text-white hover:bg-brand-dark"
            >
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/20"
            >
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
