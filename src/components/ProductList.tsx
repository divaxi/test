import React, {useState } from 'react'
import {SeclectedProduct, getProduct } from './productfun';
import ProductDisplay from './ProductDisplay';
import { Detail,Product_Detail } from '../interface';
import ProductDetail from './ProductDetail';

const ProductList:React.FC = () => {
  const prop=getProduct();
  const [viewDetail,setDetail]=useState<Product_Detail>({
    id:0,
    name:""
  })
  const [isOpened,setOpened]=useState<Detail>({
    id:0,
    isOpened:false
  })
  const SelectStatus=(key:number)=>{
    const temp=SeclectedProduct(key)
    setDetail(temp[0])
    if (!isOpened.isOpened) {
      setOpened({
        id: key,
        isOpened: true,
      });
    }
  }
  return (
    <>
    <section className={
      isOpened.isOpened
        ? "collection-container-active"
        : ""
    }
  >
    {isOpened.isOpened ? (
      <ProductDetail
      isOpened={isOpened}
      setOpened={setOpened}
      viewDetail={viewDetail}
      />
    ) : (
      <section>
      <div className="container">
        <header className="main-header"> 
        CSSX Sao
        Đức Tuân
        </header>
      </div>
      <div className='collection-container'>
      {prop.map((product) => {
        return(
          <div onClick={()=> { SelectStatus(product.id)}}
          >
          <ProductDisplay
          name ={product.name}
          image={product.image}
          />
          </div>
        )
      })}
      </div>
      </section>
    )}
    </section>
    <div className='start'>
      <p className='info'>
        Địa chỉ:53 Phù Nghĩa,P.Hạ Long, Tp.Nam Định, tỉnh Nam Định
        <br/>
        SĐT:0839646530
      </p>
    </div>
    </>
  );
};

export default ProductList;