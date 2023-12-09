import React from "react";
import zucchiniPhoto from "../assets/Zucchini.jpeg";
import KalePhoto from "../assets/Kale.jpeg";
import CeleryPhoto from "../assets/Celery.jpeg";
import BellPepersPhoto from "../assets/Bell peppers.jpeg";
import CarrotsPhoto from "../assets/Carrots.jpeg";
import pineapplePhoto from "../assets/pineapple.jpeg";
import PumpkinPhoto from "../assets/Pumpkin.jpeg";
import SwissChardPhoto from "../assets/Swiss chard.jpeg";
import CucumberPhoto from "../assets/Cucumber.jpeg";

function VegetablesGoods() {
  return (
    <div className="vegetable-block">
      <h2 className="vegetable-block__title">vegetable</h2>
      <div className="vegetable-block__list-vegetable list-vegetable">
        <div className="list-vegetable__item">
          <img src={zucchiniPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Spinach</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division A</span>
        </div>
        <div className="list-vegetable__item">
          <img src={KalePhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Kale</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division B</span>
        </div>
        <div className="list-vegetable__item">
          <img src={SwissChardPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Swiss chard</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division C</span>
        </div>
        <div className="list-vegetable__item">
          <img src={zucchiniPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Beet greens</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division A</span>
        </div>
        <div className="list-vegetable__item">
          <img src={CarrotsPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Carrots</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division B</span>
        </div>
        <div className="list-vegetable__item">
          <img src={CucumberPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Cucumber</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division C</span>
        </div>
        <div className="list-vegetable__item">
          <img src={CeleryPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Celery</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division A</span>
        </div>
        <div className="list-vegetable__item">
          <img src={pineapplePhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Pumpkin</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division B</span>
        </div>
        <div className="list-vegetable__item">
          <img src={zucchiniPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Zucchini</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division C</span>
        </div>
        <div className="list-vegetable__item">
          <img src={BellPepersPhoto} alt="" className="list-vegetable__img" />
          <span className="list-vegetable__name">Bell peppers</span>
          <p>text:</p>
          <button className="button-35">30$</button>
          <span className="list-vegetable__division">Division A</span>
        </div>
      </div>
    </div>
  );
}
export default VegetablesGoods;
