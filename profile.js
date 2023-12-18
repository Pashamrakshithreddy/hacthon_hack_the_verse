// JavaScript to generate points dynamically

const pointsContainer = document.getElementById("pointsContainer");

// Example points data
const pointsCount = 10; // Change this value to the number of points

// Generate points divs dynamically
for (let i = 0; i < pointsCount; i++) {
  const pointDiv = document.createElement("div");
  pointDiv.classList.add("point");
  pointsContainer.appendChild(pointDiv);
}
