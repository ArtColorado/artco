import { createContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
// import { ADD_ARTWORK } from "../../utils/mutations";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

// function to UseMation

function CloudinaryUploadWidget({
  uwConfig,
  setPublicId,
  title,
  stock,
  description,
  category,
}) {
  const [loaded, setLoaded] = useState(false);

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
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
            console.log(result.info.url);
            console.log(result.info.secure_url);
            const imageURL = results.info.secure_url;
            // call handler function and pass the URL from result
            try {
              const { data } = addArtwork({
                variables: { title, stock, description, category, imageURL },
              });
            } catch (err) {
              console.error(err);
            }
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

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
