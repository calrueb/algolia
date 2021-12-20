import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "SH1EB5XM7P",
  "8b2904a7e315e5e4c4503d5dd0236f5e"
);

const App = () => (
  <InstantSearch indexName="test_billionaires" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default App;
