import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
        <ProductList/>
    <GetInTouch />
    </>

  )
}

export default Home
