// "use client";

// import { useCart } from "@/hooks/use-cart";
// // import { CartItem } from "@/components/shared/cart-item";

// export function CartList() {
//   const { items, removeItem } = useCart();

//   if (items.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-gray-500">Your cart is empty</p>
//       </div>
//     );
//   }

//   return (
//     <ul className="divide-y divide-gray-200">
//       {items.map((item) => (
//         <CartItem
//           key={item.id}
//           item={item}
//           onRemove={() => removeItem(item.id)}
//         />
//       ))}
//     </ul>
//   );
// }
