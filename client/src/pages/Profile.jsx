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
      {/* This button should only appear if this is the current user that is logged in */}
      <Row className="justify-content-center">
        <Col className="text-center mb-4">
          <Link to="/addArt">Add Artwork</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
