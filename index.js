import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

//import { weightConverter, heightConverter } from "./lib";

console.log("Navigo");

console.log(location.pathname.slice(1));

const router = new Navigo(location.origin);

//console.log(Header, Footer, Main, Nav);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}`;
  router.updatePageLinks();
  //addEvents();
}

router
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .resolve();

render();

// function addEvents() {
//   const heightCm = document.querySelector("#height-cm");
//   heightCm.addEventListener("input", textInput => {
//     console.log(textInput);
//     return heightConverter(textInput);
//   });
// }

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Position.posts = results.data;
    console.log(results);
  })
  .catch(error => console.log(error));
