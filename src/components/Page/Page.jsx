import React from "react";
import "./page.scss";
import Left from "../../img/Left.png";
import Right from "../../img/Right.png";
import Down from "../../img/Down.png";
import Perfil from "../../img/bird.png";
import Release from "../../img/release.png";
import Crime from "../../img/crimetown.png";
import Discover from "../../img/Discover.png";
import Daily from "../../img/daily.png";
import Daily2 from "../../img/daily2.png";
import Farewell from "../../img/Farewell.png";
import Eminem from "../../img/eminem.png";
import Dark from "../../img/dark.png";
import Radio from "../../img/radio.png";
import Bulls from "../../img/bull.png";
import Circles from "../../img/circles.png";

const Page = () => {
  return (
    <div className="pageComponent">
      <div className="upButtons">
        <div className="btns">
          <div className="left">
            <img src={Left} alt="" className="invert leftarrow" />
          </div>
          <div className="right">
            <img src={Right} alt="" className="invert rightarrow" />
          </div>
        </div>
        <div className="perfil">
          <div className="user">
            <img src={Perfil} alt="" className="perfilImg" />
            <p>
              <a href="https://codexmain.netlify.app/">Lp Vinci</a>
            </p>
          </div>
          <img src={Down} alt="" className="invert" />
        </div>
      </div>

      <div className="center">
        <h2>Good Night</h2>
        <div className="listM">
          <div className="card">
            <img src={Release} alt="" className="imgCard" />
            <p>Release Radar</p>
          </div>
          <div className="card">
            <img src={Crime} alt="" className="imgCard" />
            <p>Crimetown</p>
          </div>
          <div className="card">
            <img src={Discover} alt="" className="imgCard" />
            <p>Discover Weekly</p>
          </div>
        </div>
        <div className="listM">
          <div className="card">
            <img src={Daily} alt="" className="imgCard" />
            <p>Daily Mix 1</p>
          </div>
          <div className="card">
            <img src={Daily2} alt="" className="imgCard" />
            <p>Daily Mix 2</p>
          </div>
          <div className="card">
            <img src={Farewell} alt="" className="imgCard" />
            <p>Farewell</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <h2>Your Heavy Rotation</h2>
        <div className="listM">
          <div className="card">
            <img src={Dark} alt="" className="imgCard" />
            <div className="title">
              <p>Dark Necessities</p>
              <p className="author">Red Hot Chilli Pepers</p>
            </div>
          </div>
          <div className="card">
            <img src={Bulls} alt="" className="imgCard" />
            <div className="title">
              <p>Bulls on Parade</p>
              <p className="author">Rage Agains the Machine</p>
            </div>
          </div>
          <div className="card">
            <img src={Eminem} alt="" className="imgCard" />
            <div className="title">
              <p>Mockingbird</p>
              <p className="author">Eminem</p>
            </div>
          </div>
          <div className="card">
            <img src={Radio} alt="" className="imgCard" />
            <div className="title">
              <p>Radio Song</p>
              <p className="author">SuperBus</p>
            </div>
          </div>
          <div className="card">
            <img src={Circles} alt="" className="imgCard" />
            <div className="title">
              <p>Circles</p>
              <p className="author">Post Malone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
