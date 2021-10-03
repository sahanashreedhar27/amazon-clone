import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home_img'
        src='https://m.media-amazon.com/images/I/71O41ILEX0L._SX3000_.jpg'
      />
      <div className='home_row'>
        <Product
          id='12345'
          title='MaxGear Pen Holder for Desk, Premium Acrylic Pencil Holder Pen Cup Makeup Brush Holder Desk Accessories & Workspace Organizers for Home, School & Office, Clear'
          price={11.96}
          rating={5}
          image='https://m.media-amazon.com/images/I/61waqBhb7iL._AC_UL480_FMwebp_QL65_.jpg'
        />
        <Product
          id='12346'
          title='WallarGe Auto Set Digital Wall Clock Battery Operated,Desk Clocks with Temperature,Humidity and Date,Large Display Digital Calendar Alarm Clock for Elderly,Bedroom,Office,8 Time Zone, Auto DST.'
          price={27.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/61yqr6LzlHL._AC_SL1000_.jpg'
        />
      </div>
      <div className='home_row'>
        <Product
          id='12347'
          title='NeckSnug 4 Pack Sleep Kit - 100% Memory Foam Travel Pillow, 3D Contoured Sleep Mask, Moldable Ear Plugs, Compact Carry Bag. Moldable and Breathable Neck Pillow'
          price={14.95}
          rating={3}
          image='https://m.media-amazon.com/images/I/91du5AK1-BL._AC_SL1500_.jpg'
        />
        <Product
          id='12348'
          title='Original Stationery Fluffy Slime Kit for Girls Everything in One Box to Make Ice Cream Slimes, Make Fluffy, Butter, Cloud & Foam Slimes!'
          price={19.46}
          rating={3}
          image='https://m.media-amazon.com/images/I/91SzICO8gcL._AC_SL1500_.jpg'
        />
        <Product
          id='12349'
          title='SAMSUNG Galaxy Tab A 8.0-inch Android Tablet 64GB Wi-Fi Lightweight Large Screen Feel Camera Long-Lasting Battery, Black'
          price={129.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/71HX44IWA7L._AC_SL1500_.jpg'
        />
      </div>
      <div className='home_row'>
        <Product
          id='12350'
          title='Sony X90J 55 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR55X90J- 2021 Model'
          price={1198.0}
          rating={4}
          image='https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
