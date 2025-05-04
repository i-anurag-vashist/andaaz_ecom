
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreditCard, Truck, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useToast } from "../components/ui/use-toast";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  address: z.string().min(5, "Please enter your complete address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state/province"),
  zipCode: z.string().min(3, "Please enter a valid zip/postal code"),
  paymentMethod: z.enum(["credit_card", "paypal", "apple_pay"]),
  notes: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      paymentMethod: "credit_card",
      notes: "",
    },
  });

  const onSubmit = (values: CheckoutFormValues) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Order Placed!",
        description: "Your order has been successfully placed.",
      });
      
      clearCart();
      navigate("/");
    }, 2000);
  };

  // Redirect if cart is empty
  if (cart.items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some items to your cart before checking out.</p>
        <Button onClick={() => navigate("/products")} className="bg-brand hover:bg-brand-dark">
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="border rounded-lg p-6 space-y-4 bg-background shadow-sm">
            <h2 className="font-medium text-lg">Order Summary</h2>
            <Separator />
            
            <div className="space-y-4 max-h-[400px] overflow-auto pr-2">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-md border flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium line-clamp-1">{item.product.name}</p>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>{item.quantity} × ${item.product.price.toFixed(2)}</span>
                      <span>${(item.quantity * item.product.price).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${(cartTotal * 0.07).toFixed(2)}</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${(cartTotal + 5 + cartTotal * 0.07).toFixed(2)}</span>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Delivery estimate: 3-5 business days</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Checkout Form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-4 space-y-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State/Province</FormLabel>
                          <FormControl>
                            <Input placeholder="NY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip/Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="10001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="credit_card" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                              <CreditCard className="h-4 w-4" />
                              Credit Card
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="paypal" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              PayPal
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="apple_pay" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Apple Pay
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Additional Information</h2>
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Special delivery instructions or comments about your order"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand-dark h-12 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
