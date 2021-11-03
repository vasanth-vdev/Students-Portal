import React from "react";
import ReactDom from "react-dom";

// const Greetings = () => {
//    return React.createElement('h1', {}, 'Hello World');
//};

// const Greetings = () => {
//    return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
//}; 
//css

import './indes.css';

// if 1 file before inclure 2(.)'s
//JSX Java Script

const reserve = 'Rajkumar'; 
function Greetings() {
    return (
    <div>
        <h1> Favourite </h1> 
        <h4>{reserve.toUpperCase()}</h4> 
        <h2>{reserve.toLocaleLowerCase()}</h2>
        <Name/>
        <Image/>
        <Price/>
        </div>
        );
    }

    // JSX css or inline css
const Name = ()=> <h2 style={{color: "red"}} >Star Bucks</h2>
const Image = ()=> <img src="https://imgmedia.lbb.in/media/2020/04/5ea18dee1036c70c9363dacd_1587645934824.jpg" alt = ''/>
const Price = ()=> <h3>500</h3>