import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Missions from "./Components/Missions";
import { Route, Routes } from "react-router-dom";
import SelectedMission from "./Components/SelectedMission.js";

// const errorLink = onError(({ graphqlErrors }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message }) => alert(`Graphql error ${message}`));
//   }
// });

const link = from([
  // errorLink,
  new HttpLink({ uri: "https://api.spacex.land/graphql/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path=":id" element={<SelectedMission />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
