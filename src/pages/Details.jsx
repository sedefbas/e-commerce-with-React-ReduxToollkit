import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import DetailComp from "../companent/details/DetailComp";
import Loading from "../companent/Loading";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productsDetails, productsDetailsStatus } = useSelector(
    (state) => state.products
  );
  
  

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {productsDetailsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productsDetails={productsDetails} />
      )}
    </div>
  );
};

export default Details;
