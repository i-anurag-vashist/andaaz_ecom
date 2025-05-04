

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "../ui/sheet";
import CartItem from "./CartItem";
import { X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/useCart";
import { Separator } from "../ui/separator";

const Cart = () => {
  const { cart, closeCart, cartTotal, clearCart, cartCount } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };
  
  return (
    <Sheet open={cart.isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="px-1">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Your Cart</span>
              <span className="ml-2 text-sm text-muted-foreground">
                ({cartCount} {cartCount === 1 ? "item" : "items"})
              </span>
            </SheetTitle>
            <SheetClose className="rounded-full p-1 hover:bg-secondary">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
        </SheetHeader>
        <Separator className="my-4" />
        {cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
            <div className="rounded-full bg-secondary p-6">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-muted-foreground mt-1">
                Add items to your cart to see them here.
              </p>
            </div>
            <SheetClose asChild>
              <Button asChild className="bg-brand hover:bg-brand-dark">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-2">
              {cart.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="space-y-4 pt-4">
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <SheetFooter className="flex-col gap-2 sm:flex-col">
                <Button 
                  className="w-full bg-brand hover:bg-brand-dark"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <div className="flex justify-between w-full gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" className="flex-1">
                      Continue Shopping
                    </Button>
                  </SheetClose>
                  <Button
                    variant="outline" 
                    className="flex-1"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
