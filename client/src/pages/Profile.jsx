import { Col, Container, Row, Image } from "react-bootstrap";
import Auth from "../utils/auth";
import Cloudinary from "./Upload";
import { Link } from "react-router-dom";
import "./profile.css";

import Artist from "./Artist";

const Profile = () => {
  return (
    <Container className="site-width">
      <Row id="username" className="justify-content-center">
        <Col md="auto" className="text-center">
          <h1>User/Artist Name</h1>
        </Col>
      </Row>
      <Row id="user">
        <Col xs id="userImage">
          <Image src="/images/images-artists/Elizabeth_Zimmermann.jpg" fluid className="float-start"/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          sunt excepturi odit dolor at. Facilis, odit. Enim aliquid dolorem
          delectus soluta quisquam id mollitia omnis veniam quidem cumque aut,
          repudiandae, dolor saepe provident nemo iste non dolores nobis est ad
          explicabo quo. Odit, ab vero eaque incidunt necessitatibus ea quam
          unde doloremque provident eveniet mollitia esse quo est inventore
          soluta quaerat molestiae. Dicta accusamus qui, asperiores corrupti
          iste placeat facilis, explicabo, nam provident officia vel laudantium
          magnam eligendi est libero odio sint nemo tenetur beatae deleniti ipsa
          porro? Nemo laudantium quisquam facilis maiores ea praesentium
          doloremque modi quis laborum itaque.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <h2>Upcoming Events</h2>
          <ul>
            <Link to="#">
              <li>Event 1</li>
            </Link>
            <Link to="#">
              <li>Event 2</li>
            </Link>
            <Link to="#">
              <li>Event 3</li>
            </Link>
          </ul>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row id="gallery">
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
      <Row className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <Cloudinary />
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
};

export default Profile;
