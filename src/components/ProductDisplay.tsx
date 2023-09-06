import React, { useEffect, useState } from 'react'
interface Props{
    name:string;
    image?:string;
}
const ProductDisplay:React.FC<Props>= (props) => {
  const {name,image}=props;
  return (
    <div className='thing'>
        <section className='product-container'>
            <p className='name'>{name}</p>
            <section className='productdiv'>
            <img
              loading="lazy"
              src={image} 
              className="procIMG"
            />
            </section>
        </section>

    </div>
  )
}

export default ProductDisplay