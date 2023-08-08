import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FILTER_BY_SEARCH } from "../../../redux/filterSlice";


const NavbarRight = () => {
  const dispacth = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);
  const products = useSelector((state) => state.products.products);
  const filteredProducts = useSelector((state) => state.filters);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  console.log(searchText, "searchtext");
  console.log(filteredProducts, "yazı");

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    dispacth(FILTER_BY_SEARCH({ products: products, search: searchText }));
  };

  useEffect(() => {
    dispacth(getCartTotal());
  }, [dispacth]);

  return (
    <div className="flex items-center gap-8">
      <VscAccount onClick={() => navigate("login")} size={28} />
      <div className="flex items-center border p-2 rounded-xl bg-slate-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="arama yapiniz"
          alt="arama"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <BiSearch size={28} />
      </div>
      <div className="flex items-center " onClick={()=>navigate("/fav")}>
        <AiOutlineHeart size={28} />
      </div>
      <div onClick={() => navigate("cart")} className="flex items-center">
        <SlBasket size={28} />
        <div className="ml-1 text-lg font-semibold  text-red-500">
          {itemCount}
        </div>
      </div>
    </div>
  );
};

export default NavbarRight;
