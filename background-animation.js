const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  createCirlce();
});

// canvas.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 50;
    this.speedX = (Math.random() * 3 - 1.5) * 8;
    this.speedY = (Math.random() * 3 - 1.5) * 8;
    this.color = "hsl(" + hue + ",70%,35%)";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.speedX = -this.speedX;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.speedY = -this.speedY;
    }

    if (this.size > 1) {
      this.size -= 0.1; // efek pengecilan
    }
  }

  draw() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

function createCirlce() {
  for (let i = 0; i < 25; i++) {
    particleArray.push(new Particle());
    hue += 8;
  }
}

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    // efek menghilangkan lingkaran
    if (particleArray[i].size <= 8) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
