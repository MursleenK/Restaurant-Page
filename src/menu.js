import {homeButton, menuButton, aboutButton, parent, currentChild} from "./common";

let menuFunction = function() { 
    menuButton.addEventListener("click", ()=>{

    parent.removeChild (currentChild[0]);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    parent.appendChild(menuContainer);

    const specialties = document.createElement("div");
    specialties.classList.add("specialties");
    menuContainer.appendChild(specialties);
    specialties.innerHTML += '<div>Specialties</div>'
    specialties.innerHTML += '<ul>Signature Fried Chicken</ul>'
    specialties.innerHTML += '<li>Classic | Spicy | Buttermilk</li>'
    specialties.innerHTML += '<ul>Crispy Chicken Wings</ul>'
    specialties.innerHTML += '<li>Buffalo | BBQ | Korean-Style</li>'

    const combos = document.createElement("div");
    combos.classList.add("combos");
    menuContainer.appendChild(combos);
    combos.innerHTML += '<div>Combos</div>'
    combos.innerHTML += '<ul>Two-Piece Combo</ul>'
    combos.innerHTML += '<li>Chicken, one side, and a biscuit</li>'
    combos.innerHTML += '<ul>Family Bucket</ul>'
    combos.innerHTML += '<li>Eight pieces, four sides, and four biscuits</li>'

    const desserts = document.createElement("div");
    desserts.classList.add("desserts");
    menuContainer.appendChild(desserts);
    desserts.innerHTML += '<div>Desserts</div>'
    desserts.innerHTML += '<li>Apple Pie</li>'
    desserts.innerHTML += '<li>Chocolate Lava Cake</li>'

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");
    menuContainer.appendChild(drinks);
    drinks.innerHTML += '<div>Drinks</div>'
    drinks.innerHTML += '<li>Iced Tea</li>'
    drinks.innerHTML += '<li>Soft Drinks</li>'
    drinks.innerHTML += '<li>Milkshakes</li>'

})
}

export default menuFunction;