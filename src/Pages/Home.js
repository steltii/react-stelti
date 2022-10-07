import React from 'react'
import Carousel from '../Components/Carousel';
import Hero from '../Components/Hero';

export default function Home() {
  return (
    <>
        <div id="content">
            <h1 className="home_h1">Welcome to home</h1>
            <Carousel />
            <Hero />
        </div>
    </>
  )
}
