'use client';
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore"
import { getPriceFormatted } from "@/util/productUtil";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const SummaryCheckout = () => {
  const { products } = useCartStore();
  const { formState: { isSubmitting } } = useFormContext();
  
  const total = products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  
  return (
    <div className="w-full lg:max-w-sm bg-gray-50 rounded-xl p-6 h-fit shrink-0">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

      <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
        {products.map(({ id, imageLink, price, quantity, name }) => (
          <div
            key={id}
            className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
          >
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src={imageLink}
                alt={name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{name}</p>
              <p className="text-sm text-gray-500">
                {quantity} × {getPriceFormatted(price)}
              </p>
            </div>
            <div className="font-semibold text-gray-900 shrink-0">
              {getPriceFormatted(price * quantity)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-4">
        <span className="text-gray-900">Total</span>
        <span className="text-gray-900">{getPriceFormatted(total)}</span>
      </div>

      <Button
        type="submit"
        form="form-checkout"
        disabled={products.length === 0 || isSubmitting}
        className="mt-6 h-12 w-full text-lg bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Creating order..." : "Create order as a host"}
      </Button>
    </div>
  );
};

export default SummaryCheckout;
