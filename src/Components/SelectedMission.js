import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ROCKET } from "../GraphQL/Queries";
import { useParams } from "react-router";

export default function SelectedMission() {
  let params = useParams();
  var rocketId = params.id;

  const { data, loading, error } = useQuery(LOAD_ROCKET, {
    variable: { rocketId: rocketId },
  });

  if (loading) return "Loading...";
  // if (error) return "error";
  return (
    <div>
      <button onClick={() => console.log(data)}>hello</button>
    </div>
  );
}
