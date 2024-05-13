import { createContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ARTWORK } from "../../utils/mutations";
import { Link } from "react-router-dom";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import "./upload.css";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

// function to UseMation

function CloudinaryUploadWidget(props) {
  const [loaded, setLoaded] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [uploadPreset] = useState("artcolorado");
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  //create handlerfunction to call use mutation and create an artwork.

  const [addArtwork, { error }] = useMutation(ADD_ARTWORK);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        props.uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            props.setPublicId(result.info.public_id);
            setImageURL(result.info.secure_url);

            // call handler function and pass the URL from result
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  const handleCreateArtworkInfoFormSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(
        `title: ${title}, stock: ${stock}, description: ${description}, category: ${category}, imageURL: ${imageURL}`
      );
      console.log(Auth.getProfile().data);
      const { data } = addArtwork({
        variables: {
          title: title,
          stock: stock,
          description: description,
          category: category,
          imageURL: imageURL,
          artist: Auth.getProfile().data._id,
        },
      });
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Row className="my-2 form-button">
        <button
          id="upload_widget"
          style={{
            backgroundColor: "var(--brown-4)",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "10px",
          }}
          className="cloudinary-button"
          onClick={initializeCloudinaryWidget}
        >
          Upload your image
        </button>
      </Row>
      {imageURL ? (
        <div>
          <Form id="artworkInfo">
            <Form.Group className="form-group">
              <Form.Label className="form-label" style={{ width: "30%" }}>
                Title:
              </Form.Label>
              <Form.Control
                value={title}
                id="title"
                className="form-input"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label" style={{ width: "30%" }}>
                Number in Stock:
              </Form.Label>
              <Form.Control
                value={stock}
                className="form-input"
                onChange={(e) => setStock(e.target.value)}
                type="text"
                placeholder="stock"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label" style={{ width: "30%" }}>
                Description:
              </Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label" style={{ width: "30%" }}>
                Category:
              </Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option></option>
                <option>Jewelry</option>
                <option>Painting</option>
                <option>Photography</option>
                <option>Pottery</option>
                <option>Textile</option>
                <option>Woodworking</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form-button">
              <Link to="/me">
                <Button
                  className="addArtwork"
                  type="submit"
                  id="artwork-submit-button"
                  onClick={handleCreateArtworkInfoFormSubmit}
                >
                  Add Your Artwork
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </div>
      ) : null}
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
