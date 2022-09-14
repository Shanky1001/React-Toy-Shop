import { Typography } from '@mui/material';
import React, { memo } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Context } from '../../App';
import ProductCard from '../../Components/common Components/Product Card/ProductCard';
import video from '../../Assests/video.mp4'

import styles from './Home.module.css'
import { Adjust } from '@mui/icons-material';

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

  const byAge = [
    <img src="https://hamleysgumlet.gumlet.io/category/1662976752Artboard1.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662978252Artboard2.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979883Artboard3.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979938Artboard4.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662979990Artboard5.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662980036Artboard6.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/category/1662980092Artboard7.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
  ]

  const byCategory = [
    <img src="https://hamleysgumlet.gumlet.io/banner/1662538238Artboard%2053@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662539115Artboard%2054@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662615367Artboard%2055@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662615173Artboard%2056@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662615403Artboard%2057@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662615331Artboard%2061@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
    <img src="https://hamleysgumlet.gumlet.io/banner/1662615291Artboard%2063@7x-min.webp" onDragStart={handleDragStart} alt="presentation" width={'90%'} height={'250px'} style={{ borderRadius: "8px", cursor: "pointer" }} />,
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
        <AliceCarousel mouseTracking items={items1} autoPlay keyboardNavigation animationDuration={'1500'} autoPlayInterval={"1500"} disableButtonsControls infinite />
      </div>

      <div className={styles.shopByAge}>
        <Typography variant='h2' className={styles.byAge}> Shop By Age </Typography>
        <AliceCarousel mouseTracking items={byAge} autoPlay keyboardNavigation disableDotsControls disableButtonsControls animationDuration={'1500'} autoPlayInterval={"3000"} responsive={responsive} infinite />
      </div>

      <div className={styles.trending}>
        <h1> Trending Today </h1>
        <div className={styles.trendingList}>
          {products.slice(0, 8).map((val) => <ProductCard val={val} key={val.id} />)}
        </div>
      </div>

      <div className={styles.shopByCategory}>
        <h1> Shop By Category </h1>
        <AliceCarousel mouseTracking items={byCategory} autoPlay keyboardNavigation disableDotsControls disableButtonsControls animationDuration={'1500'} autoPlayInterval={"3000"} responsive={responsive} infinite />
      </div>

      {/* Lego Layout  Starts ---------------------------------->*/}
      <div className={styles.lego}>
        <div className={styles.legoDiv}>
          <div className={styles.legoText}>
            <img src="https://www.hamleys.in/_nuxt/img/lego.c4bcd2e.png" alt="lego Logo" />
            <p>Say hello to action packed playset featuring a vehicle, police jail and a popular character from LEGO City Adventures TV Series. </p>
            <h3>Grab yours now!</h3>
            <button className={styles.button}> Shop Lego</button>
          </div>
          <div style={{display:"flex",justifyContent:"space-around",marginLeft:"1rem"}}>
            <div className={styles.legoImg}>
              <img src="https://hamleysgumlet.gumlet.io/product/492910170/300/492910170-1.jpg" alt="lego Toys Images" />
              <h3> Lego 60315 Police Truck Building Blocks Multicolor</h3>
            </div>
            <div className={styles.legoToys}>
              <img src="https://www.hamleys.in/_nuxt/img/Productimage2tiny.d21f485.png" alt="lego Toys " />
            </div>
          </div>
        </div>
      </div>
      {/* Lego Layout Ends ------------------------------------> */}

      <div className={styles.specialToys}>
        <div className={styles.video}>
          <video src={video} alt='special toys' controls poster={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6636ace-c570-46b7-a5b7-faba1cc2add1/de2av2q-2aa5734a-0a0a-40ec-a0c3-b614b1c63a2f.jpg/v1/fill/w_700,h_301,q_70,strp/laferrari_by_alberichpotter_de2av2q-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvZjY2MzZhY2UtYzU3MC00NmI3LWE1YjctZmFiYTFjYzJhZGQxXC9kZTJhdjJxLTJhYTU3MzRhLTBhMGEtNDBlYy1hMGMzLWI2MTRiMWM2M2EyZi5qcGciLCJ3aWR0aCI6Ijw9MTQ0MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.raYLYtA7LqzTG-FotOUOUxRDYEpzNPw4PsGfCipxKnk'} />
        </div>
        <div className={styles.specialToysText}>
          <h1 className={styles.logo}> Hamleys </h1>
          <h2>Welcome to Lego </h2>
          <p>Spend quality time with premium LEGO®️ sets designed specifically for you. From wonders of the world to movie magic, intrepid space exploration to pop culture icons, luxury cars to architectural</p>
          <button className={styles.button}> Shop Now </button>
        </div>
      </div>

      <div className={styles.policy}>
        <h1>Free Return within 30 days</h1>
        <h1> <Adjust /> </h1>
        <h1>FREE DELIVERY ON ORDERS OVER RS. 999</h1>
      </div>
    </div>
  )
}

export default memo(Home) 