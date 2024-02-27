"use strict";

export const menu = document.querySelector(".menu");

export const renderMenuHtml = function () {
  return `<div class="menus">
  <h1 class="title">Our Menu</h1>
  <div class="sections">
    <div class="section starter">
      <div class="section-title">Starters</div>
      <div class="container">
        <div class="item">
          <div class="item-title">Caprese Salad</div>
          <hr />
          <div class="item-price">£7</div>
        </div>
        <div class="ingredients">Tomatoes, Mozzarella cheese, Basil</div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Chicken Satay Skewers</div>
          <hr />
          <div class="item-price">£8</div>
        </div>
        <div class="ingredients">
          Chicken Breast, Peanut sauce, Soy sauce
        </div>
      </div>
    </div>
    <div class="section main">
      <div class="section-title">Main Course</div>
      <div class="container">
        <div class="item">
          <div class="item-title">Chicken Alfredo Pasta</div>
          <hr />
          <div class="item-price">£15</div>
        </div>
        <div class="ingredients">
          Chicken breast, Fettuccine pasta, Parmesan cheese
        </div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Vegetable Stir-Fry</div>
          <hr />
          <div class="item-price">£15</div>
        </div>
        <div class="ingredients">
          Assorted vegetables, Tofu, Soy sauce, Rice
        </div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Beef Bolognese</div>
          <hr />
          <div class="item-price">£15</div>
        </div>
        <div class="ingredients">
          Ground beef, Tomatoes, Onion, Spaghetti pasta
        </div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Grilled Salmon with Lemon-Dill Sauce</div>
          <hr />
          <div class="item-price">£15</div>
        </div>
        <div class="ingredients">
          Salmon fillets, Fresh dill, Lemon, Asparagus
        </div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Vegetarian Chickpea Curry</div>
          <hr />
          <div class="item-price">£15</div>
        </div>
        <div class="ingredients">
          Chickpeas, Onion, Tomatoes, Spices, Coconut milk
        </div>
      </div>
    </div>
    <div class="section dessert">
      <div class="section-title">Desserts</div>
      <div class="container">
        <div class="item">
          <div class="item-title">Chocolate Mousse</div>
          <hr />
          <div class="item-price">£8</div>
        </div>
        <div class="ingredients">Dark chocolate, Heavy cream, Eggs</div>
      </div>
      <div class="container">
        <div class="item">
          <div class="item-title">Tiramisu</div>
          <hr />
          <div class="item-price">£10</div>
        </div>
        <div class="ingredients">
          Ladyfingers, Espresso coffee, Mascarpone cheese, Chocolate grating
        </div>
      </div>
    </div>
  </div>
</div>`;
};
