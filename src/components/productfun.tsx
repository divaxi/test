import React, { useEffect, useState } from 'react'
import { Products, ProductsDetail} from './Product';
import { Product, Product_Detail } from "../interface";
export const getProduct=()=>{
  const [allProducts,setProduct]=useState<Product[]>([]);
    useEffect(() => {
    setProduct(Products)
  }, [])
  return allProducts
  }
export function getDummyImage(filename: string) {
    return `https://divaxi.github.io/dummy/product/${filename}`;}
export const SeclectedProduct =(key:number)=>{
  const selectproduct= ProductsDetail.filter((temp:Product_Detail)=>{
    return temp.id==key})
  return selectproduct
  }
