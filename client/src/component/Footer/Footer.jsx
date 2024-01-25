import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-flex">
        <div className="row1">
          <div className="col">
            <h4>Category</h4>
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
          <div className="col col1">
            <h4>Category</h4>
            <p>News</p>
            <p>World</p>
            <p>Games</p>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <h4>Business</h4>
            <p>Infoprenuer</p>
            <p>personal</p>
            <p>wiki</p>
          </div>
          <div className="col2">
            <h4>Subscribe for updates</h4>

            <div className="form-container">
              <input className="input" type="text" placeholder="Email" />
              <button className="btn2">subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        &copy;{new Date().getFullYear()} News Blog, Coded by Ukandie Sunday.
      </div>
    </footer>
  );
};

export default Footer;
