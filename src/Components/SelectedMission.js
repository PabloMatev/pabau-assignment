import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ROCKET } from "../GraphQL/Queries";
import { useParams } from "react-router";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SelectedMission() {
  let params = useParams();
  const { data, loading, error } = useQuery(LOAD_ROCKET, {
    variables: { rocketId: params.id },
  });
  const [rocket, setRocket] = useState([]);
  const [rocketImg, setRocketImg] = useState([]);
  useEffect(() => {
    if (data) {
      setRocket(data.launchesPast[1].rocket.rocket);
      setRocketImg(data.launchesPast[1].links.flickr_images[0]);
    }
  }, [data]);

  if (loading) return "Loading...";
  if (error) return "Error" + error;
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/",
        }}
      >
        Back To Missions
      </Link>

      <Grid item xs={12} md={6} lg={12} padding="1em">
        <Card elevation={1}>
          <CardMedia
            component="img"
            height="500"
            alt="rocket"
            image={rocketImg.toString()}
          />
          <CardHeader title={rocket.name} />
          <CardContent>
            <Typography align="justify" variant="body1" color="textSecondary">
              {rocket.description}
            </Typography>
            <Typography align="justify" variant="body1" color="textSecondary">
              Created by {rocket.country}
            </Typography>
            <Typography align="justify" variant="body1" color="textSecondary">
              The cost of a single launch is ${rocket.cost_per_launch} USD
            </Typography>
            <Typography align="justify" variant="body1" color="textSecondary">
              Owned by {rocket.company}
            </Typography>
            <a href={rocket.wikipedia}>Learn More</a>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
