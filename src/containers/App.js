import logo from "../images/demo-logo.png";
import play from "../images/play.png";
import homeImg from "../images/home2.png";
import wave from "../images/wave1.png";
import servc1 from "../images/service1.png";
import servc2 from "../images/service2.png";
import servc3 from "../images/service3.png";
import technology from "../images/network.png";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import instagram from "../images/instagram-icon.png";
import facebook from "../images/facebook-icon.png";
import linkedin from "../images/linkedin-icon.png";
import whatsapp from "../images/whatsapp-icon.png";
import snapchat from "../images/snapchat-icon.png";
import twitter from "../images/twitter-icon.png";
import location from "../images/location.png";
import email from "../images/icons8-email-64.png";
import caller from "../images/icons8-call-64.png";
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
      <div className="client-section">
        <h1 className="heading">what clients say</h1>
        <div className="clients">
          <blockquote>
            <p className="details">
              Alteration literature to or an sympathize mr imprudence. <br />
              Of is ferrars subject as enjoyed or tedious cottage.
              <br /> Procuring as in resembled by in agreeable.
            </p>
            <div className="client-profile">
              <img src={user1} alt="client-image" />
              <h4>
                Angelina <span>Co-founder at xyz</span>
              </h4>
            </div>
          </blockquote>
          <blockquote>
            <p className="details">
              Scarcely on striking packages by so property in delicate. Up
              <br /> or well must less rent read walk so be. Easy sold at do
              hour sing spot.
            </p>
            <div className="client-profile">
              <img src={user2} alt="client-image" />
              <h4>
                John Doe <span>Director at xyz</span>
              </h4>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="social-media">
        <h1 className="heading">find us on social media</h1>
        <div>
          <img src={facebook} alt="social media" />
          <img src={instagram} alt="social media" />
          <img src={twitter} alt="social media" />
          <img src={whatsapp} alt="social media" />
          <img src={linkedin} alt="social media" />
          <img src={snapchat} alt="social media" />
        </div>
      </div>
      <footer>
        <div className="footer-contents">
          <div className="footer-contents--box">
            <img src={logo} alt="logo-img"/>
            <p>
            Certainty determine at of arranging perceived situation or.<br/>
            Or wholly pretty county in oppose >Favour met  <br/>Favour met itself wanted settle<br/> put garret twenty. In astonished apartments
            </p>
          </div>
          <div className="footer-contents--box">
            <h4>contact us</h4>

            <div>
              <div>
                <img src={location} alt="icon" />
                <h5>World company ltd</h5>
              </div>
              <div>
              <img src={caller} alt="icon" />
                <h5>+1 23456908</h5>
              </div>
              <div>
              <img src={email} alt="icon" />
                <h5>imsangi@icloud.com</h5>
              </div>
            </div>

          </div>
          <div className="footer-contents--box">
            <h4>get in touch</h4>
            <input type="text" placeholder="your email"/>
            <a href="#" className="btn" >Subscribe</a>
          </div>
        </div>
        <div className="footer-copyright">
          <h4>This site is designed by iddiMsangi</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
