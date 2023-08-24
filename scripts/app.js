document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.img');
    const prevbutton = document.querySelector('.prev');
    const nextbutton = document.querySelector('.next');

    let imagemAtual = 0;

    function mostrarImagem(n) {
        slides.forEach(slide => slide.style.display = "none");
        slides[n].style.display = "block";
    }

    function prevImagem() {
        imagemAtual--;
        if (imagemAtual < 0) {
            imagemAtual = slides.length - 1;
        }
        mostrarImagem(imagemAtual);
    }

    function nextImagem() {
        imagemAtual++;
        if (imagemAtual >= slides.length) {
            imagemAtual = 0;
        }
        mostrarImagem(imagemAtual);
    }

    prevbutton.addEventListener('click', prevImagem);
    nextbutton.addEventListener('click', nextImagem);

    mostrarImagem(imagemAtual);
});
