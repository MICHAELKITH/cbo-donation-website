import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Products() {
  return (
    <>
  
     
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;