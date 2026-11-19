// Dark mode otomatis berdasarkan jam (malam: latar lebih gelap)
window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.style.background = "linear-gradient(to right, #000000, #434343)";
  }
});
