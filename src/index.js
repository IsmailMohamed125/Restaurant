"use strict";

import "./stylesheets/home.css";
import "./stylesheets/menu.css";
import "./stylesheets/about.css";
import { renderHomeHtml, home } from "./tabs/home.js";
import { renderMenuHtml, menu } from "./tabs/menu.js";
import { renderContactHtml, about } from "./tabs/contact.js";

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

about.addEventListener("click", function () {
  content.innerHTML = "";
  content.insertAdjacentHTML("beforeend", renderContactHtml());
});
