import React from "react";
import "../css/FullVideoBanner.css";
import Navbar from "./Navbar";

const FullVideoBanner = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="desc">
          <div className="size">
            <h1>
              TÜRKİYE'NİN ÖNDE GELEN <br />
              HASAR ONARIM <span>MERKEZ</span>LERİNİN <br />
              <span>ÇÖZÜM ORTAĞI!</span>
            </h1>
            <p className="h1bottom">
              faaliyetlerimize başladığımız ilk günden itibaren kaliteli ürün ve iyi<br />
              hizmet felsefesini benimsedik ve adımlarımızı'da bu doğrultuda attık. 
            </p>
            <div className="btn">
              <a href="#" className="Ürünler">
                Ürünlerimiz
              </a>
              <a href="#" className="bizkimiz">
                Biz Kimiz ?
              </a>
            </div>
            <div className="tanıtım">
              <div className="yuvarlak">
                <p className="pSayi">5000+</p>
                <p className="pDetay">Ürün Sayımız</p>
              </div>
              <div className="yuvarlak m-y">
                <p className="pSayi">10+</p>
                <p className="pDetay">Ekip Sayımız</p>
              </div>
              <div className="yuvarlak m-y">
                <p className="pSayi">20+</p>
                <p className="pDetay">Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </div>
    </div>
  );
};

export default FullVideoBanner;
