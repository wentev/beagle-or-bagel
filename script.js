
// cursor
const imageContainer = document.getElementById('image-container');
const hoverImage = document.getElementById('hover-img');
const parameterDisplay = document.getElementById('parameter-display');
let isHovering = false;

imageContainer.addEventListener('pointerenter', () => {
    isHovering = true;
    parameterDisplay.textContent = "beagle!";

});

imageContainer.addEventListener('pointerleave', () => {
    isHovering = true;
    parameterDisplay.textContent = "bagel...";
});
