const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color-picker");
const brushSize = document.getElementById("brush-size");
const clearCanvasButton = document.getElementById("clear-canvas");
const saveImageButton = document.getElementById("save-image");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let isDrawing = false;
let currentColor = "#000000";
let currentBrushSize = 5;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentBrushSize;
    ctx.lineCap = "round";
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener("mouseout", () => {
    isDrawing = false;
    ctx.closePath();
});

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
});

brushSize.addEventListener("input", (e) => {
    currentBrushSize = e.target.value;
});

clearCanvasButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveImageButton.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png";
    link.click();
});
