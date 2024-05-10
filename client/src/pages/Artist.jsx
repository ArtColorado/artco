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

  return (
    <Container className="site-width" style={themeStyles1}>
      <Row id="username" className="justify-content-center">
        {/* Pull in artist's name */}
        <Col md="auto" className="text-center">
          <h1>User/Artist Name</h1>
        </Col>
      </Row>
      <Row id="user">
        {/* Pull in artist's avatar/image */}
        <Col xs id="userImage">
          <Image
            src="/images/images-artists/Elizabeth_Zimmermann.jpg"
            fluid
            className="float-start"
          />
          {/* Bio will be pulled in to populate this section */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis sunt excepturi odit dolor at. Facilis, odit. Enim
            aliquid dolorem delectus soluta quisquam id mollitia omnis veniam
            quidem cumque aut, repudiandae, dolor saepe provident nemo iste non
            dolores nobis est ad explicabo quo. Odit, ab vero eaque incidunt
            necessitatibus ea quam unde doloremque provident eveniet mollitia
            esse quo est inventore soluta quaerat molestiae. Dicta accusamus
            qui, asperiores corrupti iste placeat facilis, explicabo, nam
            provident officia vel laudantium magnam eligendi est libero odio
            sint nemo tenetur beatae deleniti ipsa porro? Nemo laudantium
            quisquam facilis maiores ea praesentium doloremque modi quis laborum
            itaque.
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
              <li>Event 1</li>
            </Link>
            <Link to="/event">
              <li>Event 2</li>
            </Link>
            <Link to="/event">
              <li>Event 3</li>
            </Link>
          </ul>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row id="gallery">
        {/* This should populate all the images of the artist's work */}
        <Col>
          <Image
            src="/images/images-artwork/Elizabeth_Zimmerman_Baby_Surprise_Jacket.jpg"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="/images/images-artwork/Elizabeth_Zimmerman_Contrast_Cardigan.jpg"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="/images/images-artwork/Elizabeth_Zimmerman_Knitting_Around.jpg"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Artist;
