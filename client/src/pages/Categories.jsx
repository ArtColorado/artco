import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Container>
      <Row>
        {/* This select box should default to 'Choose a category' when navigated to through the navbar, otherwise it should populate with the correct category if navigated here by clicking on a category from the Home page */}
        <Form.Select size="lg">
          <option>Choose a category</option>
          <option value="1">Jewelry</option>
          <option value="2">Painting</option>
          <option value="3">Photography</option>
          <option value="4">Pottery</option>
          <option value="5">Textile</option>
          <option value="6">Woodworking</option>
        </Form.Select>
      </Row>
      <Row>
        {/* This row should populate with any art that is associated with the selected category */}
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Andy_Warhol_Pom.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Andy_Warhol_Self-Portrait.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Andy_Warhol_Skulls.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Claude_Monet_Agapanthus.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Claude_Monet_La_Grenouillére.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              src="/images/images-artwork/Claude_Monet_On_the_Bank_of_the_Seine.jpg"
              rounded
              thumbnail
              fluid
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
