
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../lib/types";
import { Card, CardContent } from "../components/ui/card";


// Placeholder categories - in a real app, these would come from an API
const mockCategories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics"
  },
  {
    id: "clothing",
    name: "Clothing & Apparel",
    slug: "clothing"
  },
  {
    id: "home",
    name: "Home & Kitchen",
    slug: "home"
  },
  {
    id: "books",
    name: "Books & Media",
    slug: "books"
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    slug: "sports"
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    slug: "beauty"
  },
  {
    id: "toys",
    name: "Toys & Games",
    slug: "toys"
  },
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive"
  },
  {
    id: "health",
    name: "Health & Wellness",
    slug: "health"
  },
  {
    id: "grocery",
    name: "Grocery & Food",
    slug: "grocery"
  }
];

// Function to fetch categories - in a real app, this would hit an API endpoint
const fetchCategories = async (): Promise<Category[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategories;
};

const Categories = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16">
        <div className="text-center text-red-500">
          Error loading categories. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-2">Shop by Category</h1>
        <p className="text-muted-foreground">Browse our wide selection of products by category</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories?.map(category => (
          <Link 
            key={category.id} 
            to={`/categories/${category.slug}`}
            className="transition-transform hover:scale-105"
          >
            <Card className="overflow-hidden h-full">
              <div 
                className="h-40 bg-muted bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://source.unsplash.com/300x200/?${category.slug}')` 
                }}
              ></div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Browse all {category.name.toLowerCase()} products
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
