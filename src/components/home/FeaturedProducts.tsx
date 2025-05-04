
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Product } from "@/lib/types";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: api.getFeaturedProducts,
  });

  if (isLoading) {
    return (
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-md p-4 border bg-muted/20 animate-pulse h-[300px]"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !products) {
    return (
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <p className="text-center text-muted-foreground">
          Failed to load products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Featured Products
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Handpicked by our experts just for you
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
