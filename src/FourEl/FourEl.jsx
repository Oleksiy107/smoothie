import React from "react";

import KiwiPhoto from "../assets/Kiwi.jpeg";
import ApplesPhoto from "../assets/Apples.jpeg";
import PeachesPhoto from "../assets/Peaches.webp";
import OrangesPhoto from "../assets/Oranges.jpeg";
import MangoPhoto from "../assets/Mango.jpeg";
import PineapplePhoto from "../assets/Pineapple.jpeg";
import BerriesPhoto from "../assets/Berries.webp"; // Missing import for Berries
import PearsPhoto from "../assets/Pears.webp";

function FruitsPage() {
  return (
    <div className="fruits-block">
      <h2 className="fruits-block__title">Fruits</h2>
      <div className="fruits-block__list-fruits list-fruits">
        <div className="list-fruits__item">
          <img src={BerriesPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Berries</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division A</span>
        </div>
        <div className="list-fruits__item">
          <img src={MangoPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Mango</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division B</span>
        </div>
        <div className="list-fruits__item">
          <img src={PineapplePhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Pineapple</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division C</span>
        </div>
        <div className="list-fruits__item">
          <img src={ApplesPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Apples</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division A</span>
        </div>
        <div className="list-fruits__item">
          <img src={OrangesPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Oranges</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division B</span>
        </div>
        <div className="list-fruits__item">
          <img src={KiwiPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Kiwi</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division C</span>
        </div>
        <div className="list-fruits__item">
          <img src={PeachesPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Peaches</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division A</span>
        </div>
        <div className="list-fruits__item">
          <img src={PearsPhoto} alt="" className="list-fruits__img" />
          <span className="list-fruits__name">Pears</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division B</span>
        </div>
        <div className="list-fruits__item">
          <span className="list-fruits__name">Grapes</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-fruits__division">Division C</span>
        </div>
      </div>
    </div>
  );
}
export default FruitsPage;
