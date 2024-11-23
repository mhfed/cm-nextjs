"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = 30000; // Phí ship cố định
  const total = subtotal + shipping;

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Tổng đơn hàng</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Tạm tính</p>
          <p className="text-sm font-medium text-gray-900">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(subtotal)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Phí vận chuyển</p>
          <p className="text-sm font-medium text-gray-900">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(shipping)}
          </p>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-900">Tổng cộng</p>
          <p className="text-base font-medium text-gray-900">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(total)}
          </p>
        </div>
      </div>

      <Button className="w-full mt-6">Tiến hành thanh toán</Button>
    </div>
  );
} 