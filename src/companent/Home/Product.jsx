import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavMessage from "../favs/FavMessage";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/favoriteSlice";
import { addToCart, getCartTotal } from "../../redux/cartSlice";
import Success from './../Success';




const Product = ({ product }) => {

  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();

  const handlefav = () => {
    dispatch(addToFavorite(product))
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1500);
  };

  
  const addBasket = () => {
    dispatch(
      addToCart({
        id: product?.id,
        title: product?.title,
        image: product?.image,
        price: product?.price,
        quantity: product?.quantity,
      })
    );
    dispatch(getCartTotal());
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1500);
  };


  return (
    <div className="w-[400px] p-2 m-2 border rounded-md relative ">
      <i
        className="fas fa-heart absolute top-2 right-2 text-xl cursor-pointer p-1 rounded-full text-red-400"
        onClick={handlefav}
      ></i>
      {showSuccessMessage && <FavMessage/>}
      <img
        onClick={() => navigate(`/products/${product?.id}`)}
        className="w-[200px] h-[200px] object-cover m-auto hover:p-4"
        src={product?.image}
        alt="fotoğraf"
      />
      <div className="flex items-center justify-center text-lg">
        {product?.title}
      </div>
      <div className="text-xl text-gray-500 flex items-center justify-center">
          {product?.price}$
        </div>
      <div className="flex items-center justify-center p-3">
        <button className="w-[200px] h-[40px] border rounded-lg text-lg bg-orange-400 text-white items-center justify-center hover:bg-orange-500"  onClick={() => addBasket()}>
          sepete ekle
        </button> 
        {showSuccessMessage && <Success/>}
      </div>
    </div>
  );
};

export default Product;
