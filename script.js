const codeLines = [
    '<span class="code-keyword">const</span> <span class="code-class">Project</span> = {',
    '  status: <span class="code-string">"Ready to Build"</span>,',
    '  speed: <span class="code-string">"High Performance"</span>,',
    '  design: <span class="code-string">"Modern & Clean"</span>',
    '};',
    '',
    '<span class="code-keyword">function</span> <span class="code-class">initChat</span>() {',
    '  window.open(<span class="code-string">"WhatsApp_API"</span>);',
    '}'
];

const typingContainer = document.getElementById('typing-text');
const fileNameElement = document.getElementById('terminal-filename');

const viewCode = document.getElementById('view-code');
const viewWeb = document.getElementById('view-web');
const viewPhone = document.getElementById('view-phone');

let lineIndex = 0;

function printCode() {
    if (lineIndex < codeLines.length) {
        typingContainer.innerHTML += codeLines[lineIndex] + '<br>';
        lineIndex++;
        setTimeout(printCode, 350);
    } else {
        setTimeout(showWebView, 3000);
    }
}

function showWebView() {
    viewCode.style.opacity = '0';
    setTimeout(() => {
        viewCode.classList.remove('active');
        fileNameElement.textContent = "live-preview: e-commerce";
        viewWeb.classList.add('active');
        viewWeb.style.opacity = '1';
        setTimeout(showPhoneView, 4000);
    }, 600);
}

function showPhoneView() {
    viewWeb.style.opacity = '0';
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
        viewPhone.classList.remove('active');
        fileNameElement.textContent = "C.Code-engine.js";
        typingContainer.innerHTML = '';
        lineIndex = 0;
        viewCode.classList.add('active');
        viewCode.style.opacity = '1';
        printCode();
    }, 600);
}

window.onload = printCode;

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