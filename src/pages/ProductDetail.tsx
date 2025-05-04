
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { api } from "../lib/api";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import FeaturedProducts from "../components/home/FeaturedProducts";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.getProductById(id as string),
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching product:", error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-100 animate-pulse rounded-md"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-100 animate-pulse rounded-md w-3/4"></div>
            <div className="h-6 bg-gray-100 animate-pulse rounded-md w-1/2"></div>
            <div className="h-6 bg-gray-100 animate-pulse rounded-md w-1/4"></div>
            <div className="h-24 bg-gray-100 animate-pulse rounded-md"></div>
            <div className="h-10 bg-gray-100 animate-pulse rounded-md w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-md border bg-white flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} rating
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.stock > 0 ? (
                <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                  <Check className="h-4 w-4" />
                  <span>In stock ({product.stock} available)</span>
                </div>
              ) : (
                <div className="mt-2 text-sm text-red-600">Out of stock</div>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => addItem(product)}
                disabled={product.stock === 0}
                className="w-full bg-brand hover:bg-brand-dark"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-1 bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full p-1 bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full p-1 bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm">24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
