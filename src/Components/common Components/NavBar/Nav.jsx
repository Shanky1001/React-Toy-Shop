import { Close, DarkMode, LocalMall, Login, Logout, Menu, PersonAdd, WbSunny } from '@mui/icons-material';
import { Badge, Tooltip, Typography } from '@mui/material';
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../../App';
import Style from './Nav.module.css'
import '../../../App.css'

const Nav = () => {
  const { state: { cart, wishlist }, logged, setLogged } = Context();

  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false)

  // NavBar hiding Function
  const hideNav = () => {
    setToggle(false);
  }
  // Theme Switcher Function
  const dark = () => {
    document.querySelector(".App").classList.toggle("darkTheme");
    hideNav();
    setTheme(!theme)
  }

  return (
    <div className={Style.navContainer}>
      <header className={Style.header}>
        <div className={Style.logo}>
          <Link to="/"><Typography variant='h1' className={Style.logo}> Hamleys </Typography></Link>
        </div>
        <nav className={Style.navbar}>
          <Link to="/"><h1 >Home</h1></Link>
          <Link to="/about"><h1>About</h1></Link>
          <Link to="/menu"><h1>Products</h1></Link>
          <a href='#footerContainer'><h1>Contact</h1></a>
        </nav>
        <div className={Style.options}>
          {logged.id > 0 ? <>
            <Tooltip arrow title="logout">
              <h1 onClick={() => setLogged({})} ><Logout sx={{ fontSize: "30px" }} /></h1></Tooltip>
            <Typography variant='h2' sx={{ fontSize: "23px", fontFamily: "Combo" }}> {logged.name}</Typography>
          </>
            : <>
              <Tooltip arrow title="login">
                <Link to="/login"><h1 onClick={hideNav}> <Login fontSize='30px' />  </h1></Link>
              </Tooltip>
              <Tooltip arrow title="create account">
                <Link to="/create"><h1 onClick={hideNav}> <PersonAdd fontSize='30px' /></h1></Link>
              </Tooltip></>}
          <Tooltip arrow title="theme switcher">
            <h1 onClick={dark} className={Style.theme}> {theme ? <WbSunny className={Style.theme} /> : <DarkMode className={Style.theme} />} </h1>
          </Tooltip>
          <Tooltip arrow title="cart">
            <Link to="/cart" className={Style.cart} ><Badge showZero badgeContent={cart.length}  ><LocalMall sx={{ fontSize: "30px" }} /> </Badge><span></span></Link>
          </Tooltip>
        </div>

        {/* Nav bar for Mobile starts-----------------> */}

        <div className={Style.navbarMob} >
          <Menu className={Style.menu} onClick={(e) => { setToggle(true) }} />
          {toggle && (<div className={Style.overlay}>
            <h1 onClick={(e) => { setToggle(false) }}> <Close className={Style.close} /> </h1>
            <Link to="/"><h1 onClick={hideNav}>Home</h1></Link>
            <Link to="/"><h1 onClick={hideNav}>About</h1></Link>
            <Link to="/menu"><h1 onClick={hideNav}>Products</h1></Link>
            <Link to="/"><h1 onClick={hideNav}>Contact</h1></Link>
            {logged.id > 0 ? <>
              <Tooltip arrow title="logout">
                <h1 onClick={() => setLogged({})} ><Logout sx={{ fontSize: "30px" }} /> {logged.name}</h1></Tooltip>
            </>
              : <>
                <Tooltip arrow title="login">
                  <Link to="/login"><h1 onClick={hideNav}> Login</h1></Link>
                </Tooltip>
                <Tooltip arrow title="create account">
                  <Link to="/create"><h1 onClick={hideNav}> Create Account </h1></Link>
                </Tooltip></>}
            <hr />
            <div className={Style.optionsM} >
              <h1 onClick={dark} className={Style.themeSwitcher}> {theme ? <WbSunny sx={{ fontSize: "30px" }} /> : <DarkMode sx={{ fontSize: "30px" }} />} </h1>
              <Tooltip arrow title="cart">
                <Link to="/cart" className={Style.cart} ><Badge showZero badgeContent={cart.length}  ><LocalMall sx={{ fontSize: "30px" }} /> </Badge><span></span></Link>
              </Tooltip>
            </div>
          </div>)}
        </div>
        {/* Nav bar for Mobile Ends-----------------> */}
      </header>
    </div>
  )
}

export default memo(Nav)