import { useCart } from "../../hooks/useCart";
import { CartItem as CartItemType } from "../../lib/types";
import { Trash, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";


interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { updateQuantity, removeItem } = useCart();

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleIncrement = () => {
    if (quantity < product.stock) {
      updateQuantity(product.id, quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      {/* Product Image */}
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          ${product.price.toFixed(2)} each
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-r-none"
          onClick={handleDecrement}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <div className="h-8 w-10 flex items-center justify-center border-y">
          {quantity}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-l-none"
          onClick={handleIncrement}
          disabled={quantity >= product.stock}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {/* Price */}
      <div className="w-20 text-right">
        <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => removeItem(product.id)}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
