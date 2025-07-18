07.18 4:58 PM
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
