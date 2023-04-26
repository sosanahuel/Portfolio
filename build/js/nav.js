window.addEventListener("scroll", function(){
    var header = document.querySelector('.navegacion-header');
    header.classList.toggle("abajo", window.scrollY>0);
})