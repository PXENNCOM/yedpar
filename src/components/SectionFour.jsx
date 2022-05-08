import React from "react";
import "../css/SectionFour.css";

const SectionFour = () => {
  return (
    <div className="SectionFourContainer">
      <div className="SecitonFourİmg">
        <img
          src="https://images.pexels.com/photos/5976519/pexels-photo-5976519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div className="SectionFourDesc">
          <h2>
              Kalite Politikamız
          </h2>
        <div className="SectionFourDesc1 SectionFourDesc3Before">
          <h1 className="FourH1">1</h1>
          <p>
            Sürekli geleceğe yönelik yatırım ve geliştirme çalışmalarını yapmak,
            doğru kararları doğru zamanlarda alıp, her zaman her yerde aranılan,
            tercih edilen bir şirket olmak,
          </p>
        </div>
        <div className="SectionFourDesc2 SectionFourDesc3Before">
          <h1 className="FourH1">2</h1>
          <p>
            Değişen ve gelişen müşteri ihtiyaçlarını, bilimsel ve teknolojik
            gelişmeleri takip etmek, firmamızın imkanları doğrultusunda bu
            ihtiyaçların karşılanmasını sağlayarak müşteri memnuniyetini, kalite
            düzeyini korumak ve arttırmak,
          </p>
        </div>
        <div className="SectionFourDesc3  SectionFourDesc3Before ">
          <h1 className="FourH1">3</h1>
          <p>
            Çalışanların sağlığına ve iş güvenliğine önem vermek, yapılan tüm
            işlerde yazılmış ilgili kanun ve yönetmeliklere uygun çalışmak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
