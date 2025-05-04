import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import { Product } from "../lib/types";
import { api } from "../lib/api";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Collapsible, CollapsibleContent } from "../components/ui/collapsible";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { useCart } from "../hooks/useCart";

const Products = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  // Fetch all products
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: api.getProducts
  });
  
  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const allProducts = await api.getProducts();
      const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
      return uniqueCategories.map(name => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name
      }));
    }
  });
  
  // Apply filters
  useEffect(() => {
    if (!products) return;
    
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category.toLowerCase().replace(/\s+/g, '-'))
      );
    }
    
    // Apply price filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply rating filter
    if (selectedRatings.length > 0) {
      result = result.filter(product => 
        selectedRatings.includes(Math.floor(product.rating))
      );
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, searchQuery, selectedCategories, priceRange, selectedRatings]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedRatings([]);
    setPriceRange([0, 1000]);
  };
  
  // Pagination
  const totalPages = Math.ceil((filteredProducts?.length || 0) / productsPerPage);
  const paginatedProducts = filteredProducts?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">Browse our collection of high-quality products</p>
      </div>
      
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Input
              type="search" 
              placeholder="Search products..." 
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              className="absolute right-0 top-0" 
              type="submit"
              variant="ghost"
            >
              Search
            </Button>
          </div>
        </form>
        
        <Button 
          variant="outline"
          className="flex items-center gap-2 md:w-auto w-full"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Filter className="h-4 w-4" />
          <span className="md:hidden lg:inline">Filters</span>
          {isFiltersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      {/* Filter Panel */}
      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen} className="mb-6">
        <CollapsibleContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 border rounded-md bg-background/50">
            {/* Categories */}
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories?.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Rating */}
            <div>
              <h3 className="font-medium mb-3">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`rating-${rating}`}
                      checked={selectedRatings.includes(rating)}
                      onCheckedChange={() => toggleRating(rating)}
                    />
                    <Label htmlFor={`rating-${rating}`} className="flex">
                      {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                      {Array.from({ length: 5 - rating }).map((_, i) => (
                        <span key={i} className="text-gray-300">☆</span>
                      ))}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="sm" onClick={clearFilters}>Clear All</Button>
            <Button 
              size="sm" 
              className="bg-brand hover:bg-brand-dark"
              onClick={() => setIsFiltersOpen(false)}
            >
              Apply Filters
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      {/* Product Results Summary */}
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        {(searchQuery || selectedCategories.length > 0 || selectedRatings.length > 0 || 
          priceRange[0] > 0 || priceRange[1] < 1000) && ' with applied filters'}
      </div>
      
      {/* Product Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-md p-4 border bg-muted/20 animate-pulse h-[300px]"
            ></div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            Failed to load products. Please try again later.
          </p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            No products found. Try different filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </Button>
            
            {[...Array(totalPages)].map((_, i) => (
              <Button 
                key={i} 
                variant="outline" 
                className={currentPage === i + 1 ? "bg-brand text-white" : ""}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Create a simplified ProductCard component to avoid circular dependencies
const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  
  return (
    <div className="group border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium line-clamp-1 hover:text-brand transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            className="bg-brand hover:bg-brand-dark text-white"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
