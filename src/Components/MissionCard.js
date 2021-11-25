import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

export default function MissionCard({ mission }) {
  let shortenedDetails;
  let details = mission.details;
  let length = 371;
  if (mission.details === null) {
    shortenedDetails = mission.details;
  } else {
    shortenedDetails = details.substring(0, length);
  }

  let img = "";
  if (mission.links.flickr_images[0]) {
    img = mission.links.flickr_images[0];
  } else {
    img =
      "https://www.zurich.com/-/media/project/zurich/dotcom/services/images/404-error-glitch.gif?rev=e856417eaeb14ba9b64a875122e1f526&hash=8594D758B8D0DE4FB5E371F950BCE24A";
  }
  return (
    <div>
      <Link
        to={{
          pathname: "/" + mission.rocket.rocket.id,
        }}
        style={{ textDecoration: "none" }}
      >
        <Card elevation={1}>
          <CardMedia component="img" height="140" alt="launching" image={img} />
          <CardHeader title={mission.mission_name} />
          <CardContent>
            <Typography align="justify" variant="body2" color="textSecondary">
              {shortenedDetails}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
