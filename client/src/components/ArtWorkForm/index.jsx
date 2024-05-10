import "./artworkform.css";

const artWorkForm = () => {
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [categorey, setCategorey] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "title") {
      setTitle(inputValue);
    } else if (inputType === "stock") {
      setStock(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
    } else {
      setCategorey(inputValue);
    }
  };
};
