import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import { useState } from "react";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems);

export default function App() {
  // Setup state here...
  const [items, setItems] = useState(initialStoreItems);
  // const [itemsInStore, setItemsInStore] = useState([]);

  const itemsInStore = [
     {
        id: "001-beetroot",
        name: "beetroot",
        price: 0.35
      }
    
  ]

  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {items.map((element) => (
            <>
              <li>
                <div className="store--item-icon">
                  <img
                    src={`../public/assets/icons/${element.id}.svg `}
                    alt={element.name}
                  />
                </div>
                <button>Add to cart</button>
              </li>
            </>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {itemsInStore.map((e) => (
              <li key={e.id}>
                <img
                  className="cart--item-icon"
                  src={`../public/assets/icons/${e.id}.svg `}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">1</span>
                <button className="quantity-btn add-btn center">+</button>
            </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
