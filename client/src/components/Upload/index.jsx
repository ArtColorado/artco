import { createContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ARTWORK } from "../../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

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
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
      <br />
      <br />
      <br />
      {imageURL ? (
        <div>
          <form id="artworkInfo">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
            />
            <input
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              type="number"
              placeholder="stock"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="description"
            />
            <select
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
            </select>
            <button
              className="btn btn-lg"
              onClick={handleCreateArtworkInfoFormSubmit}
            >
              ADD ARTWORK
            </button>
          </form>
        </div>
      ) : null}
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
