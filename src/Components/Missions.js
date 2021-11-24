import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useQuery } from "@apollo/client";
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
  if (loading) return "Loading...";
  if (error) return "Error";
  return (
    <Container>
      <Grid container spaciung={3} margin="1em">
        {missions.map((mission) => {
          return (
            <Grid item xs={12} md={6} lg={4} padding="1em">
              <MissionCard mission={mission} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
export default Missions;
