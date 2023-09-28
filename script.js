
// cursor
const imageContainer = document.getElementById('image-container');
const hoverImage = document.getElementById('hover-img');
const parameterDisplay = document.getElementById('parameter-display');
let isHovering = false;

imageContainer.addEventListener('mouseenter', () => {
    isHovering = true;
    parameterDisplay.textContent = "beagle!";

});

imageContainer.addEventListener('mouseleave', () => {
    isHovering = true;
    parameterDisplay.textContent = "bagel...";
});
