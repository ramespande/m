// Moving "No" button
function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES clicked
function yesClicked() {
  // Clear screen
  document.body.innerHTML = `
    <div style="
      text-align:center;
      margin-top:120px;
      font-family: Arial, sans-serif;
    ">
      <h1>YAYYYYY 🥹❤️</h1>
      <p>You just made me the happiest person alive.</p>
      <p>Happy Valentine’s Day 💘</p>
    </div>
  `;

  // Heart blast
  for (let i = 0; i < 80; i++) {
    setTimeout(createBlastHeart, i * 30);
  }
}

// ❤️ Heart blast logic
const hearts = ["❤️", "💖", "💕", "💘", "💗"];

function createBlastHeart() {
  const heart = document.createElement("div");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.position = "fixed";
  heart.style.left = "50%";
  heart.style.top = "50%";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.pointerEvents = "none";

  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 300 + 100;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  heart.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ],
    {
      duration: 1500,
      easing: "ease-out"
    }
  );

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1600);
}
