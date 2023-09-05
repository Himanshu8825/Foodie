import React from 'react'
import Navbaar from './../components/Navbaar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';





const Home = () => {
  return (
    <>
    <div><Navbaar/></div>
    <div><Carousel/></div>
    <div> <Card/></div>
    <div><Footer/></div>
    </>
  )
}

export default Home
