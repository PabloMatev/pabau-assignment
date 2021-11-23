import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_MISSIONS } from "../GraphQL/Queries";

function Missions() {
  const { data, loading, error } = useQuery(LOAD_MISSIONS);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setMissions(data.missions);
    }
  }, [data]);
  return (
    <div>
      {missions.map((mission) => {
        return (
          <div onClick={() => console.log("hello")}>
            <h6>{mission.name}</h6>
            <h6>{mission.wikipedia}</h6>
            <h6>{mission.id}</h6>
            {/* <h6>{mission.name}</h6>
            <h6>{mission.name}</h6> */}
          </div>
        );
      })}
    </div>
  );

  //   <div>
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
