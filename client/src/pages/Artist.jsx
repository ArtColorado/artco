import { Col, Container, Row, Image } from "react-bootstrap";
import AuthService from "../utils/auth";
import Cloudinary from "./Upload";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/themeContext";
import "./profile.css";

const Artist = () => {
  const [state, dispatch] = useTheme();

  const themeStyles1 = {
    color: state.darkTheme ? "var(--brown-0)" : "var(--brown-9)",
  };

  const themeStyle2 = {
    border: state.darkTheme ? "5px solid var(--brown-3)" : "5px solid white",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
  };

  return (
    <Container className="site-width" style={themeStyles1}>
      <Row id="username" className="justify-content-center">
        {/* Pull in artist's name */}
        <Col md="auto" className="text-center">
          <h1>Elizabeth Zimmerman</h1>
        </Col>
      </Row>
      <Row id="user">
        {/* Pull in artist's avatar/image */}
        <Col xs id="userImage">
          <Image
            src="/images/images-artists/Elizabeth_Zimmermann.jpg"
            fluid
            className="float-start"
            style={themeStyle2}
          />
          {/* Bio will be pulled in to populate this section */}
          <p>
            Elizabeth Zimmermann was a British-born hand knitting teacher and
            designer. She revolutionized the modern practice of knitting through
            her books and instructional series on American public television.
            Though knitting back and forth on rigid straight needles was the
            norm, she advocated knitting in the round using flexible circular
            needles to produce seamless garments and to make it easier to knit
            intricate patterns. She also advocated the Continental knitting
            method, claiming that it is the most efficient and quickest way to
            knit. During World War II, German or continental knitting fell out
            of favor in the UK and US due to its association with Germany. Many
            English-language books on knitting are in the English or American
            style. Elizabeth Zimmermann helped to re-introduce continental style
            knitting to the United States.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto" className="text-center">
          {/* This should populate events that include this artist */}
          <h2>Upcoming Events</h2>
          <ul>
            <Link to="/event">
              <li>Denver Arts & Crafts Fair</li>
            </Link>
            <Link to="/event">
              <li>Boulder Artists and Artisans</li>
            </Link>
            <Link to="/event">
              <li>Bailey Art Extravaganza!</li>
            </Link>
          </ul>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row id="gallery" className="text-center">
        {/* This should populate all the images of the artist's work */}
        <Col xs={12} md={6} lg={4}>
          <Image
            className="mb-3"
            style={themeStyle2}
            src="/images/images-artwork/Elizabeth_Zimmerman_Baby_Surprise_Jacket.jpg"
            fluid
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image
            className="mb-3"
            style={themeStyle2}
            src="/images/images-artwork/Elizabeth_Zimmerman_Contrast_Cardigan.jpg"
            fluid
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image
            className="mb-3"
            style={themeStyle2}
            src="/images/images-artwork/Elizabeth_Zimmerman_Knitting_Around.jpg"
            fluid
          />
        </Col>
      </Row>
      <Row style={{ height: "30px" }}></Row>
    </Container>
  );
};

export default Artist;
