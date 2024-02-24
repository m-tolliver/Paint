import React from 'react';

import './App.css';
import Favorite_Button from './Components/favorite_button';

function App() {
  return (
   <div className='App'>

  
   <h1>Painter's Choice</h1>

   <h3>Name:</h3>
    <input placeholder='First and Last Name' />
    <br /> <br />
    <Favorite_Button>Submit</Favorite_Button>
       
    </div>
  );
}


export default App;
