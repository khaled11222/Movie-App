import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SingleContent.css";

const SingleContent = ({
  poster,
  title,
  date,
  description,
  link,
  directed_by,
}) => {
  return (
    <Grid xs={6} item marginBottom={4}>
      <img className="poster" src={poster} alt={title} />
      <Box marginTop={1}>
        <b className="title">Name : {title}</b>
        <Typography>{description.substr(0, 300)}...</Typography>
        <p>
          Release Date : &nbsp;
          <span
            style={{
              color: "black",
            }}
          >
            {date}
          </span>
        </p>
        <Link href={link} target="_blank">
          Watch The Trailer : &nbsp;
          <Typography display="inline" color="secondary">
            {title}
          </Typography>
        </Link>
        <Typography>Directed By : {directed_by}</Typography>
      </Box>
    </Grid>
  );
};

export default SingleContent;
