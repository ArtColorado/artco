import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Auth from "../utils/auth";

import Artist from "./Artist";

// Frida Kahlo is being used here as an example for layout building
const Profile = () => {
  return (
    <Container>
      <Row id="username" className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <h1>User/Artist Name</h1>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row id="user">
        <Col xs lg="2" id="userImage">
          <Image
            src="https://i.natgeofe.com/n/128c169c-2fbe-4a53-b48c-ec92d1357660/05-frida-kahlo-difficult-women_square.jpg"
            fluid
          />
        </Col>
        <Col id="userBio">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          sunt excepturi odit dolor at. Facilis, odit. Enim aliquid dolorem
          delectus soluta quisquam id mollitia omnis veniam quidem cumque aut,
          repudiandae, dolor saepe provident nemo iste non dolores nobis est ad
          explicabo quo. Odit, ab vero eaque incidunt necessitatibus ea quam
          unde doloremque provident eveniet mollitia esse quo est inventore
          soluta quaerat molestiae. Dicta accusamus qui, asperiores corrupti
          iste placeat facilis, explicabo, nam provident officia vel laudantium
          magnam eligendi est libero odio sint nemo tenetur beatae deleniti ipsa
          porro? Nemo laudantium quisquam facilis maiores ea praesentium
          doloremque modi quis laborum itaque.
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row id="gallery">
        <Col>
          <Image
            src="https://cdn.thecollector.com/wp-content/uploads/2022/09/the-bus-frida-kahlo-1929.jpg?width=1080&quality=55"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="https://cdn.thecollector.com/wp-content/uploads/2022/09/frida-kahlo-self-portrait-in-a-velvet-dress-1926.jpg?width=1080&quality=55"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="https://cdn.thecollector.com/wp-content/uploads/2022/09/frida-kahlo-self-portrait-time-flies-1929.jpg?width=1080&quality=55"
            fluid
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <Button variant="success">Add Image</Button>{" "}
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
};

export default Profile;
