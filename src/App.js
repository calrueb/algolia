import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import Hit from "./Hit";

const searchClient = algoliasearch(
  "SH1EB5XM7P",
  "8b2904a7e315e5e4c4503d5dd0236f5e"
);

const App = () => (
  <div>
    <h1>Fake Forbes Billionaire List</h1>
    <InstantSearch indexName="test_billionaires" searchClient={searchClient}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </div>
);

export default App;
