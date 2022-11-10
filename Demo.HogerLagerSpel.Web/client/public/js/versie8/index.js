import Spel from "./spel.js";

const spelHtmlElement = document.getElementById("spel");
const spel = new Spel(spelHtmlElement);
spel.startSpel();
spel.render();