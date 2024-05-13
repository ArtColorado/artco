import { Col, Container, Row, Image } from "react-bootstrap";

import Cloudinary from "./Upload";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../utils/themeContext";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_USER } from "../utils/queries";
import "./profile.css";
import Auth from "../utils/auth";

const Profile = () => {
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

  //Need to pull in a user and set it up to pull keys from it for data
  //Where will the user's _id be pull in from?

  const profile = Auth.getProfile().data;
  console.log(profile._id);
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: profile._id },
  });

  const user = data?.user || {};

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigations links to sign
        up or login!
      </h4>
    );
  }

  return (
    <Container className="site-width" style={themeStyles1}>
      <Row id="username" className="justify-content-center">
        {/* Pull in user's name */}
        <Col md="auto" className="text-center">
          <h1>{user.username}</h1>
        </Col>
      </Row>
      <Row id="user">
        {/* Pull in user's avatar/image */}
        <Col xs id="userImage">
          <Image
            src="/images/images-artists/Elizabeth_Zimmermann.jpg"
            fluid
            className="float-start"
            style={themeStyle2}
          />
          {user.artistData ? (
            <p>{user.artistData.bio}</p>
          ) : (
            <>
              <p>Are you a local Colorado artist?</p>
              <button>Add a brief bio</button>
            </>
          )}
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
      {/* This button should only appear if this is the current user that is logged in */}
      <Row className="justify-content-center">
        <Col className="text-center mb-4">
          <Link to="/addArt">Add Artwork</Link>
        </Col>
      </Row>
      <Row style={{ height: "30px" }}></Row>
    </Container>
  );
};

export default Profile;
