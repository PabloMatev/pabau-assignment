import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import { LOAD_MISSIONS } from "../GraphQL/Queries";

import MissionCard from "./MissionCard";

function Missions() {
  const { data, loading, error } = useQuery(LOAD_MISSIONS);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data.launchesPast);
      setMissions(data.launchesPast);
    }
  }, [data]);
  return (
    <Container>
      <Grid container spaciung={3} margin="1em">
        {missions.map((mission) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={mission.id} padding="1em">
              <MissionCard mission={mission} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );

  // <div>
  //           <Card>
  //             <CardMedia
  //               component="img"
  //               height="140"
  //               alt="launchimg"
  //               image={mission.links.flickr_images[0]}
  //             />
  //           </Card>
  //           <CardContent>
  //             <Typography gutterBottom variant="h5" component="div">
  //               Mission Id: {mission.mission_id} Mission Name:{" "}
  //               {mission.mission_name}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Mission Details: {mission.details}
  //             </Typography>
  //           </CardContent>
  //         </div>;
  // //   <div>
  //     <select name="user">
  //       {data.users.map((user) => {
  //         <option key={user.id} value={user.id}>
  //           asd
  // description
  //     manufacturers
  //     name
  //     wikipedia
  //     id
  //         </option>;
  //       })}
  //     </select>
  //   </div>
  // );

  // {data.dogs.map(dog => (
  //   <option key={dog.id} value={dog.breed}>
  //     {dog.breed}
  //   </option>
  // ))}
}
export default Missions;
