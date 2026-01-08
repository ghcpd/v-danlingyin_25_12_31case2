import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: 'elec-1',
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 79.99,
    rating: 4.5,
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
  },
  {
    id: 'elec-2',
    title: '4K Ultra HD Smart TV 55"',
    category: 'Electronics',
    price: 599.99,
    rating: 4.7,
    description: 'Stunning 4K resolution with HDR support, built-in streaming apps, and voice control. Transform your living room into a home theater.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80'
  },
  {
    id: 'elec-3',
    title: 'Smartphone 128GB',
    category: 'Electronics',
    price: 899.99,
    rating: 4.8,
    description: 'Latest generation smartphone with advanced camera system, fast processor, and all-day battery life. Stay connected in style.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'
  },
  {
    id: 'elec-4',
    title: 'Laptop 15.6" Intel i7',
    category: 'Electronics',
    price: 1299.99,
    rating: 4.6,
    description: 'Powerful laptop with Intel i7 processor, 16GB RAM, 512GB SSD. Perfect for work, gaming, and creative projects.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80'
  },
  {
    id: 'elec-5',
    title: 'Wireless Gaming Mouse',
    category: 'Electronics',
    price: 49.99,
    rating: 4.4,
    description: 'High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons. Dominate your games.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80'
  },
  {
    id: 'elec-6',
    title: 'Mechanical Keyboard RGB',
    category: 'Electronics',
    price: 129.99,
    rating: 4.7,
    description: 'Premium mechanical keyboard with customizable RGB backlighting and tactile switches. Elevate your typing experience.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80'
  },

  // Books
  {
    id: 'book-1',
    title: 'The Art of Computer Programming',
    category: 'Books',
    price: 89.99,
    rating: 4.9,
    description: 'Classic comprehensive guide to computer programming by Donald Knuth. Essential reading for serious programmers.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80'
  },
  {
    id: 'book-2',
    title: 'Clean Code: A Handbook',
    category: 'Books',
    price: 44.99,
    rating: 4.8,
    description: 'Learn to write clean, maintainable code that stands the test of time. A must-read for software developers.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80'
  },
  {
    id: 'book-3',
    title: 'Atomic Habits',
    category: 'Books',
    price: 16.99,
    rating: 4.9,
    description: 'Transform your life with tiny changes that deliver remarkable results. The ultimate guide to habit formation.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80'
  },
  {
    id: 'book-4',
    title: 'The Psychology of Money',
    category: 'Books',
    price: 18.99,
    rating: 4.7,
    description: 'Timeless lessons on wealth, greed, and happiness. Understand how to think about money and make better financial decisions.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&q=80'
  },
  {
    id: 'book-5',
    title: 'Sapiens: A Brief History',
    category: 'Books',
    price: 22.99,
    rating: 4.8,
    description: 'From the evolution of Homo sapiens to the present day. A fascinating exploration of human history.',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80'
  },
  {
    id: 'book-6',
    title: 'Thinking, Fast and Slow',
    category: 'Books',
    price: 19.99,
    rating: 4.6,
    description: 'Nobel Prize winner Daniel Kahneman takes us on a tour of the mind and explains the two systems that drive our thinking.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80'
  },

  // Fashion
  {
    id: 'fashion-1',
    title: 'Classic Leather Jacket',
    category: 'Fashion',
    price: 199.99,
    rating: 4.6,
    description: 'Timeless leather jacket made from premium materials. A wardrobe essential that never goes out of style.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80'
  },
  {
    id: 'fashion-2',
    title: 'Designer Sunglasses',
    category: 'Fashion',
    price: 149.99,
    rating: 4.5,
    description: 'Stylish sunglasses with UV protection and scratch-resistant lenses. Look great while protecting your eyes.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80'
  },
  {
    id: 'fashion-3',
    title: 'Running Shoes - Athletic',
    category: 'Fashion',
    price: 89.99,
    rating: 4.7,
    description: 'Lightweight running shoes with excellent cushioning and support. Perfect for your daily runs and workouts.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'
  },
  {
    id: 'fashion-4',
    title: 'Premium Cotton T-Shirt',
    category: 'Fashion',
    price: 29.99,
    rating: 4.4,
    description: 'Soft, breathable cotton t-shirt available in multiple colors. Comfort meets style for everyday wear.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80'
  },
  {
    id: 'fashion-5',
    title: 'Denim Jeans - Slim Fit',
    category: 'Fashion',
    price: 79.99,
    rating: 4.6,
    description: 'Classic slim-fit denim jeans with stretch comfort. A versatile staple for any wardrobe.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80'
  },
  {
    id: 'fashion-6',
    title: 'Leather Watch - Luxury',
    category: 'Fashion',
    price: 299.99,
    rating: 4.8,
    description: 'Elegant leather watch with precision movement and timeless design. Make every moment count in style.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80'
  },
];

export const categories = ['All', 'Electronics', 'Books', 'Fashion'];
