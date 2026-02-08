const container = document.querySelector("#container");

function createGrid(size) {
    // Clear existing grid first (helpful for the reset button later)
    container.innerHTML = "";

    // Calculate the width/height of each square
    const squareSize = 960 / size;

    // Create (size * size) total squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        // Set dynamic width and height
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect
        square.addEventListener("mouseover", changeColor);

        container.appendChild(square);
    }
}

// Initialize default 16x16 grid
createGrid(16);

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
    let newSize = prompt("Enter number of squares per side (max 100):");
    
    // Validation
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100");
    }
});