import "./artworkform.css";
import { Link } from "react-router-dom";

const artWorkForm = () => {
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  //   const handleInputChange = (e) => {
  //     const { target } = e;
  //     const inputType = target.name;
  //     const inputValue = target.value;

  //     if (inputType === "title") {
  //       setTitle(inputValue);
  //     } else if (inputType === "stock") {
  //       setStock(inputValue);
  //     } else if (inputType === "description") {
  //       setDescription(inputValue);
  //     } else {
  //       setCategorey(inputValue);
  //     }
  //   };

  const handleCreateArtworkInfoFormSubmit = (e) => {
    e.preventDefault();
    //useMutation for creating artwork and then redirect to cloudinary to add image or hidden to visible

    setTitle("");
    setStock("");
    setDescription("");
    setCategorey("");
  };
};

return (
  <Container>
    <Row>
      <form onSubmit={handleCreateArtworkInfoFormSubmit}>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Jewelry</option>
          <option>Painting</option>
          <option>Photography</option>
          <option>Pottery</option>
          <option>Textile</option>
          <option>Woodworking</option>
        </select>

        <button className="btn btn-lg" type="submit">
          Add Artwork Information
        </button>
      </form>
    </Row>
  </Container>
);
