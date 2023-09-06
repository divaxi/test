import { useEffect,useState } from 'react'
import React from 'react'
import { Detail, Product_Detail} from '../interface'
import VideoPlayer from './VideoPlayer'
import ImageSlide from './ImageSlide'
interface props{
    isOpened:Detail,
    setOpened:React.Dispatch<React.SetStateAction<Detail>>,
    viewDetail:Product_Detail,
}
const ProductDetail:React.FC<props> = (prop) => {
  const {isOpened,setOpened,viewDetail}=prop
  const [isSelected,setSelected]=useState<boolean>(false)
  useEffect(() => {
    setSelected(isOpened.isOpened);
  }, [isOpened]);
  const closeDetail = () => {
    setOpened({
      id: 0,
      isOpened: false,
    });
  };
  return (
        <div className='overlay'>
        <section className="productdetail">
          <p className="close" onClick={closeDetail}>
            X
          </p>
          <VideoPlayer  url={viewDetail.video} 
          />
          <ImageSlide more={viewDetail.more}/>
          <p className='name'>{viewDetail.name}</p>
          <p className='description'>{viewDetail.description}</p>
        </section>
        </div>
  )
}

export default ProductDetail;