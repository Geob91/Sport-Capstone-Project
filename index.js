import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

//import { getInputValues } from "./lib";

import { getFormDataFromIDs } from "./lib";

import { findPosition } from "./lib";

//console.log(getInputValues);

const router = new Navigo(location.origin);

//console.log(Header, Footer, Main, Nav);

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
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Position") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const stuff = getFormDataFromIDs(event.target.elements);
        const test = findPosition(
          stuff["height-cm"],
          stuff["weight-lbs"],
          stuff.speed
        );
        document.querySelector("#positionPlay").innerHTML = `${test}`;
        //  getInputValues();

        // console.log(findPosition(event.target.elements["Height-cm"]));

        // console.log(findPosition(event.target.elements["Weight-lbs"]));

        // console.log(findPosition(event.target.elements["speed"]));
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
