export interface Product {
  id: number;
  name: string;
  image: string;
  gallery?: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  category: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  description: string;
  nutritionalFacts?: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
    vitamins: string[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface WishlistItem {
  id: number;
  productId: number;
  userId: string;
  product: Product;
}