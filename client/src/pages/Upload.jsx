import { useState } from "react";
import CloudinaryUploadWidget from "../components/Upload/index";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

// import "./styles.css";

export default function App() {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("artco");
  // Replace with your own upload preset
  const [uploadPreset] = useState("artcolorado");
  // const [title, setTitle] = useState(props.title);
  // const [stock, setStock] = useState(props.stock);
  // const [description, setDescription] = useState(props.description);
  // const [category, setCategory] = useState(props.category);
  // console.log(
  //   `title: ${title}, stock: ${stock}, description: ${description}, category: ${category}`
  // );

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);

  return (
    <div className="App">
      <div className="text-center">
        <h3>Add your art to your profile here.</h3>
      </div>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />

      <div className="text-center" style={{ width: "100%" }}>
        <AdvancedImage
          style={{ maxWidth: "100%", maxHeight: "300px" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
    </div>
  );
}
