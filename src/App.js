import { useState } from 'react';
import { data } from './data';
import './App.css';
import { Carusel } from './Carusel';

function App() {
const [restaurants, setRestaurants] = useState(data);

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
<Carusel images={image}/>

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
