
// cursor
const imageContainer = document.getElementById('image-container');
const hoverImage = document.getElementById('hover-img');
const parameterDisplay = document.getElementById('parameter-display');
let isHovering = false;

imageContainer.addEventListener('mouseenter', () => {
    isHovering = true;
    parameterDisplay.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', () => {
    isHovering = true;
    parameterDisplay.style.display = 'none';
});

/*
// Create a temporary canvas element
const tempCanvas = document.createElement('canvas');
const ctx = tempCanvas.getContext('2d');

// Draw the image onto the canvas
tempCanvas.width = hoverImage.width;
tempCanvas.height = hoverImage.height;
ctx.drawImage(hoverImage, 0, 0, tempCanvas.width, tempCanvas.height);

imageContainer.addEventListener('mousemove', (e) => {
    const rect = tempCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Get the pixel data of the mouse position on the canvas
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    
    // Check if the pixel is transparent
    if (pixel[3] !== 0) {
        imageContainer.style.cursor = 'pointer'; // Change cursor style
        console.log("hey")
    } else {
        imageContainer.style.cursor = 'default'; // Reset cursor style
    }

});
*/
