import Nav from "../../components/Nav/Nav";
import { useState, useEffect } from "react";
import chair from "../../assets/chair.png";

import star from "../../assets/star.svg";
import imgdata from "../../components/img/img";
import "./Home.css";

export default function Home() {
  const [index, setindex] = useState(0);
  const [img, setimg] = useState(imgdata[index]);

  return (
    <div className="max-width flex column">
      <Nav />
      <div className="hero flex row padding spacebetween">
        <div className="hero-info flex column">
          <div className="h4">
            <h4>Modern and Classy Furniture</h4>
          </div>
          <div className="p">
            <p>Choose from handmade well-crafted quality wooden funiture</p>
          </div>
          <button className="btn">See More</button>
        </div>
        <div className="hero-img flex column ">
          <img src={chair} className="img" alt="t" />
          <div className="shadow"></div>
        </div>
      </div>
      <div className="scroll flex row ">
        <div className="container flex column ">
          <div className="p zero">
            <p>Wood</p>
          </div>
          <div
            className="img-div flex row spacebetween flexend"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="star flex">
              <ul className="flex row zero">
                <li>
                  <img src={star} alt="s" />
                </li>
                <li>
                  <img src={star} alt="s" />
                </li>
                <li>
                  <img src={star} alt="s" />
                </li>
                <li>
                  <img src={star} alt="s" />
                </li>
                <li>
                  <img src={star} alt="s" />
                </li>
              </ul>
            </div>
            <button className="btn green">Customize</button>
          </div>
        </div>
      </div>
    </div>
  );
}
