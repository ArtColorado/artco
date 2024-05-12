import "./artwork.css";
import { useQuery } from "@apollo/client";
import { QUERY_ARTWORK } from "../../utils/queries";

const Artwork = ({ category }) => {
  const { data } = useQuery(QUERY_ARTWORK);
  let artwork;

  if (data) {
    artwork = data.artwork;
  }

  function categoryArtwork() {
    if (artwork.category === category) {
      return (
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
      );
    } else {
      return null;
    }
  }

  return (
    // If there is artwork present in the query, it will need to be mapped through and then rendered if it matches the category that has been chosen.
    <>
      {artwork ? (
        <>{artwork.category.map(({}, index) => categoryArtwork())}</>
      ) : null}
    </>
  );
};
export default Artwork;
