import { Header, Nav, Main, Footer } from "./components";

//console.log(Header, Footer, Main, Nav);

const state = {
  Home: {
    heading: "Home"
  },
  TheRules: {
    heading: "The Rules"
  },
  WhatPositionareyou: {
    heading: "What Position are you?"
  },
  Contact: {
    heading: "Contact me"
  }
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}`;

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      render(state[event.target.textContent]);
    });
  });
}

render();
