window.addEventListener("scroll", function () {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolling', window.scrollY > 0);
});

const btn = document.getElementById('btn-top');
btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("scroll", ocult);

function ocult() {
    const btn = document.getElementById('btn-top');
    btn.style.display = window.scrollY > 10 ? "flex" : "none";
}

ocult();

const pacienteBtn = document.getElementById('paciente-btn');
const medicoBtn = document.getElementById('medico-btn');
const pacienteFaq = document.getElementById('paciente-faq');
const medicoFaq = document.getElementById('medico-faq');

function toggleFaq(role) {
    if (role === 'paciente') {
        pacienteFaq.style.display = 'block';
        medicoFaq.style.display = 'none';
        pacienteBtn.classList.add('active');
        medicoBtn.classList.remove('active');
    } else {
        medicoFaq.style.display = 'block';
        pacienteFaq.style.display = 'none';
        medicoBtn.classList.add('active');
        pacienteBtn.classList.remove('active');
    }
}

pacienteBtn.addEventListener('click', () => toggleFaq('paciente'));
medicoBtn.addEventListener('click', () => toggleFaq('medico'));

/*var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 5){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}*/


/* Menu mobile */

const menuDiv = document.querySelector('.menu-mobile');
const bntAnimation = document.getElementById('btn-menu');

menuDiv.addEventListener('click', animationMenu)

function animationMenu() {
    menuDiv.classList.toggle('open');
    bntAnimation.classList.toggle('active');
}