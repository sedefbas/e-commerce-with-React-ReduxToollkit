import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getProducts } from "../../redux/productSlice";
import { FILTER_BY_SEARCH, SORT_PRODUCTS } from "../../redux/filterSlice"; // Yeni ekledik
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const filteredProducts = useSelector((state) => state.filters.filteredProducts);


  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredProducts.length === 0 ? products.slice(itemOffset, endOffset) : filteredProducts.slice(itemOffset, endOffset);


  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage); // Burayı güncelledik

  console.log(currentItems, "currentItems");
  console.log(products, "products");
  console.log(productsStatus, "productsStatus");

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length; // Burayı güncelledik
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  // Bu kısmı ekleyerek ürünleri arama veya sıralama durumuna göre filtrelemek ve sıralamak için dispatch ediyoruz.
  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search: "" })); // Başlangıçta arama yapılmamış halde göstermek için boş arama terimiyle filtreliyoruz
    dispatch(SORT_PRODUCTS({ products, sort: "" })); // Başlangıçta sıralama yapılmamış halde göstermek için boş sıralama tipiyle sıralıyoruz
  }, [dispatch, products]);

  return (
    <div className="p-2 w-5/6">
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {currentItems.length > 0 ? (
            currentItems.map((product, i) => <Product key={i} product={product} />)
          ) : (
            <div>ürün bulunamadı</div>
          )}
        </div>
      )}
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default Products;
