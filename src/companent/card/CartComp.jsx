import React from "react";
import { clearCart, getCartTotal, removeFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartComp = ({ cart, onDelete }) => {
  const dispatch = useDispatch();
 

  const handleDelete = () => {
    dispatch(removeFromCart(cart.id));
    dispatch(getCartTotal());
    onDelete(); // onDelete prop'u çağrılarak ürünün sepetten silindiğini bildirelim
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div>
        <button
          onClick={handleClear}
          className="absolute top-32 right-48 mt-2 mr-2 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Clear Cart
        </button>

        <div className="flex items-center">
          <img
            src={cart?.image}
            alt="foto"
            className="w-16 h-16 object-cover rounded-lg mr-4"
          />

          <div>
            <div className="text-xl font-semibold">{cart?.title}</div>
            <div className="text-gray-600">{cart?.description}</div>
            <div className="mt-4 flex items-center">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
