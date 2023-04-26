const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const navLinks = document.querySelectorAll('.cerrar-nav');


abrir.addEventListener("click", () => {
    nav.classList.add('visible');
})


cerrar.addEventListener("click", () => {
    nav.classList.remove('visible');
})




navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});










