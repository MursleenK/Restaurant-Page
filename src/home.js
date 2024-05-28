import {homeButton, menuButton, aboutButton, parent, currentChild} from "./common";

let homeFunction = function() { 
    homeButton.addEventListener("click", ()=>{

    parent.removeChild (currentChild[0]);

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");
    parent.appendChild(homeContainer);

    const offerTitle = document.createElement("div");
    offerTitle.classList.add("offerTitle");
    offerTitle.textContent=`Special Fried Chicken!`
    homeContainer.appendChild(offerTitle);
    
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent=`
    Indulge in the ultimate fried chicken experience with our Signature Special Fried Chicken.
    Indulge in the ultimate fried chicken experience with our Signature Special Fried Chicken.
        of herbs and spices for 24 hours to ensure maximum flavor.
    Each piece is hand-breaded in a light, crispy coating that delivers a perfect crunch
        with every bite.`
    homeContainer.appendChild(description);

    const buyButton = document.createElement("button");
    buyButton.classList.add("buyButton");
    buyButton.textContent=`Let's go!`
    homeContainer.appendChild(buyButton);
})
}

export default homeFunction;