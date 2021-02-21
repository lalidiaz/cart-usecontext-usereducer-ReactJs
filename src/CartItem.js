import React from 'react';
import { useGlobalContext } from './context';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => toggleAmount(id, 'increase')}
        >
          <IoIosArrowUp size={30} />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => toggleAmount(id, 'decrease')}
        >
          <IoIosArrowDown size={30} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
