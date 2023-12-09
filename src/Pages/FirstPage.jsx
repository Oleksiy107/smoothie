import React from "react";

import Header from "../header/header";
import Back from "../firstElementPage/backPhoto";
import DiscoundtEl from "../firstElementPage/DiscountEl";
import Timer from "../TimerComponet/Timer.jsx";
import SmoothieEl from "../firstElementPage/SmoothieElement";
import Footer from "../footer/footer.jsx";

function FirstPage() {
  return (
    <>
      <Back />
      <Header />
      <Timer />
      <DiscoundtEl />
      <SmoothieEl />
      <Footer />
    </>
  );
}
export default FirstPage;
