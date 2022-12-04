import React from 'react';
import "./Home.css";
import Product from './Product';
import img1 from "./images/81vvgZqCskL._AC_UY327_FMwebp_QL65_.webp";
import img2 from "./images/71XmlboxNZL._SL1500_.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img1home from "./images/51DWgNo1fdL._SX3000_.jpg";
function Home() {
    return (
    <div className="home">
        <div className="home_container">
        <img
            className="home_section"
            src={img1home}
            alt=" "
        />
            
            <div className="home_row">
                <Product
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
                    price={29.99}
                    image={img1}
                    rating={4}
                />
                
            <Product
                title="Xiaomi 11 Lite NE 5G (Jazz Blue 8GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision | SD 778 with 12 5G Bands"
                price={300}
                image={img2}
                rating={4}
                
            />
            <Product
                title="Skybags Brat Black 46 Cms Casual Backpack,Combination of functional & safety features in stylish design, Soft mesh back with 8 mm foam padded 2 Main Compartment"
                price={9}
                image={img3}
                rating={3}
            />
            </div>
            <div className="home_row">
            <Product
                title="CASE PLUS Plastic Digital Smart Backlight Battery Operated Alarm Table Clock with Automatic Sensor, Date and Temperature, Black, Dimension 13.5W x 7.6H cm"
                price={5}
                image={img4}
                rating={3}
            />
            <Product
                title="ADDYVERO Women's Keyhole Neck Skater Dress Item Length Description: Midi, Sleeve Type: Sleeveless Occasion Type: Ceremony, Material Composition: 80% Cotton"
                price={6}
                image={img5}
                rating={5}
            />
            </div>
            <div className="home_row">
            <Product
                title="Mi 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)
                Resolution : HD Ready (1366 x 768) Resolution | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle
Connectivity: Dual Band Wi-Fi | 2 HDMI ports to connect latest gaming consoles, set top box, Blu-ray Players | 2 USB ports to connect hard drives and other USB devices | ALLM | ARC | Bluetooth 5.0 | Ethernet"
                price={200}
                image={img6}
                rating={4}
            />
            </div>
        </div>
    </div>
    )
}


export default Home;