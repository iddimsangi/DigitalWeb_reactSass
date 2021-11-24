import logo from "../images/demo-logo.png";
import play from "../images/play.png";
import homeImg from "../images/home2.png";
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
      </header>
    </div>
  );
}

export default App;
