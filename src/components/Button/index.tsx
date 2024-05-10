"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

interface ButtonProps {
  productId: string;
}
export default function Button({ productId }: ButtonProps) {
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] = useState<Boolean>(false);
  const router = useRouter();
  async function handleBuyProduct() {
    
    try {
      setIsCreatingCheckoutSection(true);
      const response = await axios.post("/api", {
        priceId: productId,
      });
      const checkoutUrl = response.data;
      router.push(checkoutUrl);
    } catch (error) {
      setIsCreatingCheckoutSection(false);
      alert("Falha ao conectar ao checkout!");
    }
  }
  return (
    <button
      onClick={handleBuyProduct}

      className={`mt-auto bg-green-500 border-0 text-white rounded-lg p-5 cursor-pointer bold text-base  ${isCreatingCheckoutSection? "opacity-60 cursor-not-allowed":"hover:bg-green-300" } `}
    >
      Comprar Agora
    </button>
  );
}
