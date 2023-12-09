import React from "react";
import banana from "../assets/banan.jpeg";
import im from "../assets/images.jpeg";
import mango from "../assets/mango.jpg";
import peace from "../assets/peace.jpeg";
import pino from "../assets/pino.jpeg";
import st from "../assets/st.jpeg";
function Goods() {
  return (
    <div className="goods-block">
      <div className="goods-block__inner-wrap">
        <div className="goods-block__wrap">
          <img src={banana} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
        <div className="goods-block__wrap">
          <img src={im} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
        <div className="goods-block__wrap">
          <img src={mango} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
        <div className="goods-block__wrap">
          <img src={peace} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
        <div className="goods-block__wrap">
          <img src={pino} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
        <div className="goods-block__wrap">
          <img src={st} alt="" className="goods-block__img" />
          <p>text:</p>
          <button className="button-35">30$</button>
        </div>
      </div>
    </div>
  );
}
export default Goods;
