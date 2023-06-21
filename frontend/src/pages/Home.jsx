import './Home.css'
import img from '../images/feature-image.webp'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home ">
        <div className="hc">
          <div className="home-img">
            <p>
              Welcome To <span>HIGHLAND</span> Cafe
            </p>
          </div>
          <div className="home-description">
            <h1>Black Coffee is Awesome</h1>
            <p>Time to Discover a Coffee cup</p>

            <Link to="/booking">
              <button className="btn-book">Book a Table</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="home--wrapper">
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>CROISSANT</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>FRENCH TOAST</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>CHOCOLATE</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>TURKISH COFFEE</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
        </div>
        <div className="home--img">
          <img src={img} alt="side-image" />
        </div>
        <div className="home--wrapper">
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>AMERICANO</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>CAFE LATTE</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>MOCHA</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
          <div className="home-details">
            <div className="s1"></div>
            <div className="explanations">
              <h4>ICE COFFEE</h4>
              <p>
                This is the perfect place to find a nice and cozy spot to sip
                some
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home