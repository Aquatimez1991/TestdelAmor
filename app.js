document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.submit-btn');

    function moveButton() {
        const x = Math.random() * (window.innerWidth - button.clientWidth);
        const y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    function makeButtonHarderToClick(event) {
        const rect = button.getBoundingClientRect();
        const mouseDistance = Math.sqrt(Math.pow(event.clientX - rect.left - rect.width / 2, 2) +
                                        Math.pow(event.clientY - rect.top - rect.height / 2, 2));
        if (mouseDistance < 1) {  // Aumenta la distancia para hacerlo más fácil
            moveButton();
        }
    }

    function redirectToPage() {
        window.location.href = 'pagmeme1.html';
    }

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('mousemove', makeButtonHarderToClick);
    button.addEventListener('touchstart', moveButton);  // Para dispositivos táctiles
    button.addEventListener('touchmove', makeButtonHarderToClick);  // Para dispositivos táctiles
    button.addEventListener('click', redirectToPage);
});
