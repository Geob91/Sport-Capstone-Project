import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import { getFormDataFromIDs } from "./lib";

import { findPosition } from "./lib";

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
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Position") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const metric = getFormDataFromIDs(event.target.elements);
        const final = findPosition(
          metric["height-cm"],
          metric["weight-lbs"],
          metric.speed
        );
        document.querySelector("#positionPlay").innerHTML = `${final}`;
      });
    }
  })
  .on("/", render())
  .resolve();
