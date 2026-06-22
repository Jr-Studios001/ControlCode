const fileNameElement = document.getElementById('terminal-filename');

const viewCode = document.getElementById('view-code');
const viewWeb = document.getElementById('view-web');
const viewPhone = document.getElementById('view-phone');
const viewPhoto2 = document.getElementById('view-photo2');

// En lugar de escribir el código línea por línea, ahora solo controlamos el tiempo de espera
function startAnimation() {
    // Muestra la foto durante 3.5 segundos antes de pasar a la web-view
    setTimeout(showWebView, 3500); 
}

function showWebView() {
    viewCode.style.opacity = '0';
    setTimeout(() => {
        viewCode.classList.remove('active');
        fileNameElement.textContent = "live-preview: e-commerce";
        viewWeb.classList.add('active');
        viewWeb.style.opacity = '1';
        setTimeout(showPhoto2View, 4000);
    }, 600);
}

function showPhoto2View() { 
    viewWeb.style.opacity = '0';
    setTimeout(() => {
        viewPhone.classList.remove('active');
        fileNameElement.textContent = "live-preview: dashboard"; 
        viewPhoto2.classList.add('active');
        viewPhoto2.style.opacity = '1';
        setTimeout(showPhoneView, 4000);
    }, 600);
}

function showPhoneView() {
    viewPhoto2.style.opacity = '0';
    setTimeout(() => {
        viewWeb.classList.remove('active');
        fileNameElement.textContent = "live-preview: mobile-app";
        viewPhone.classList.add('active');
        viewPhone.style.opacity = '1';
        setTimeout(resetToCode, 4000); 
    }, 600);
}



function resetToCode() {
    viewPhone.style.opacity = '0'; 
    setTimeout(() => {
        viewPhoto2.classList.remove('active');
        fileNameElement.textContent = "preview-web.com"; 
        viewCode.classList.add('active');
        viewCode.style.opacity = '1';
        startAnimation();
    }, 600);
}

// Inicializamos la animación al cargar la página
window.onload = startAnimation;

// --- 🛠️ TARJETA DE CONTACTO ---
const contactBtn = document.getElementById('contactBtn');
const contactCard = document.getElementById('contactCard');

contactBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    contactCard.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!contactCard.contains(e.target) && e.target !== contactBtn) {
        contactCard.classList.remove('show');
    }
});

// --- 🔄 CARRUSEL DE TEXTO HERO-RIGHT ---
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000; 

    function changeHeroText() {
        slides[currentSlideIndex].classList.remove("active");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add("active");
    }

    setInterval(changeHeroText, slideIntervalTime);
});