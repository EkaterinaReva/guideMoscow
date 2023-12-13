import { useState } from 'react';
import { data } from './data';
import { photos } from './Carusel';
import './App.css';

function App() {
const [restaurants, setRestaurants] = useState(data);
const [images, getImages] = useState(0);
const{id,restName, image } = photos[images];


const backImage =() => {
  getImages((images => {
    images --;
    if (images < 0) {
       return photos.length -1;
      
    }
    return images;
  }))
}
 const nextImage =() => {
  getImages((images =>{
    
    images ++;
    if(images > photos.length -1) {
      images = 0
    }
    return images;
  }))
 }

const removeRestaurant=(id) => {
  let newRestaurant= restaurants.filter((restaurant) => restaurant.id !==id);
  setRestaurants(newRestaurant);
}

return (
    <div>
      <div className="container"> 
<h1>Подборка ресторанов для посещения в Москве.</h1>
</div>
{restaurants.map(( restaurant => {
const {id, restName, description, image, place} = restaurant;
  



return(
  <div key={id}>
    <div className="container">
<h2>{id}-{restName}</h2>
</div>
<div className="container">
  <img src={image} width="300px" alt= "restaurant"/>
</div>
<div className='btn container'>
  <button onClick={backImage}> Back</button>
  <button onClick={nextImage}> Next</button>

</div>
<div className="container"> 
<p> {description}</p>

</div>
<div className="container">
  <p>{place}</p>
</div>
<div className="container">
<button className='btn' onClick={() => removeRestaurant(id)}>Уже посетила</button>
</div>

  </div>
)  
}))}


    </div>
  )
}

export default App;
