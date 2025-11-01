// 🌌 Soul Of Sisyphus Combined Visual Effects
// Aurora + Floating Orbs + Petals

// ===== CANVAS SETUP =====
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.classList.add("background-canvas");
document.body.appendChild(canvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ===== CONFIG =====
const petals = [];
const orbs = [];
const petalCount = 30;
const orbCount = 8;

const petalColors = ["#ff66cc", "#ff99ff", "#66ffff", "#99ccff", "#ff6699"];
const orbColors = ["#00ffff", "#ff00ff", "#99ccff", "#ff66cc"];

// Create Petals
for (let i = 0; i < petalCount; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 3,
    speed: Math.random() * 1.2 + 0.4,
    sway: Math.random() * 2 - 1,
    color: petalColors[Math.floor(Math.random() * petalColors.length)],
    opacity: Math.random() * 0.8 + 0.2
  });
}

// Create Floating Orbs
for (let i = 0; i < orbCount; i++) {
  orbs.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 80 + 40,
    color: orbColors[Math.floor(Math.random() * orbColors.length)],
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random() * 0.4 + 0.2
  });
}

// ===== RENDER LOOP =====
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Aurora layer (handled in CSS)
  // Render Orbs
  orbs.forEach(o => {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
    gradient.addColorStop(0, `${o.color}88`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.globalAlpha = o.alpha;
    ctx.fillRect(o.x - o.r, o.y - o.r, o.r * 2, o.r * 2);
    ctx.globalAlpha = 1;

    o.x += o.dx;
    o.y += o.dy;
    if (o.x < -100) o.x = canvas.width + 100;
    if (o.x > canvas.width + 100) o.x = -100;
    if (o.y < -100) o.y = canvas.height + 100;
    if (o.y > canvas.height + 100) o.y = -100;
  });

  // Render Petals
  petals.forEach(p => {
    ctx.beginPath();
    ctx.shadowBlur = 10;
    ctx.shadowColor = p.color;
    ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.opacity})`;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    p.y += p.speed;
    p.x += Math.sin(p.y * 0.02) * p.sway;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

animate();


// ============================
// 🎆 Random Quote Burst Effect
// ============================

const quotes = [
  "Know thyself — Socrates",
  "The struggle itself is enough — Camus",
  "Keep pushing the stone — Soul of Sisyphus",
  "Code. Create. Repeat.",
  "One more step forward.",
  "Embrace the chaos."
];

document.addEventListener("click", (e) => {
  // ignore clicks on buttons/links (so UI works normally)
  if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest("button,a")) return;

  const quote = document.createElement("span");
  quote.className = "floating-quote";
  quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  document.body.appendChild(quote);

  const x = e.pageX;
  const y = e.pageY;
  quote.style.left = `${x}px`;
  quote.style.top = `${y}px`;

  // animate upward & fade
  requestAnimationFrame(() => {
    quote.style.transform = `translateY(-60px)`;
    quote.style.opacity = 0;
  });

  // remove after animation
  setTimeout(() => quote.remove(), 1200);
});


// ============================
// 🪩 Cursor Particle Trail
// ============================

document.addEventListener("mousemove", (e) => {
  const particle = document.createElement("span");
  particle.className = "cursor-particle";
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";
  document.body.appendChild(particle);

  // random slight movement
  const dx = (Math.random() - 0.5) * 30;
  const dy = (Math.random() - 0.5) * 30;
  const duration = 600 + Math.random() * 400;

  particle.animate([
    { transform: `translate(0, 0)`, opacity: 1 },
    { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
  ], {
    duration: duration,
    easing: "ease-out",
  });

  setTimeout(() => particle.remove(), duration);
});


/* =====================================================
🦋 SoulOfSisyphus.life — Interactive Butterfly Effect v2
===================================================== */

function createButterfly(isBurst = false) {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";

  // Random start position
  butterfly.style.left = `${Math.random() * 100}vw`;
  butterfly.style.animationDelay = `${Math.random() * 5}s`;

  // Color scheme based on time
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    butterfly.style.background = "radial-gradient(circle at 30% 30%, #ffbb00, #ff6ef6 70%)";
  } else {
    butterfly.style.background = "radial-gradient(circle at 30% 30%, #6e00ff, #00ffff 70%)";
  }

  // Burst = faster + smaller group
  if (isBurst) {
    butterfly.style.animation = "flyBurst 4s linear forwards, flap 0.6s ease-in-out infinite";
  }

  document.body.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), isBurst ? 4000 : 12000);
}

// 🕊️ Continuous random butterflies
setInterval(() => createButterfly(), 3000 + Math.random() * 3000);

// 🖱️ Click burst effect — multiple butterflies
document.addEventListener("click", (e) => {
  for (let i = 0; i < 5; i++) {
    const b = document.createElement("div");
    b.className = "butterfly";
    b.style.left = `${e.clientX}px`;
    b.style.top = `${e.clientY}px`;
    b.style.position = "fixed";
    b.style.animation = "flyBurst 4s linear forwards, flap 0.6s ease-in-out infinite";

    // Color shift with hue rotation
    b.style.filter = `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 8px #fff)`;
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 4000);
  }
});

// 🦋 Gentle drift reaction to mouse
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".butterfly").forEach((b) => {
    const dx = (window.innerWidth / 2 - e.clientX) / 150;
    b.style.transform = `translateX(${dx}px)`;
  });
});

// ========================================
// 🦋 Butterfly Combo Spawner
// ========================================
(function () {
  function spawnButterfly(type) {
    const b = document.createElement("div");
    b.classList.add(type === "gif" ? "butterfly-gif" : "butterfly-shape");
    b.style.left = `${Math.random() * window.innerWidth}px`;
    b.style.bottom = `${Math.random() * 50}px`;
    b.style.animationDuration = `${8 + Math.random() * 6}s`;
    b.style.animationDelay = `${Math.random() * 1.5}s`;
    b.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 12000);
  }

  // spawn both types every 2–4 seconds
  setInterval(() => {
    spawnButterfly(Math.random() > 0.5 ? "gif" : "shape");
  }, 2000 + Math.random() * 2000);
})();



document.addEventListener("DOMContentLoaded", () => {
  const fruitContainer = document.getElementById("fruit-container");
  const messages = [
    "“Even silence can bloom.”",
    "“Every branch remembers the wind.”",
    "“Glow quietly. Grow deeply.”",
    "“Patience bears the sweetest fruit.”",
    "“Breathe. The roots are listening.”"
  ];

  // Create a few calm fruits
  for (let i = 0; i < 6; i++) spawnFruit();

  // Randomly drop one fruit occasionally
  setInterval(() => {
    const fruits = document.querySelectorAll(".fruit");
    if (fruits.length) {
      const fruit = fruits[Math.floor(Math.random() * fruits.length)];
      dropFruit(fruit);
    }
  }, 8000);

  function spawnFruit() {
    const fruit = document.createElement("div");
    fruit.classList.add("fruit");
    fruit.style.left = `${60 + Math.random() * 60}px`;
    fruit.style.bottom = `${180 + Math.random() * 140}px`;
    fruit.addEventListener("click", () => {
      const msg = document.createElement("div");
      msg.className = "message";
      msg.textContent = messages[Math.floor(Math.random() * messages.length)];
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 4000);
      dropFruit(fruit);
    });
    fruitContainer.appendChild(fruit);
  }

  function dropFruit(fruit) {
    fruit.style.animation = "dropFruit 3s forwards";
    setTimeout(() => {
      fruit.remove();
      spawnFruit();
    }, 3000);
  }
});
