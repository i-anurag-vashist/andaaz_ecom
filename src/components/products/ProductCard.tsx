
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            <div className="flex items-center">
              <span className="text-amber-500">★</span>
              <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart} 
            className="w-full bg-brand hover:bg-brand-dark"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
