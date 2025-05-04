
import { Product, Category } from './types';

// Mock data for demonstration
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise cancelling wireless headphones with high-fidelity sound and 30-hour battery life.',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop',
    rating: 4.7,
    stock: 25,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with heart rate monitoring, GPS, and a bright AMOLED display.',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop',
    rating: 4.5,
    stock: 18,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with RFID protection and multiple card slots.',
    price: 49.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1517254797898-6532a461a934?q=80&w=500&auto=format&fit=crop',
    rating: 4.2,
    stock: 50,
    isFeatured: false
  },
  {
    id: '4',
    name: 'Premium Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 129.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=500&auto=format&fit=crop',
    rating: 4.8,
    stock: 12,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Fitness Tracker',
    description: 'Water-resistant fitness tracker with heart rate monitor and sleep analysis.',
    price: 79.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd1b0?q=80&w=500&auto=format&fit=crop',
    rating: 4.4,
    stock: 35,
    isFeatured: false
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof bluetooth speaker with 24-hour battery life and deep bass.',
    price: 89.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=500&auto=format&fit=crop',
    rating: 4.3,
    stock: 20,
    isFeatured: true
  },
  {
    id: '7',
    name: 'Stainless Steel Water Bottle',
    description: 'Vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=500&auto=format&fit=crop',
    rating: 4.6,
    stock: 45,
    isFeatured: false
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh back.',
    price: 249.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=500&auto=format&fit=crop',
    rating: 4.9,
    stock: 8,
    isFeatured: true
  }
];

const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Accessories', slug: 'accessories' },
  { id: '3', name: 'Home & Kitchen', slug: 'home' },
  { id: '4', name: 'Furniture', slug: 'furniture' }
];

// Mock API functions with 300ms delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Product API
  getProducts: async (): Promise<Product[]> => {
    await delay(300);
    return MOCK_PRODUCTS;
  },
  
  getFeaturedProducts: async (): Promise<Product[]> => {
    await delay(300);
    return MOCK_PRODUCTS.filter(product => product.isFeatured);
  },
  
  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(300);
    return MOCK_PRODUCTS.find(product => product.id === id);
  },
  
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await delay(300);
    return MOCK_PRODUCTS.filter(product => product.category === category);
  },
  
  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(300);
    return MOCK_PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) || 
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  },
  
  // Category API
  getCategories: async (): Promise<Category[]> => {
    await delay(300);
    return MOCK_CATEGORIES;
  }
};
