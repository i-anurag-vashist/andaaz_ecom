import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductGrid from "../components/products/ProductGrid";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const Index = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      <section className="container py-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Shop All Products</h2>
          <p className="text-muted-foreground max-w-2xl">
            Browse our complete catalog of high-quality products at competitive prices
          </p>
        </div>
        
        <ProductGrid />
        
        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-brand hover:bg-brand-dark">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </section>
      
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Shop With Us</h2>
            <p className="text-muted-foreground max-w-2xl">
              We pride ourselves on exceptional service and value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-brand/10 text-brand w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Quality Products</h3>
              <p className="text-muted-foreground">
                We source only the highest quality products from trusted manufacturers.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-brand/10 text-brand w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your orders quickly with our expedited shipping options.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-brand/10 text-brand w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Your transactions are protected with industry-leading security.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container py-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl">
            Subscribe to get updates on new products and special offers
          </p>
        </div>
        
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <Button type="submit" className="bg-brand hover:bg-brand-dark">
            Subscribe
          </Button>
        </form>
      </section>
      
      <Separator />
      
      <footer className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NexusShop</h3>
            <p className="text-muted-foreground">
              Your one-stop shop for quality products at affordable prices.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-brand">All Products</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-brand">Categories</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-brand">Deals & Discounts</Link></li>
              <li><Link to="/new" className="text-muted-foreground hover:text-brand">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-brand">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-brand">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-brand">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-brand">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-brand">Our Story</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-brand">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-brand">Careers</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-brand">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NexusShop. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
