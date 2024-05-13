import "./artist.css";
import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CREATE_ARTIST } from "../../utils/mutations";

const ArtistInfoForm = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const [createArtist, { error }] = useMutation(CREATE_ARTIST);

  const handleAddArtistInfo = (e) => {
    e.preventDefault();
    try {
      const { data } = createArtist({
        variables: {
          bio,
          name,
        },
      });
    } catch (err) {
      console.log(error);
    }
    window.location.assign("/me");
  };
  return (
    <>
      <Row>
        <Form id="artistInfo">
          <Form.Group className="form-group">
            <Form.Label className="form-label" style={{ width: "30%" }}>
              Name:
            </Form.Label>
            <Form.Control
              value={name}
              id="name"
              className="form-input"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name of Artist"
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label" style={{ width: "30%" }}>
              Bio:
            </Form.Label>
            <Form.Control
              value={bio}
              className="form-input"
              onChange={(e) => setBio(e.target.value)}
              type="text"
              placeholder="Bio - Let us know who you are and what inspires you!"
            />
          </Form.Group>
          <Form.Group className="form-button">
            <Button
              className="addArtistInfo"
              type="submit"
              id="artistInfo-submit-button"
              onClick={handleAddArtistInfo}
            >
              Register as Colorado Artist
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </>
  );
};

export default ArtistInfoForm;
