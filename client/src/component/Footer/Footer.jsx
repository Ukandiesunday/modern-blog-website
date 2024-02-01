import "./Footer.css";
import { FaBell } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-flex">
          <div className="row1">
            <div className="col">
              <h4>Quick Links</h4>
              <p>News</p>
              <p>World</p>
              <p>Games</p>
              <p>References</p>
            </div>
            <div className="col">
              <h4>Apples</h4>
              <p>Web</p>
              <p>Ecommerce</p>
              <p>Business</p>
              <p>Entertainment</p>
            </div>
          </div>
          <div className="row2">
            <div className="col col1">
              <h4>Category</h4>
              <p>Tech</p>
              <p>Security</p>
              <p>Health</p>
              <p>Startups</p>
            </div>
            <div className="col">
              <h4>Business</h4>
              <p>Infoprenuer</p>
              <p>personal</p>
              <p>wiki</p>
            </div>
          </div>
          <div className="row3">
            <div className="col2">
              <h4>Subscribe for updates</h4>

              <div className="form-container">
                <input className="input" type="text" placeholder="Email" />
                <button className="btn2">
                  <FaBell />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy">
          &copy;{new Date().getFullYear()} News Blog, Coded by Ukandie Sunday.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
