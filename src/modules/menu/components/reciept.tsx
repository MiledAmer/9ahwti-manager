import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Coffee, ShoppingCart, Trash2 } from "lucide-react";
import type { CartItem } from "../types";

export default function Reciept({
  cart,
  itemCount,
  total,
  removeFromCart,
  updateQuantity,
  clearCart,
}: {
  cart: CartItem[];
  itemCount: number;
  total: number;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}) {
  return (
    <div className="bg-card border-border order-2 flex max-h-96 w-full flex-col border-t lg:order-2 lg:max-h-none lg:w-80 lg:border-t-0 lg:border-l">
      <div className="border-border border-b p-4 lg:p-6">
        <div className="mb-4 flex items-center gap-2">
          <Coffee className="text-primary h-6 w-6" />
          <h1 className="text-xl font-bold text-balance">Café POS</h1>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Current Order</h2>
          <Badge variant="secondary" className="flex items-center gap-1">
            <ShoppingCart className="h-3 w-3" />
            {itemCount}
          </Badge>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="text-muted-foreground py-8 text-center">
            <ShoppingCart className="mx-auto mb-3 h-12 w-12 opacity-50" />
            <p className="text-sm">No items selected</p>
            <p className="text-xs">Add items from the menu</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <Card key={item.id} className="p-3">
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-muted-foreground text-xs">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive h-6 w-6 p-0"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-6 w-6 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-6 w-6 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="text-sm font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-border bg-muted/30 border-t p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Tax (8.5%)</span>
              <span className="font-medium">${(total * 0.085).toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-bold">
                ${(total * 1.085).toFixed(2)}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={clearCart}
                className="flex-1 bg-transparent"
              >
                Clear
              </Button>
              <Button className="flex-1">Confirm Order</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
