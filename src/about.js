import {homeButton, menuButton, aboutButton, parent, currentChild} from "./common";

let aboutFunction = function() { 
    aboutButton.addEventListener("click",()=>{

        parent.removeChild (currentChild[0]);

        const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("aboutContainer");
        parent.appendChild(aboutContainer);
    
        const aboutDescriptionHeading = document.createElement("div");
        aboutDescriptionHeading.classList.add("aboutDescriptionHeading");
        aboutDescriptionHeading.textContent=`Experience the Crunch: Welcome to Crispy Delights!`
        aboutContainer.appendChild(aboutDescriptionHeading);
        
        const aboutDescription = document.createElement("div");
        aboutDescription.classList.add("aboutDescription");
        aboutDescription.textContent=`
        Founded with a simple mission to bring joy to every bite, Crispy Delights has 
        quickly become a beloved destination for fried chicken enthusiasts and comfort food lovers alike.
    At Crispy Delights, we believe that great food starts with great ingredients. That’s why we meticulously 
        source the finest quality chicken, locally sourced whenever possible, and handpick the freshest herbs 
        and spices to create our signature marinades and batters.
    Thank you for joining us on this delicious journey. We can’t wait to welcome you to Crispy Delights 
        and share the joy of perfectly fried chicken with you.`
        aboutContainer.appendChild(aboutDescription);

        const location = document.createElement("div");
        location.classList.add("location");
        aboutContainer.appendChild(location);
        location.innerHTML += '<div>Location:</div>';
        location.innerHTML += '<div>Crispy Delights</div>'
        location.innerHTML += '<div>456 Fried Chicken Avenue</div>'
        location.innerHTML += '<div>Townsville</div>'

        const timing = document.createElement("div");
        timing.classList.add("timing");
        aboutContainer.appendChild(timing);
        timing.innerHTML += '<div>Hours of Operation:</div>';
        timing.innerHTML += '<div>Monday - Thursday: 11:00 AM - 9:00 PM</div>'
        timing.innerHTML += '<div>Friday - Saturday: 11:00 AM - 10:00 PM</div>'
        timing.innerHTML += '<div>Sunday: Closed</div>'
})
}
export default aboutFunction;