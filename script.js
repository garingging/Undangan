const btnBuka = document.getElementById("btnBuka");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi-undangan");
const musik = document.getElementById("musik");
const musicBtn = document.getElementById("musicBtn");

btnBuka.addEventListener("click", () => {
  cover.style.display = "none";
  isi.style.display = "block";
  musicBtn.style.display = "block";
  musik.play();
});

/* Toggle musik */
function toggleMusic() {
  if (musik.paused) {
    musik.play();
  } else {
    musik.pause();
  }
}

/* COUNTDOWN */
const targetDate = new Date("2026-01-07T10:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
}, 1000);