import { CartList } from "@components/cart/cart-list";
import { CartSummary } from "@components/cart/cart-summary";
import { Container } from "@components/ui/container";

export default function CartPage() {
  return (
    <Container className="py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Giỏ hàng của bạn
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7">
            <CartList />
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <CartSummary />
          </div>
        </div>
      </div>
    </Container>
  );
}
