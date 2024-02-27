"use strict";

export const home = document.querySelector(".home");

export const renderHomeHtml = function () {
  return `<div class="details">
  <div class="message">Welcome!</div>
  <div class="description">
    Serenity Table is a fusion restaurant in the heart of London! Immerse
    yourself in a culinary journey where global flavors harmonize in every
    bite. Our restaurant blends traditional techniques with innovative
    twists, creating a unique fusion dining experience.
  </div>
  <button class="btn-menu">Explore Menu</button>
</div>`;
};
