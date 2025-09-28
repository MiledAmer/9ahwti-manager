export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
};

export interface CartItem extends MenuItem {
  quantity: number;
}
