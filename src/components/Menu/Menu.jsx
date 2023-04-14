import React from "react";
import "./menu.scss";
import Home from "../../img/Home.png";
import Search from "../../img/Search.png";
import Library from "../../img/Library.png";
import Add from "../../img/Add.png";
import Fav from "../../img/Fav1.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="Moptions">
        <ul>
          <li>
            <img src={Home} alt="" />
            <p>Home</p>
          </li>
          <li>
            <img src={Search} alt="" />
            <p>Home</p>
          </li>
          <li>
            <img src={Library} alt="" />
            <p>Home</p>
          </li>
        </ul>
      </div>
      <div className="playlists">
        <p>PLAYLISTS</p>
        <ul>
          <li>
            <div className="imgAdd">
              <img src={Add} alt="" className="add" />
            </div>
            <p>Create Playlist</p>
          </li>
          <li>
            <div className="imgFav">
              <img src={Fav} alt="" className="fav" />
            </div>
            <p>Liked Songs</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="2021songs">
        <p>2023 Greatest Songs</p>
        <ul className="ulPlay">
          <li className="liPlay">At Work</li>
          <li className="liPlay">Playlist #2</li>
          <li className="liPlay">Playlist #3</li>
          <li className="liPlay">RapCaviar</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
