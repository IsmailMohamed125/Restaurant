"use strict";

import "./stylesheets/home.css";
import { renderHomeHtml, home } from "./tabs/home.js";

const content = document.querySelector("#content");

content.insertAdjacentHTML("beforeend", renderHomeHtml());

home.addEventListener("click", function () {
  content.innerHTML = "";
  content.insertAdjacentHTML("beforeend", renderHomeHtml());
});
