import React from "react";
import "./navbar.scss";
import Billie from "../../img/billie.png";
import Fav0 from "../../img/Fav0.png";
import Random from "../../img/Random.png";
import Previous from "../../img/Previous.png";
import Skip from "../../img/Skip.png";
import Play from "../../img/Play.png";
import Loop from "../../img/Loop.png";
import Devices from "../../img/Devices.png";
import List from "../../img/Lista.png";
import Volume from "../../img/Volume.png";
import Full from "../../img/Full.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="musicInfo">
        <img src={Billie} alt="" />
        <div className="music">
          <p className="musicName">Therefore I Am</p>
          <p className="artist">Billie Eilish</p>
        </div>
        <img src={Fav0} alt="" className="Fav" />
      </div>

      <div className="player">
        <div className="buttonsPlayer">
          <img src={Random} alt="" className="IconsInvert" />
          <img src={Previous} alt="" className="IconsInvert" />
          <img src={Play} alt="" className="IconsInvert" />
          <img src={Skip} alt="" className="IconsInvert" />
          <img src={Loop} alt="" className="IconsInvert" />
        </div>
        <div className="timer">
          <p>0:00</p>
          <div className="timeline"></div>
          <p>4:58</p>
        </div>
      </div>
      <div className="options">
        <img src={List} alt="" className="IconsInvert" />
        <img src={Devices} alt="" className="IconsInvert" />
        <img src={Volume} alt="" className="IconsInvert" />
        <div className="volume"></div>
        <img src={Full} alt="" className="IconsInvert" />
      </div>
    </div>
  );
};

export default Navbar;
