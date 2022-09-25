const body = document.body;

// Create h1
const h1El = document.createElement("h1");
h1El.textContent = "Welcome to my page";
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// Image containder div
const infoEl = document.createElement("div");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

// Image element
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "http://placekitten.com/200/300");

// Text below image
const kittenEl = document.createElement("div");
kittenEl.textContent = "This is my kitten 🐱.";
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");

// Text below image
const nameEl = document.createElement("div");
nameEl.textContent = "His name is Jax.";
nameEl.setAttribute("style", "font-size:25px; text-align:center;");

// Div containing favourite food
const favoriteEl = document.createElement("div");
favoriteEl.textContent = "My favorite foods are:";
favoriteEl.setAttribute("style", "font-size:20px;");

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);

// Create ordered list element
const listEl = document.createElement("ol");

// Create ordered list items
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);

// TODO: Add ordered list items containing four favorite foods
