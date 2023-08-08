import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {

    const { totalAmount } = useSelector((state) => state.carts);
  


  return <div className="bg-gray-200 p-4 mt-2 rounded-lg shadow-md w-[256px] ">
  <div className="relative">
    
    <span className="block font-bold">
    Sepet toplamı: {totalAmount}$
    </span>
  </div>
</div>
};

export default CartTotal;
