
        const contactBtn = document.getElementById('contactBtn');
        const contactCard = document.getElementById('contactCard');

        contactBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic cierre la tarjeta inmediatamente
            contactCard.classList.toggle('show');
        });

        // Opcional: Cerrar la tarjeta si el usuario hace clic en cualquier otra parte de la pantalla
        document.addEventListener('click', (e) => {
            if (!contactCard.contains(e.target) && e.target !== contactBtn) {
                contactCard.classList.remove('show');
            }
        });


        // --- LÓGICA DE TRASLACIÓN DEL CARRUSEL ---
        const container = document.getElementById('sliderContainer');
        const track = document.getElementById('sliderTrack');
        const cards = document.querySelectorAll('.slide-card');
        
        let currentIndex = 0;
        let isPaused = false;
        let autoSlideInterval;

        function getVisibleCount() {
            return window.innerWidth <= 968 ? 1 : 3;
        }

        function moveSlider() {
            if (isPaused) return;

            const visibleCount = getVisibleCount();
            const maxIndex = cards.length - visibleCount;

            currentIndex++;
            if (currentIndex > maxIndex || currentIndex < 0) {
                currentIndex = 0;
            }

            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = 30;
            const amountToMove = (cardWidth + gap) * currentIndex;
            track.style.transform = `translateX(-${amountToMove}px)`;
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(moveSlider, 5000);
        }

        // Eventos táctiles móviles
        let startX = 0;
        let currentTranslate = 0;

        container.addEventListener('touchstart', (e) => {
            isPaused = true;
            startX = e.touches[0].clientX;
            track.style.transition = 'none';
        });

        container.addEventListener('touchmove', (e) => {
            const currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            const cardWidth = cards[0].getBoundingClientRect().width + 30;
            currentTranslate = - (currentIndex * cardWidth) + diffX;
            track.style.transform = `translateX(${currentTranslate}px)`;
        });

        container.addEventListener('touchend', (e) => {
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            const endX = e.changedTouches[0].clientX;
            const diffX = endX - startX;

            if (diffX < -50 && currentIndex < cards.length - getVisibleCount()) {
                currentIndex++;
            } else if (diffX > 50 && currentIndex > 0) {
                currentIndex--;
            }

            const cardWidth = cards[0].getBoundingClientRect().width + 30;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            setTimeout(() => { isPaused = false; }, 3000);
        });

        container.addEventListener('mouseenter', () => { isPaused = true; });
        container.addEventListener('mouseleave', () => { isPaused = false; });

        window.addEventListener('resize', () => {
            currentIndex = 0;
            track.style.transform = `translateX(0px)`;
        });

        startAutoSlide();

        // LÓGICA DEL MODAL
        const modal = document.getElementById('photoModal');
        const modalImg = document.getElementById('modalImg');

        function openModal(element) {
            isPaused = true;
            const imgSrc = element.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.classList.add('open');
        }

        document.getElementById('contactCard')

        function closeModal() {
            modal.classList.remove('open');
            setTimeout(() => { isPaused = false; }, 400);
        }
