import { Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json`
    );
    setContent(data?.data?.slice(0, 20));
  };

  useEffect(() => {
    if (!content.length) fetchMovies();
  }, []);

  return (
    <div>
      <span
        style={{
          marginBottom: 50,
          color: " black",
          fontWeight: "bold",
        }}
        className="pageTitle"
      >
        Find Your Favorite Movies
      </span>

      <Grid container spacing={6}>
        {content?.map((c) => (
          <SingleContent
            key={c.id}
            poster={c.poster}
            date={c.crawled_at}
            title={c.title || c.name}
            description={c.description}
            directed_by={c.directed_by}
            id={c.id}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Movies;
