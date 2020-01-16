import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

import { getFormDataFromIDs } from "./lib";

const router = new Navigo(location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer(st)}`;

  router.updatePageLinks();
}

router
  .on(":page", params => {
    render(state[capitalize(params.page)]);
    // Slice off the slash and check where we are.
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Position") {
      // There will be a 'form' on this 'page.'
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        // TODO: Add this object to state and/or pass it into some fxn. to figure position, etc.
        console.log(getFormDataFromIDs(event.target.elements));
      });
    }
  })
  .on("/", render())
  .resolve();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(results => {
//     state.Position.posts = results.data;
//     console.log(results);
//   })
//   .catch(error => console.log(error));
