import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SORT_PRODUCTS } from '../../redux/filterSlice';

const Sorting = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);



  const handleSortChange = (e) => {
    const sortType = e.target.value;
    dispatch(SORT_PRODUCTS({ products: products, sort: sortType }));
  };

  return (
    <div className='bg-gradient-to-r from-gray-300 to-gray-100 mt-6 p-3 flex  items-center justify-end rounded-xl'>
      <select onChange={handleSortChange} name='' id=''>
        <option value="latest">SEÇİNİZ</option>
        <option  value="lowest-price">artan</option>
        <option  value="highest-price">azalan</option>
        <option  value="a-z">a-z</option>
        <option  value="z-a">z-a</option>
      </select>
    </div>
  )
}

export default Sorting
