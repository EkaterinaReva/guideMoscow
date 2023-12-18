import { useState } from "react";
export const Carusel= ({images}) => {

    

 const [picture, getPicture] = useState(0); 
const backImage =() => {
        getPicture ((picture => {
          picture --;
          if (picture < 0) {
             return images.length -1;
            }
          return picture;
        }))
      }
       const nextImage =() => {
        getPicture((picture =>{
          
          picture ++;
          if(picture > images.length -1) {
            picture = 0
          }
          return picture;
        }))
       }
       return(
        <div>
<div className="container">
  <img src={images[picture]} alt= "restaurant"/>
</div>
<div className='btn container'>
  <button onClick={backImage}> Back</button>
  <button onClick={nextImage}> Next</button>

</div>
</div>
);
}
