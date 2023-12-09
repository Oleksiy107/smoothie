import React, { useState } from "react";

function AddToBasket() {
  const [basket, setBasket] = useState([]);
  const addGoods = () => {
    setBasket(basket + 1);
  };
  return <button onClick={addGoods}>0</button>;
}
export default AddToBasket;
