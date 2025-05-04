
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, User, Package, BookOpen, Mail } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { openCart, cartCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-brand">NexusShop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-brand">
            Home
          </Link>
          <Link
            to="/products"
            className="font-medium transition-colors hover:text-brand flex items-center gap-1"
          >
            <Package className="h-4 w-4" />
            Products
          </Link>
          <Link
            to="/categories"
            className="font-medium transition-colors hover:text-brand"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="font-medium transition-colors hover:text-brand flex items-center gap-1"
          >
            <BookOpen className="h-4 w-4" />
            About
          </Link>
          <Link
            to="/contact"
            className="font-medium transition-colors hover:text-brand flex items-center gap-1"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[200px] lg:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0"
              type="submit"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>

          <Button variant="ghost" size="icon" onClick={openCart}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 pb-6 bg-background">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-medium transition-colors hover:text-brand"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium transition-colors hover:text-brand flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              to="/categories"
              className="font-medium transition-colors hover:text-brand"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="font-medium transition-colors hover:text-brand flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium transition-colors hover:text-brand flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </nav>

          <form onSubmit={handleSearch} className="mt-4 flex gap-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button size="icon" type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
