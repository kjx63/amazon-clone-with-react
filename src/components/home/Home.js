import React from 'react';
import './Home.css';
import Product from '../product/Product';

const Home = () => {
  return (
    <div className='home'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
        className='home__image'
      />

      {/* Product id, title, price, rating, image */}
      <div className='home__row'>
        <Product
          id='12321341'
          title='The Lean Startup: How How Constant Innovation Creates Radically Successful Business Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />
        <Product
          id='94758304'
          title='The Lean Startup: How How Constant Innovation Creates Radically Successful Business Paperback'
          price={21.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='92047281'
          title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, '
          price={444.5}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg'
        />
        <Product
          id='18273643'
          title="PIERRE NOIR Men's Shirt Regular Fit Wrinkle-Resistant Long-Sleeve Dress Shir"
          price={21.99}
          rating={3}
          image='https://m.media-amazon.com/images/I/41JDrwHbGOL._AC_SR160,200_.jpg'
        />
        <Product
          id='38472643'
          title='BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones'
          price={36.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='83058472'
          title='Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black'
          price={236.28}
          rating={5}
          image='https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY218_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
