/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Amnish Singh Arora
 *      Student ID: 120097217
 *      Date:       22/03/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { categories } = window;

/* Product Functions */

/* Functions for creating menu */
function addButton(node, category) {
  // Creating the button
  var button = document.createElement("button");
  // button.appendChild(document.createTextNode(category.name));
  button.innerHTML = category.name;
  button.id = category.id;
  button.onclick = function () {
    location.href = "/" + category.name
  };
  node.appendChild(button);
}

function addCategoryButtons(node) {
  for (let category of categories) {
    addButton(node, category);
  }
}

/* Setup Functions */
// To be called when statuc objects are done loading
function setup() {
  // Creating the menu
  addCategoryButtons(document.querySelector("#menu"));
}

window.onload = setup;
