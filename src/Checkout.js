import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import SubTotal from './SubTotal.js';
import './Checkout.css';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='Checkout_left'>
        <img
          className='checkout_adv'
          src='https://images-na.ssl-images-amazon.com/images/G/01/SmartHome/Packages/Shark-Q3-2021/1500x300_AMZ-SMART-HOME-4__STOREFRONT.jpg'
          alt=''
        />
        {!basket.length ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout_right'>
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
