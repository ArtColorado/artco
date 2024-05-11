import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { useQuery } from "@apollo/client";
import { useTheme } from "../utils/themeContext";
import Home from "./Home";
import "../index.css";
import { QUERY_ARTWORK } from "../utils/queries";

const Categories = ({ prop }) => {
  const [state, dispatch] = useTheme();

  const themeStyle2 = {
    borderColor: state.darkTheme ? "var(--brown-4)" : "white",
    boxShadow: state.darkTheme
      ? "2px 2px 5px var(--brown-9)"
      : "2px 2px 5px var(--brown-2)",
    background: state.darkTheme ? "var(--brown-3)" : "white",
  };

  const { data } = useQuery(QUERY_ARTWORK);
  let artwork;

  if (data) {
    artwork = data.artwork;
  }

  console.log({ prop });

  return (
    <Container className="site-width">
      <Row className="px-2">
        {/* This select box should default to 'Choose a category' when navigated to through the navbar, otherwise it should populate with the correct category if navigated here by clicking on a category from the Home page */}
        <Form.Select size="lg" value={prop}>
          <option>Choose a category</option>
          <option value="jewelry">Jewelry</option>
          <option value="painting">Painting</option>
          <option value="photography">Photography</option>
          <option value="pottery">Pottery</option>
          <option value="textile">Textile</option>
          <option value="woodworking">Woodworking</option>
        </Form.Select>
      </Row>
      <Row>
        {/* This row should populate with any art that is associated with the selected category */}
        {artwork ? (
          <>
            {artwork.category.map(({}, index) => (
              <Col id="artwork-category" xs={12} md={4} lg={3}>
                <Link to="#">
                  <Image
                    style={themeStyle2}
                    src={`${artwork.imageURL}`}
                    rounded
                    thumbnail
                    fluid
                  />
                </Link>
              </Col>
            ))}
          </>
        ) : null}
        <Col id="artwork-category" xs={12} md={4} lg={3}>
          <Link to="#">
            <Image
              style={themeStyle2}
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
              style={themeStyle2}
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
              style={themeStyle2}
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
              style={themeStyle2}
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
              style={themeStyle2}
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
              style={themeStyle2}
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
