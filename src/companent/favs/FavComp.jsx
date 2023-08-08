import React from "react";
import {
  clearFavorites,
  getFavorite,
  removeFromFavorite,
} from "../../redux/favoriteSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteMessage from "./../DeleteMessage";
import { useEffect } from "react";

const FavComp = ({ fav, onDelete }) => {
  const dispatch = useDispatch();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const handleRemove = () => {
    onDelete();
    console.log("tıklandi");
  };

  const handleClear = () => {
    dispatch(clearFavorites());
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-200 p-4 rounded-lg shadow-md mt-2">
        <button
          onClick={handleClear}
          className="absolute top-32 right-48 mt-2 mr-2 px-4 py-2 bg-blue-300 text-white rounded-lg text-ms font-semibold"
        >
          hepsini temizle
        </button>

        <div className="flex items-center">
          <img
            src={fav?.image}
            alt="foto"
            className="w-24 h-30 object-cover rounded-lg mr-4"
          />

          <div>
            <div className="text-xl font-semibold ">{fav?.title}</div>
            <div className="text-gray-600">
              {fav?.description && fav.description.length > 50
                ? fav.description.substring(0, 100) + "..."
                : fav.description}
            </div>
            <div className="mt-4 flex items-center">
              <button
                onClick={handleRemove}
                className="px-4 py-2 bg-blue-200 text-gray-500 rounded-lg mr-2 text-ms font-semibold"
              >
                favori ürün sil
              </button>
              <svg
                className="mt-6"
                fill="#FFD700"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.413l1.306 4.007h4.22l-3.397 2.47 1.303 4.007-3.397-2.472-3.394 2.472 1.304-4.007-3.396-2.47h4.22z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavComp;
