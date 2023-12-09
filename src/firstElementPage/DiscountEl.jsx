import React from "react";
import Pineapple from "../assets/Pineapple2.jpeg";
import Rainbow from "../assets/Rainbow.jpeg";
import Energizing from "../assets/energizi.jpeg";

function SmoothieEl() {
  return (
    <div className="discound-block">
      <div className="discound-block__wrap">
        <h2 className="discound-block__title">Discound</h2>
        <div className="discound-block__discound-goods discound-goods">
          <div className="discound-goods__goods">
            <h2>Pineapple smoothie:</h2>
            <img src={Pineapple} alt="" className="discound-goods__img" />
            <button className="discound-goods__btn discountBtn" role="button">
              30$
            </button>
          </div>
          <div className="discound-goods__goods">
            <h2>Rainbow smoothie:</h2>
            <img src={Rainbow} alt="" className="discound-goods__img" />
            <button className="discound-goods__btn discountBtn" role="button">
              30$
            </button>
          </div>
          <div className="discound-goods__goods">
            <h2>Energizing smoothie:</h2>
            <img src={Energizing} alt="" className="discound-goods__img" />
            <button className="discound-goods__btn discountBtn" role="button">
              30$
            </button>
          </div>
        </div>
        <p className="discound-block__text">
          Discounts on Smoothies: Enjoy great savings! Indulge in delicious,
          healthy smoothies at unbeatable prices. Whether it's a refreshing
          fruit blend or a protein-packed mix, our discounted range offers a
          variety of flavors to tantalize your taste buds. Don't miss out on
          this opportunity to savor quality ingredients without breaking the
          bank. Hurry and grab your discounted smoothie today!
        </p>
      </div>
    </div>
  );
}
export default SmoothieEl;
