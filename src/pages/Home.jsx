import React from 'react'
import SliderComp from '../companent/Home/SliderComp'
import Sorting from './../companent/Home/Sorting';
import Category from './../companent/Home/Category';
import Products from './../companent/Home/Products';
import { useState } from 'react';

const Home = () => {
  const [sort,setSort] = useState("");
  const [category,setCategory] = useState("");



  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Products category={category} sort={sort}  />
      </div>
    </div>

  )
}

export default Home
