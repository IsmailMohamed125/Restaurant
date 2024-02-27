"use strict";

import "./stylesheets/home.css";
import "./stylesheets/menu.css";
import { renderHomeHtml, home } from "./tabs/home.js";
import { renderMenuHtml, menu } from "./tabs/menu.js";

const content = document.querySelector("#content");

content.insertAdjacentHTML("beforeend", renderHomeHtml());

home.addEventListener("click", function () {
  content.innerHTML = "";
  content.insertAdjacentHTML("beforeend", renderHomeHtml());
});

menu.addEventListener("click", function () {
  content.innerHTML = "";
  content.insertAdjacentHTML("beforeend", renderMenuHtml());
});
