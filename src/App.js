import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;



// function App() {
//   return (
//     <>
//     <NavBar/>
//   <Container className="mb-4">
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/Store" element={<Store/>} />
//       <Route path="/About" element={<About/>} />

//     </Routes>
//   </Container></>
//   )
// };

//export default App;
