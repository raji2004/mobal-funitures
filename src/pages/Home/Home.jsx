import Nav from "../../components/Nav/Nav";
import chair from '../../assets/chair.png'
import "./Home.css";

export default function Home() {
  return (
    <div>
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
            <div className="hero-img ">
              <img src={chair} className="img"alt="t" />
              <div className="shadow"></div>
            </div>
        </div>
        <div className="scroll flex row">

        </div>
    </div>
  );
}
