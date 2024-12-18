export type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

export type Order = {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  shippingAddress: Address;
  paymentMethod: string;
  totalAmount: number;
  createdAt: Date;
};

export type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
  variantId?: string;
};

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'; 