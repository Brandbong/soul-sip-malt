import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Fig Malt',
    image: 'images/Product/Fig malt3.jpg',
    gallery: [],
    price: '₹399/-',
    rating: 4.8,
    reviews: 156,
    category: 'fruit',
    ingredients: ['Organic Fig', 'Almonds', 'Cashew', 'Jaggery', 'Cardamom', 'Natural Spices'],
    benefits: [
      'Rich in nutrients & fiber',
      'Supports digestion',
      'Strengthens bones',
      'Boosts skin health',
      'Enhances immunity',
      'Natural energy source'
    ],
    usage: 'Mix 1½ tsp with hot milk, stir, and enjoy. Add country sugar if desired. Perfect for breakfast or evening snack.',
    description: 'Premium organic fig blend with traditional spices for natural energy and digestive wellness. Our signature Fig Malt combines the goodness of dried figs with carefully selected nuts and aromatic spices, creating a nutritious drink that supports overall health and vitality.',
    nutritionalFacts: {
      calories: '85 per serving',
      protein: '3.2g',
      carbs: '16.5g',
      fiber: '2.8g',
      vitamins: ['Vitamin A', 'Vitamin K', 'Potassium', 'Calcium', 'Iron']
    }
  },
  {
    id: 2,
    name: 'Banana Flower Malt',
    image: 'images/Product/Bananamalt4.jpg',
    gallery: [],
    price: '₹399/-',
    rating: 4.9,
    reviews: 203,
    category: 'wellness',
    ingredients: ['Banana Flower', 'Cashew', 'Almonds', 'Pistachio', 'Jaggery', 'Cardamom'],
    benefits: [
      'Regulates menstrual cycle',
      'Improves enzyme activity',
      'Controls muscle contractions',
      'Aids digestion & kidney health',
      'Rich in iron and fiber',
      'Supports women\'s wellness'
    ],
    usage: 'Stir 1½ tsp into hot milk for a soothing, nutrient-rich drink. Best consumed daily for optimal women\'s health benefits.',
    description: 'Ancient banana flower remedy crafted specifically for women\'s wellness and hormonal balance. This traditional blend has been used for generations to support women\'s health naturally.',
    nutritionalFacts: {
      calories: '78 per serving',
      protein: '2.8g',
      carbs: '15.2g',
      fiber: '3.5g',
      vitamins: ['Iron', 'Magnesium', 'Vitamin C', 'Folate', 'Potassium']
    }
  },
  {
    id: 3,
    name: 'ABC Malt',
    image: 'images/Product/ABCmalt1.png',
    gallery: [],
    price: '₹399/-',
    rating: 4.7,
    reviews: 189,
    category: 'signature',
    ingredients: ['Apple', 'Beetroot', 'Carrot', 'Almonds', 'Cashew', 'Country Sugar', 'Cardamom'],
    benefits: [
      'Rich in natural energy',
      'Supports blood health',
      'Great for smoothies, kheer, cakes & muffins',
      'Kid-friendly nutrition',
      'Boosts immunity',
      'Improves digestion'
    ],
    usage: 'Mix with hot milk or add into smoothies & baked goods. Perfect for kids\' meals and family recipes.',
    description: 'Apple, Beetroot, Carrot blend perfect for kids and families. This colorful and nutritious mix is versatile for drinks, smoothies, and cooking, making it easy to add nutrition to any meal.',
    nutritionalFacts: {
      calories: '92 per serving',
      protein: '3.5g',
      carbs: '18.8g',
      fiber: '2.2g',
      vitamins: ['Vitamin A', 'Vitamin C', 'Beta Carotene', 'Folate', 'Potassium']
    }
  },
  {
    id: 4,
    name: 'Golden Milk',
    image: 'images/Product/Golidenmilk2.png',
    gallery: [],
    price: '₹399/-',
    rating: 4.6,
    reviews: 134,
    category: 'wellness',
    ingredients: ['Turmeric', 'Saffron', 'Almonds', 'Black Pepper', 'Cardamom', 'Ginger'],
    benefits: [
      'Ancient Ayurvedic immunity booster',
      'Anti-inflammatory properties',
      'Enhances skin glow',
      'Supports relaxation & sleep',
      'Improves joint health',
      'Natural detoxification'
    ],
    usage: 'Mix 1 tsp with hot milk before bedtime for a calming wellness ritual. Can also be enjoyed in the morning for immunity boost.',
    description: 'Premium saffron turmeric blend for immunity and relaxation. This ancient Ayurvedic recipe combines the healing power of turmeric with the luxury of saffron for ultimate wellness.',
    nutritionalFacts: {
      calories: '68 per serving',
      protein: '2.1g',
      carbs: '12.8g',
      fiber: '1.8g',
      vitamins: ['Curcumin', 'Vitamin E', 'Manganese', 'Iron', 'Potassium']
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => 
    product.name.toLowerCase().replace(/\s+/g, '-') === slug
  );
};