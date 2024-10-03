/* Efeito de diminuição do header */
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('.header');
    header.classList.toggle('scrolling', this.scrollY > 0)
})

const btn = document.getElementById('btn-top');
btn.addEventListener("click", function() {
    window.scrollTo(0,0);
})

document.addEventListener("scroll", ocult);

function ocult() {
    if(window.scrollY > 10) {
        btn.style.display ="flex";
    } else {
        btn.style.display ="none"
    }
}

ocult();