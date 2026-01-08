import { Product } from '../types';

export const mockProducts: Product[] = [
  // Electronics
  {
    id: 'elec-001',
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 79.99,
    rating: 4.5,
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design. Features Bluetooth 5.0 connectivity and built-in microphone for calls.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  },
  {
    id: 'elec-002',
    title: 'Smart Watch Pro',
    category: 'Electronics',
    price: 249.99,
    rating: 4.3,
    description: 'Advanced smartwatch with heart rate monitoring, GPS tracking, sleep analysis, and water resistance up to 50 meters. Compatible with iOS and Android devices.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  },
  {
    id: 'elec-003',
    title: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 49.99,
    rating: 4.7,
    description: 'Compact and powerful Bluetooth speaker with 360-degree sound, IPX7 waterproof rating, and 12-hour playtime. Perfect for outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
  },
  {
    id: 'elec-004',
    title: 'Wireless Earbuds',
    category: 'Electronics',
    price: 129.99,
    rating: 4.6,
    description: 'True wireless earbuds with premium sound quality, touch controls, and 24-hour total battery life with charging case. Features sweat and water resistance.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
  },
  {
    id: 'elec-005',
    title: 'USB-C Fast Charger',
    category: 'Electronics',
    price: 29.99,
    rating: 4.4,
    description: '65W USB-C fast charger with GaN technology, compact design, and universal compatibility. Charges laptops, tablets, and phones quickly and safely.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
  },
  {
    id: 'elec-006',
    title: 'Mechanical Gaming Keyboard',
    category: 'Electronics',
    price: 149.99,
    rating: 4.8,
    description: 'RGB mechanical keyboard with Cherry MX switches, programmable macros, and aircraft-grade aluminum frame. N-key rollover and anti-ghosting technology.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop',
  },

  // Books
  {
    id: 'book-001',
    title: 'The Art of Programming',
    category: 'Books',
    price: 34.99,
    rating: 4.9,
    description: 'A comprehensive guide to software development best practices, design patterns, and clean code principles. Essential reading for every developer.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
  },
  {
    id: 'book-002',
    title: 'Data Science Fundamentals',
    category: 'Books',
    price: 44.99,
    rating: 4.6,
    description: 'Learn the core concepts of data science, machine learning, and statistical analysis. Includes hands-on projects and real-world examples.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
  },
  {
    id: 'book-003',
    title: 'Modern JavaScript Mastery',
    category: 'Books',
    price: 29.99,
    rating: 4.7,
    description: 'Master modern JavaScript including ES6+, async programming, and popular frameworks. From beginner to advanced with practical exercises.',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop',
  },
  {
    id: 'book-004',
    title: 'Leadership in Tech',
    category: 'Books',
    price: 24.99,
    rating: 4.4,
    description: 'Insights and strategies for leading technical teams, managing projects, and driving innovation in technology companies.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
  },
  {
    id: 'book-005',
    title: 'Cloud Architecture Handbook',
    category: 'Books',
    price: 54.99,
    rating: 4.8,
    description: 'Complete guide to designing and implementing cloud-native applications. Covers AWS, Azure, and GCP with architectural patterns.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop',
  },
  {
    id: 'book-006',
    title: 'The Creative Mind',
    category: 'Books',
    price: 19.99,
    rating: 4.5,
    description: 'Unlock your creative potential with techniques and exercises designed to boost innovation and problem-solving skills.',
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=400&fit=crop',
  },

  // Fashion
  {
    id: 'fash-001',
    title: 'Classic Denim Jacket',
    category: 'Fashion',
    price: 89.99,
    rating: 4.6,
    description: 'Timeless denim jacket with premium cotton construction, comfortable fit, and versatile styling options. Perfect for layering in any season.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
  },
  {
    id: 'fash-002',
    title: 'Premium Cotton T-Shirt',
    category: 'Fashion',
    price: 29.99,
    rating: 4.3,
    description: 'Soft and breathable cotton t-shirt with a modern fit. Pre-shrunk fabric and reinforced stitching for lasting comfort.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
  },
  {
    id: 'fash-003',
    title: 'Leather Crossbody Bag',
    category: 'Fashion',
    price: 129.99,
    rating: 4.8,
    description: 'Handcrafted genuine leather crossbody bag with adjustable strap, multiple compartments, and elegant hardware. Perfect for daily use.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
  },
  {
    id: 'fash-004',
    title: 'Running Sneakers',
    category: 'Fashion',
    price: 119.99,
    rating: 4.7,
    description: 'Lightweight running sneakers with responsive cushioning, breathable mesh upper, and durable rubber outsole. Designed for comfort and performance.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
  },
  {
    id: 'fash-005',
    title: 'Wool Blend Sweater',
    category: 'Fashion',
    price: 79.99,
    rating: 4.5,
    description: 'Cozy wool blend sweater with ribbed trim, relaxed fit, and premium quality. Machine washable and perfect for cool weather.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
  },
  {
    id: 'fash-006',
    title: 'Designer Sunglasses',
    category: 'Fashion',
    price: 159.99,
    rating: 4.4,
    description: 'Polarized designer sunglasses with UV400 protection, lightweight frame, and classic aviator style. Includes protective case.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === 'All') {
    return mockProducts;
  }
  return mockProducts.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  return ['All', 'Electronics', 'Books', 'Fashion'];
};

export const getFeaturedProductsByCategory = (category: 'Electronics' | 'Books' | 'Fashion', limit: number = 4): Product[] => {
  return mockProducts
    .filter(product => product.category === category)
    .slice(0, limit);
};
