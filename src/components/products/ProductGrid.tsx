
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  category?: string;
  searchQuery?: string;
  products?: Product[];
  isLoading?: boolean;
  error?: unknown;
}

const ProductGrid = ({ 
  category, 
  searchQuery, 
  products: passedProducts,
  isLoading: passedLoading,
  error: passedError
}: ProductGridProps) => {
  // Only fetch products if they weren't passed as a prop
  const { data: fetchedProducts, isLoading, error } = useQuery({
    queryKey: ["products", category, searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        return api.searchProducts(searchQuery);
      }
      if (category) {
        return api.getProductsByCategory(category);
      }
      return api.getProducts();
    },
    // Skip query if products were passed as props
    enabled: !passedProducts
  });

  // Use passed products if available, otherwise use fetched products
  const products = passedProducts || fetchedProducts;
  const loading = passedLoading !== undefined ? passedLoading : isLoading;
  const hasError = passedError || error;

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-md p-4 border bg-muted/20 animate-pulse h-[300px]"
          ></div>
        ))}
      </div>
    );
  }

  if (hasError || !products) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Failed to load products. Please try again later.
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No products found. Try different filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
