"use strict";

export const about = document.querySelector(".about");

export const renderContactHtml = function () {
  return `<div class="contacts">
  <div class="contact">
    <div class="contact-title">Contact</div>
    <form class="contact-form">
      <label for="name">Full Name</label>
      <input type="text" id="name" class="name" />
      <label for="email">Email</label>
      <input type="email" id="email" class="email" />
      <textarea id="textarea" cols="30" rows="7"></textarea>
      <button class="btn-form">Submit</button>
    </form>
  </div>
  <div class="location">
    <div class="location-title">Address</div>
    <div class="address">
      <span class="street">123 Fake Street</span>
      <span class="city">London, United Kingdom</span>
      <span class="post">W1D 4AG</span>
    </div>
  </div>
  <div class="hours">
    <div class="hours-title">Hours</div>
    <ul class="times">
      <li class="time">MON-THU: 6pm to 11pm</li>
      <li class="time">FRI: 12pm to 11pm</li>
      <li class="time">SAT: 12pm to 11pm</li>
      <li class="time">SUN: 4pm to 11pm</li>
    </ul>
  </div>
</div>`;
};
