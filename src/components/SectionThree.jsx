import React from "react";
import "../css/SectionThree.css";

const SectionThree = () => {
  return (
    <div className="SectionThreeContainer">
      <div className="Description">
        <p>
          Sahip olduğumuz tecrübe, bilgi birikimi ve uluslararası tedarikci
          ağımoz ile sektörünün <br /> lider markalarını en iyi fiyat olanaklarıyla
          müşterilerimizle buluşturuyoruz.
        </p>
        <div className="Ürünbtn">
        <a href="#">Ürünlerimiz</a>
        </div>
      </div>
      <div className="Title">
          <h1> <span>YED-PAR</span> <br /> Kapsamlı oto yedek parça <br /> çözümü için aradığın nokta!</h1>
      </div>
    </div>
  );
};

export default SectionThree;
