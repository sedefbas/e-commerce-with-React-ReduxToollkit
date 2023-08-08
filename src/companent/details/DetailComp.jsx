import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../redux/cartSlice";


const DetailComp = ({ productsDetails }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  console.log(productsDetails, "productsDetais");

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    // quantity'nin alabileceği maksimum değeri belirleyin (örneğin 10)
    const maxQuantity = 10; // Gereksinimlerinize bağlı olarak bu değeri ayarlayabilirsiniz
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productsDetails?.id,
        title: productsDetails?.title,
        image: productsDetails?.image,
        price: productsDetails?.price,
        quantity: productsDetails?.quantity,
      })
    );
    // Sepete ekleme işlemi sonrasında sepetin toplamını güncelle
    dispatch(getCartTotal());
  };


  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 items-center">
        <div className="m-4">
          <img
            className="h-80 rounded-md bg-gray-200  "
            src={productsDetails?.image}
            alt={productsDetails?.title}
          />
        </div>

        <div className="md:pr-48  ">
          <h2 className="text-3xl font-semibold mb-4">
            {productsDetails?.title}
          </h2>
          <p className="text-gray-600 mb-2 bg-gray-200 p-2 rounded-lg ">
            Kategori: {productsDetails?.category}
          </p>
          <p className="text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg ">
            Fiyat: {productsDetails?.price} TL
          </p>
          <p className="text-gray-700 mb-4 bg-gray-200 p-2 rounded-lg ">
            Değerlendirme: {productsDetails?.rating?.rate}
          </p>
          <p className="text-gray-700 mb-4 bg-gray-200 p-2 rounded-lg">
            {productsDetails?.description}
          </p>

          <div className="flex items-center justify-center text-3xl pb-2 ">
            <div
              onClick={() => decrement()}
              className="w-20 cursor-pointer text-4xl"
            >
              -
            </div>
            <input className=" w-20 text-3xl" type="text" value={quantity} />
            <div onClick={() => increment()} className="cursor-pointer">
              +
            </div>
            <i className="fas fa-heart absolute right-96 mr-6 text-xl cursor-pointer rounded-full text-red-400" ></i>
          </div>
          <div
            onClick={() => addBasket()}
            className=" font-semibold border w-50 h-16 flex items-center justify-center bg-orange-400 rounded-lg text-white cursor-pointer"
          >
            sepete ekle
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
