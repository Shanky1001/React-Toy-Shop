import { Typography } from '@mui/material';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Context } from '../../App';
import ProductCard from '../../Components/common Components/Product Card/ProductCard';

import styles from './Home.module.css'

const Home = () => {

  const { state: { products } } = Context()

  const handleDragStart = (e) => e.preventDefault();

  const items1 = [
    <img src="https://hamleysgumlet.gumlet.io/banner/1662116494website%20banner-desktop.webp" onDragStart={handleDragStart} alt="presentation" width={'100%'} height={'500px'} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1663046725HDC.webp" onDragStart={handleDragStart} alt="presentation" width={'100%'} height={'500px'} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662352499Artboard%203@1.webp" onDragStart={handleDragStart} alt="presentation" width={'100%'} height={'500px'} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/16594243513.webp" onDragStart={handleDragStart} alt="presentation" width={'100%'} height={'500px'} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/16594243144.webp" onDragStart={handleDragStart} alt="presentation" width={'100%'} height={'500px'} />,
  ];

  const items2 = [
    <img src="https://hamleysgumlet.gumlet.io/category/1662976752Artboard1.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662978252Artboard2.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979883Artboard3.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979938Artboard4.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979990Artboard5.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662980036Artboard6.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662980092Artboard7.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'300px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
  ]

  const responsive = {
    450: {
      items: 2,
    },
    900: {
      items: 4
    },
    1200: {
      items: 5
    }
  }

  return (
    <div className="homeContainer">

      {/* Carousel Container starts */}

      <div className={styles.bannerContainer}>
        <AliceCarousel mouseTracking items={items1} autoPlay keyboardNavigation animationDuration={'1500'} autoPlayInterval={"1500"} disableButtonsControls />
      </div>

      <div className={styles.shopByAge}>
        <Typography variant='h2' className={styles.byAge}> Shop By Age </Typography>
        <AliceCarousel mouseTracking items={items2} autoPlay keyboardNavigation disableDotsControls disableButtonsControls animationDuration={'1500'} autoPlayInterval={"3000"} responsive={responsive} />
      </div>

      <div className={styles.trending}>
        <h1> Trending Today </h1>
        <div className={styles.trendingList}>
          {products.slice(0,8).map((val) => <ProductCard val={val} key={val.id} />)}
        </div>
      </div>

    </div>
  )
}

export default Home