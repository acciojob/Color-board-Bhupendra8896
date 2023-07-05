//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");

  // Generate 800 squares dynamically
  for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);

    // Add event listeners for hover and reset color after 1 second
    square.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "coral";
      setTimeout(() => {
        this.style.backgroundColor = "rainbow";
      }, 1000);
    });
  }
});

