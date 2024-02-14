window.addEventListener('load', function () {
  var audio = document.getElementById('backsound');
  audio.play();
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numberOfParticles = 500; // Ubah jumlah partikel di sini

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 2 + 1;
  const color = Math.random() > 0.5 ? 'pink' : 'red'; // Warna bisa disesuaikan
  particles.push({
    x,
    y,
    radius,
    color
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    // Update posisi partikel
    particle.y += 1; // Kecepatan jatuh partikel
    if (particle.y > canvas.height + particle.radius) {
      // Reset posisi partikel saat mencapai bawah layar
      particle.y = -particle.radius;
    }
  });
}

function update() {
  draw();
  requestAnimationFrame(update);
}

// Inisialisasi partikel
for (let i = 0; i < numberOfParticles; i++) {
  createParticle();
}

update();