import "./About.css";
import Corress from "../../component/Correspondent/Corress";
const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="abt">
          <div className="abt-img-container">
            <div className="about-desc">
              <h4>about us</h4>
              <p>
                Get details about our daily posts. We get you fed with the
                latest updates.
              </p>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <div className="div1">
            <p>
              <b>uBlog was established in 15th march, 1996. </b>
              <br />
              The popularity of uBlog is a resultant effect of the production of
              reliable and up-to-date news. Our news publications are subject to
              thorough veracity by our team of editors for trustworthiness
              before final release. Our correspondence are well experienced in
              content creation and technical writing for decades through which
              many awards from different publications both for colleges and
              public are accorded. We've stood our grounds in the area of news
              publications and content creation. We post daily news feeds about
              Artificial Intelligence, Health related updates, security,
              startups, sports, entertainment, tech, apps etc.
            </p>
            <p className="p">
              <span style={{ color: "purple" }}>
                <i className="ri-cellphone-fill"></i> HAS A QUESTION?
              </span>
              :+2349154578495
            </p>
          </div>
        </div>
      </div>
      <div className="align-correspondent">
        <Corress />
      </div>
    </div>
  );
};

export default About;
