import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

import { getInputValues } from "./lib";

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
    if (router.lastRouteResolved().url === "./position") {
      getInputValues();
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
