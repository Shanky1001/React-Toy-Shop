import { Favorite, ShoppingBag } from '@mui/icons-material'
import { Typography } from '@mui/material';
import React, { memo, useLayoutEffect, useState } from 'react'
import { Context } from '../../../App';
import style from './ProductCard.module.css'


const ProductCard = ({ val }) => {
  const { state: { cart, totalDiscount }, dispatch, setOpenSnack } = Context();
  const [discount, setDiscount] = useState(0);
  // Calculating random discount value
  useLayoutEffect(() => {
    setDiscount(val.price + Math.floor(50 + Math.random() * 1000));
  }, [val.price])

  return (
    <div className={style.productCardContainer}>
      <Favorite className={style.fav} onClick={()=>{
        dispatch({
          type:"addToWishlist",payload:val
        })
      }} />
      <img src={val.img} alt={val.title}  />
      <h3> {val.title} </h3>
      <h4> <span className={style.span}>₹  {discount}
      </span> ₹ {val.price} <span className={style.discount}> {parseInt((discount * 10) / val.price)} %off </span> </h4>

      {cart.some((p) => val.id === p.id) ? <button className={style.bag} onClick={() => {
        dispatch({
          type: "removeFromCart", payload: { id: val.id, discount: totalDiscount - (discount - val.price) }
        })
        setOpenSnack({ open: true, html: `${val.title} is added to cart`, severity: "success", time: "800" })
      }}>  <ShoppingBag sx={{ fontSize: "25px" }} />  <Typography variant='h6' fontSize={'18px'} > Remove from bag </Typography> </button> : <button className={style.bag} onClick={() => {
        dispatch({
          type: "addToCart", payload: {
            val: val, discount: totalDiscount + (discount - val.price)
          }
        })
        setOpenSnack({ open: true, html: `${val.title} is removed from cart`, severity: "success", time: "800" })
      }}>  <ShoppingBag sx={{ fontSize: "25px" }} />  <Typography variant='h6' fontSize={'18px'} > Add to Bag </Typography> </button>}


    </div>
  )
}

export default memo(ProductCard);