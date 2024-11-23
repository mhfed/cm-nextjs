"use client";

import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export function CartList() {
  const { items, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">Giỏ hàng của bạn đang trống</p>
      </div>
    );
  }

  return (
    <ul role="list" className="divide-y divide-gray-200 border-b border-t">
      {items.map((item) => (
        <li key={item.id} className="flex py-6">
          <div className="flex-shrink-0">
            <div className="relative h-24 w-24">
              <Image
                fill
                src={item.image}
                alt={item.name}
                className="object-cover object-center rounded-md"
              />
            </div>
          </div>

          <div className="ml-4 flex flex-1 flex-col sm:ml-6">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium text-gray-700">{item.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{item.variant}</p>
              </div>
              <Button
                onClick={() => removeItem(item.id)}
                variant="ghost"
                size="icon"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-20"
                />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price * item.quantity)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
} 