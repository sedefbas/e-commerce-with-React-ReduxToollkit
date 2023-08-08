import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeFromCart } from '../redux/cartSlice';
import CartComp from '../companent/card/CartComp';
import { useNavigate } from 'react-router-dom';
import DeleteMessage from './../companent/DeleteMessage';
import Success from './../companent/Success';
import CartTotal from '../companent/card/CartTotal';

const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const { carts } = useSelector((state) => state.carts);
  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleDelete = (cartId) => {
    dispatch(removeFromCart(cartId));
    setShowDeleteMessage(true);
    setTimeout(() => {
      setShowDeleteMessage(false);
    }, 2000); // 
  };

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} onDelete={handleDelete} />
          ))}   <CartTotal/>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="max-w-sm w-full sm:w-96 p-8 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-500 rounded-full">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h1 className="text-xl font-semibold text-gray-800">Sepetiniz Boş</h1>
              <p className="mt-2 text-gray-600">Henüz ürün eklenmemiş.</p>
            </div>
            <div onClick={() => navigate("/")} className="mt-8">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full text-center block">
                Alışverişe Başla
              </a>
            </div>
          </div>
        </div>
      )}
       {showDeleteMessage && <DeleteMessage/>
}
    </div>
  );
};

export default Carts;
