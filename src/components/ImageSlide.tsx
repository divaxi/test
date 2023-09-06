import React, { useState } from 'react';
interface Props{
  more?:string[],
}
function ImageSlide(prop) {
  const {more}=prop;
  return (
    <>
    <div className='flex'>
    {more.map((img) => {
      return(
        <img
        src={img}
        loading='lazy'
        className='slideIMG'
        />
      )
    })}
    </div>
    </>
  );
}
export default ImageSlide;