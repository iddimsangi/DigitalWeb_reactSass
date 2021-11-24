import logo from "../images/demo-logo.png";
import play from "../images/play.png";
import homeImg from "../images/home2.png";
import wave from "../images/wave1.png";
import servc1 from "../images/service1.png";
import servc2 from "../images/service2.png";
import servc3 from "../images/service3.png";
import technology from "../images/network.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header--nav">
          <img src={logo} alt="logo" className="App-logo" />
          <ul className="App-header--nav-links">
            <li>
              <a href="#">Home</a>
            </li>{" "}
            <li>
              <a href="#">services</a>
            </li>{" "}
            <li>
              <a href="#">about us</a>
            </li>{" "}
            <li>
              <a href="#">testimonials</a>
            </li>{" "}
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <div className="App-header--homepage">
          <div className="hompage--content">
            <h1>
              best digital agency{" "}
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </span>
            </h1>
            <div>
              <img src={play} alt="play-image" />
              <p>Watch Tutorials</p>
            </div>
          </div>
          <img src={homeImg} alt="home-img" className="home-img" />
        </div>
        <img src={wave} alt="wave-img" className="App-header--wave" />
      </header>
      <div className="About-section">
        <h1 className="heading">what we do ?</h1>
        <div className="About-section--details">
          <div className="About-section--details--detail">
            <img src={servc1} alt="service-1" />
            <div>
              <h3>growing marketing</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
            </div>
          </div>
          <div className="About-section--details--detail">
            <img src={servc2} alt="service-1" />
            <div>
              <h3>online branding</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
            </div>
          </div>
          <div className="About-section--details--detail">
            <img src={servc3} alt="service-1" />
            <div>
              <h3>animated ads</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          all services
        </a>
      </div>
      <div className="why-section">
        <h1 className="heading">why choose us ?</h1>
        <div className="why-section--content">
          <div>
            <h1>why we're different</h1>
            <ul>
              <li>Contrary to popular is not simply </li>
              <li>Conneed to be sure there isn't anything </li>
              <li>Cocomes from sections 1.10.32 and 1.10.33 o </li>
              <li>Contrary to popular belief, Lorem Isimply </li>
              <li>Contrary to t simply </li>
              <li>versions from the 1914 translation by H. Rackham. </li>
              <li>Contrary , Lorem Ipsum is not simply </li>
            </ul>
          </div>
          <img src={technology} alt="technology image" />
        </div>
      </div>
    </div>
  );
}

export default App;
