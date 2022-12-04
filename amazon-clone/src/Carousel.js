import img1 from "./images/51DWgNo1fdL._SX3000_.jpg";
import img2 from "./images/homepage2.jpg"
import img3 from "./images/homepage3.jpg"
import img4 from "./images/homepage4.jpg"
import img5 from "./images/71dfrAvmTgL._SX3000_.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import React from "react";


const First = () => {
  

  return (
    <Carousel className="home_section">
         <Carousel.Item className="body">
        <img
          className="d-block w-100 home_section"
          src={img1}
       
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home_section"
          src={img2}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home_section"
          src={img3}
         
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home_section"
          src={img4}
       
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home_section"
          src={img5}
       
        />
      </Carousel.Item>
    
    </Carousel>
  );
}

export default First;