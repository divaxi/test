import React from 'react';
interface props{
  url?:string
}
const VideoPlayer:React.FC<props> = (props) => {
  const {url}= props;
  return (
    <>
    <div>
     <p>Nhấn vào để xem video</p>
    <iframe className='video' src={url}
    allow="autoplay,fullscreen"
    frameBorder="0"
    />
    </div>  
    </>
  );
};
export default VideoPlayer;