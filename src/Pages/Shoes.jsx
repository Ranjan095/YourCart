import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/Shoes/action';
import { Box, grid } from '@chakra-ui/react';
import ShoesList from './ShoesList';
import './shoes.css';
const Shoes = () => {

  let dispatch=useDispatch()

useEffect(()=>{
dispatch(getData)
},[])
  
let store=useSelector((store)=>store.shoesReducer)
console.log(store)
let {isLoading,isError,shoes}=store
// console.log(shoes)
  return (
  <Box className='shoesBox'>
    {shoes.map((ele,i)=>{
      return <ShoesList key={i+1} shoes={ele}/>
    })}
  </Box>
  )
}

export default Shoes