const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Drawing Variables
let drawing = false;
let currentTool = 'pencil'; // Default tool is pencil
let currentColor = '#000';  // Default color is black

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

// Drawing on mouse move
canvas.addEventListener('mousemove', (e) => {
    if (drawing && currentTool === 'pencil') {
        ctx.strokeStyle = currentColor;
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

// Color Picker
document.querySelectorAll('.color').forEach(colorElement => {
    colorElement.addEventListener('click', (e) => {
        currentColor = e.target.style.backgroundColor;
    });
});

// Tools
document.querySelector('.tools button:nth-child(1)').addEventListener('click', () => {
    currentTool = 'pencil';
});
document.querySelector('.tools button:nth-child(4)').addEventListener('click', () => {
    currentTool = 'eraser';
    ctx.strokeStyle = '#fff'; // Change color to white for erasing
});

// Collapsible Tools Section
const toolsToggle = document.getElementById('tools-toggle');
const toolsContent = document.getElementById('tools-content');

toolsToggle.addEventListener('click', () => {
    toolsContent.style.display = toolsContent.style.display === 'block' ? 'none' : 'block';
});