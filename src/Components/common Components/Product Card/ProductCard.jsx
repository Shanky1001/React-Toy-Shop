import { Favorite, ShoppingBag } from '@mui/icons-material'
import { Typography } from '@mui/material';
import React, { memo, useLayoutEffect, useState } from 'react'
import { Context } from '../../../App';
import style from './ProductCard.module.css'


const ProductCard = ({ val }) => {
  const { dispatch } = Context();
  const [discount,setDiscount] = useState(0);
  useLayoutEffect(()=>{
   setDiscount(val.price + Math.floor(50 + Math.random() * 1000));
  },[val.price])

  return (
    <div className={style.productCardContainer}>
      <Favorite className={style.fav} />
      <img src={val.img} alt={val.title} width='250px' />
      <h3> {val.title} </h3>
      <h4> <span className={style.span}>₹  {discount}
      </span> ₹ {val.price} <span className={style.discount}> {parseInt((discount * 10) / val.price)} %off </span> </h4>
      <button className={style.bag} onClick={() => {
        dispatch({
          type: "increaseQTY", payload: {
            idMeal: val.idMeal,
            qty: val.qty + 1
          }
        })

      }}>  <ShoppingBag sx={{ fontSize: "25px" }} />  <Typography variant='h6' fontSize={'18px'} > Add to Bag </Typography> </button>
    </div>
  )
}

export default memo(ProductCard);