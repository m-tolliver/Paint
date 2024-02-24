import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Navbar/pages/about';
import Contact from './Navbar/pages/contact';
import SignUp from './Navbar/pages/signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favorite_Button from './Components/favorite_button';

function PaintApp() {
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />
  },
{
  path: "/",
  element: <Contact />
},
{
  path: "/",
  element: <SignUp />
},
]);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let element = React.createElement('h1', 'This is React!');

//CRUD: Create, Read, Update, Delete



//Create paint

class Color {
  constructor(color) {
      this.item = Color;
      this.addColor = [];
  }
}

//Read or GET item

function GET():
 {
    this.Color = GET;
    this.addGET = [];
};


//Update, ie-button to add color

const newButton = document.createElement('button');
newButton.textContent = 'Update Color' ;
document.body.appendChild(newButton);

//Delete, button to delete

const deleteButton = document.createElement('button');
newButton.textContent = 'Delete Color' ;
document.body.appendChild(newButton);

