const present = document.getElementById("presentBox");
const clickText = document.getElementById("clickText");
const greetingContainer = document.getElementById("greeting-container");
const readMessageBtn = document.getElementById("readMessageBtn");

function sparkleOnce() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const rect = greetingContainer.getBoundingClientRect();
  // Random x and y between -30px and +30px for nice spread
  const x = (Math.random() - 0.5) * 60 + "px";
  const y = (Math.random() - 0.5) * 60 + "px";

  sparkle.style.setProperty("--x", x);
  sparkle.style.setProperty("--y", y);

  // Position sparkle relative to greeting container
  // We'll place it randomly inside the container's bounding box
  const posX = Math.random() * rect.width;
  const posY = Math.random() * rect.height;

  sparkle.style.left = `${posX}px`;
  sparkle.style.top = `${posY}px`;

  greetingContainer.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

let sparkleInterval;

function startContinuousSparkles() {
  sparkleInterval = setInterval(sparkleOnce, 150);
}

function stopContinuousSparkles() {
  clearInterval(sparkleInterval);
}

function handleClick() {
  // Hide present and click text
  present.style.display = "none";
  clickText.style.display = "none";

  // Show greeting container and start sparkles
  greetingContainer.classList.remove("hidden");
  startContinuousSparkles();
}

// Event listeners for mouse and keyboard accessibility
present.addEventListener("click", handleClick);
clickText.addEventListener("click", handleClick);

present.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick();
  }
});

clickText.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick();
  }
});

// Read message button alert
readMessageBtn.addEventListener("click", () => {
  alert(
    "Am sorry for everything I did yesterday, I will try my best to never make you sad again. I also have a little gift for you later :). I know it’s not much these 2 little gifts but I hope you know I genuinely mean happiness for you wherever you lean to. Morning dummy xD and don't you DARE GO AWWWW 🥚✨"
  );
});
