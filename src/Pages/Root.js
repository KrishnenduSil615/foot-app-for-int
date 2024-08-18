

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';
import Header from '../Components/Header';
import CartProvider from '../Store/CartProvider';
import IndianFood1 from '../Components/img/ind-food/chilli-chicken-dry-is-popular-indo-chinese-dish-chicken-hakka-chinese-heritage_466689-77141.avif';
import IndianFood2 from '../Components/img/ind-food/savor-flavors-fiery-indian-chicken-biryani-captured-stunning-food-photography-against-dark-backdrop_117038-47488.avif';
import IndianFood3 from '../Components/img/ind-food/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.avif';
import IndianFood4 from '../Components/img/ind-food/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.avif';
import ItalianFood1 from '../Components/img/Ita-food/download.png';
import ItalianFood2 from '../Components/img/Ita-food/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.avif';
import ItalianFood3 from '../Components/img/Ita-food/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.avif';
import ItalianFood4 from '../Components/img/Ita-food/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.avif';
import ChineseFood1 from '../Components/img/Chi-food/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg';
import ChineseFood2 from '../Components/img/Chi-food/chinese-traditional-steamed-dumpligs-momo-with-meat_1472-46178.jpg';
import ChineseFood3 from '../Components/img/Chi-food/frank-zhang-zzFM-Lg29Nc-unsplash.jpg';
import ChineseFood4 from '../Components/img/Chi-food/kay-lau-fFMYe0bNuSk-unsplash.jpg';

// const productsArr = [
//   { id: 1, title: 'Chilli Chicken', description: 'Popular Indo-Chinese dish.', imageUrl: IndianFood1, price: 170 },
//   { id: 2, title: 'Chicken Biryani', description: 'Fiery Indian chicken biryani.', imageUrl: IndianFood2, price: 120 },
//   { id: 3, title: 'Shawarma', description: 'Shawarma with fried potatoes.', imageUrl: IndianFood3, price: 250 },
//   { id: 4, title: 'Chana Masala', description: 'Chickpea curry with lime.', imageUrl: IndianFood4, price: 90 },
  
//   { id: 5, title: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', imageUrl: ItalianFood1, price: 100 },
//   { id: 6, title: 'Fettuccine Alfredo', description: 'Creamy pasta with parmesan cheese and butter.', imageUrl: ItalianFood2, price: 180 },
//   { id: 7, title: 'Penne Pasta', description: 'Pasta with tomato sauce and chicken.', imageUrl: ItalianFood3, price: 300 },
//   { id: 8, title: 'Grilled Meat', description: 'Flame-grilled meat.', imageUrl: ItalianFood4, price: 210 },

//   { id: 9, title: 'Sweet and Sour Pork', description: 'Sweet and tangy flavors with tender pork.', imageUrl: ChineseFood1, price: 170 },
//   { id: 10, title: 'Steamed Dumplings', description: 'Traditional steamed dumplings.', imageUrl: ChineseFood2, price: 190 },
//   { id: 11, title: 'Stir-fried Chicken', description: 'Stir-fried chicken with peanuts.', imageUrl: ChineseFood3, price: 270 },
//   { id: 12, title: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken.', imageUrl: ChineseFood4, price: 140 },
  
// ]
const indianFoods = [
  { id: 1, title: 'Chilli Chicken', description: 'Popular Indo-Chinese dish.', imageUrl: IndianFood1, price: 170 },
  { id: 2, title: 'Chicken Biryani', description: 'Fiery Indian chicken biryani.', imageUrl: IndianFood2, price: 120 },
  { id: 3, title: 'Shawarma', description: 'Shawarma with fried potatoes.', imageUrl: IndianFood3, price: 250 },
  { id: 4, title: 'Chana Masala', description: 'Chickpea curry with lime.', imageUrl: IndianFood4, price: 90 },
];

const italianFoods = [
  { id: 1, title: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', imageUrl: ItalianFood1, price: 100 },
  { id: 2, title: 'Fettuccine Alfredo', description: 'Creamy pasta with parmesan cheese and butter.', imageUrl: ItalianFood2, price: 180 },
  { id: 3, title: 'Penne Pasta', description: 'Pasta with tomato sauce and chicken.', imageUrl: ItalianFood3, price: 300 },
  { id: 4, title: 'Grilled Meat', description: 'Flame-grilled meat.', imageUrl: ItalianFood4, price: 210 },
];

const chineseFoods = [
  { id: 1, title: 'Sweet and Sour Pork', description: 'Sweet and tangy flavors with tender pork.', imageUrl: ChineseFood1, price: 170 },
  { id: 2, title: 'Steamed Dumplings', description: 'Traditional steamed dumplings.', imageUrl: ChineseFood2, price: 190 },
  { id: 3, title: 'Stir-fried Chicken', description: 'Stir-fried chicken with peanuts.', imageUrl: ChineseFood3, price: 270 },
  { id: 4, title: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken.', imageUrl: ChineseFood4, price: 140 },
];


function Root() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const outLetContext={
    // productsArr: productsArr,
    indianFoods: indianFoods,
    italianFoods: italianFoods,
    chineseFoods: chineseFoods,
    show: show,
    onShow: handleShow,
    onClose: handleClose
  }
     
  return (
    <CartProvider>
       <Header onShow={handleShow}/> 
      <Outlet context={outLetContext}/>
      <Footer />
    </CartProvider>
  )
}

export default Root