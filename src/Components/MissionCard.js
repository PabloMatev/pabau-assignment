import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function MissionCard({ mission }) {
  let shortenedDetails;
  let details = mission.details;
  let length = 371;
  if (mission.details === null) {
    shortenedDetails = mission.details;
  } else {
    shortenedDetails = details.substring(0, length);
  }

  function clickCard() {
    return (window.location.href = "/" + mission.rocket.rocket.id);
  }

  return (
    <div>
      <Card
        elevation={1}
        onClick={() => {
          clickCard();
        }}
      >
        <CardMedia
          component="img"
          height="140"
          alt="launchimg"
          image={mission.links.flickr_images[0]}
        />
        <CardHeader title={mission.mission_name} />
        <CardContent>
          <Typography align="justify" variant="body2" color="textSecondary">
            {shortenedDetails}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
