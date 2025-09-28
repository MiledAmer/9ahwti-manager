"use client";

import { useState } from "react";
import Header from "../../modules/menu/components/header";
import Menu from "@/modules/menu/components/menu";
import Reciept from "@/modules/menu/components/reciept";
import type { CartItem, MenuItem } from "@/modules/menu/types";

const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "1",
    name: "Espresso",
    price: 2.5,
    category: "Coffee",
    description: "Rich and bold",
  },
  {
    id: "2",
    name: "Americano",
    price: 3.0,
    category: "Coffee",
    description: "Smooth and classic",
  },
  {
    id: "3",
    name: "Cappuccino",
    price: 4.0,
    category: "Coffee",
    description: "Creamy foam perfection",
  },
  {
    id: "4",
    name: "Latte",
    price: 4.5,
    category: "Coffee",
    description: "Silky steamed milk",
  },
  {
    id: "5",
    name: "Mocha",
    price: 5.0,
    category: "Coffee",
    description: "Chocolate indulgence",
  },
  {
    id: "6",
    name: "Macchiato",
    price: 4.25,
    category: "Coffee",
    description: "Marked with foam",
  },

  // Cold Drinks
  {
    id: "7",
    name: "Iced Coffee",
    price: 3.5,
    category: "Cold Drinks",
    description: "Refreshing and cool",
  },
  {
    id: "8",
    name: "Cold Brew",
    price: 4.0,
    category: "Cold Drinks",
    description: "Smooth cold extraction",
  },
  {
    id: "9",
    name: "Frappuccino",
    price: 5.5,
    category: "Cold Drinks",
    description: "Blended perfection",
  },
  {
    id: "10",
    name: "Iced Tea",
    price: 2.75,
    category: "Cold Drinks",
    description: "Fresh and crisp",
  },

  // Pastries
  {
    id: "11",
    name: "Croissant",
    price: 3.25,
    category: "Pastries",
    description: "Buttery and flaky",
  },
  {
    id: "12",
    name: "Muffin",
    price: 2.75,
    category: "Pastries",
    description: "Fresh baked daily",
  },
  {
    id: "13",
    name: "Danish",
    price: 3.5,
    category: "Pastries",
    description: "Sweet and delicate",
  },
  {
    id: "14",
    name: "Bagel",
    price: 2.5,
    category: "Pastries",
    description: "Toasted to perfection",
  },
];

const categories = ["Coffee", "Cold Drinks", "Pastries"];

export default function CoffeeMenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Coffee");

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Menu Content - Now first on mobile, left on desktop */}
        <div className="order-1 flex flex-1 flex-col lg:order-1">
          {/* Header */}
          <Header
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Menu Items Grid */}
          <Menu addToCart={addToCart} filteredItems={filteredItems} />
        </div>

        <Reciept
          cart={cart}
          itemCount={itemCount}
          total={total}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </div>
    </div>
  );
}
