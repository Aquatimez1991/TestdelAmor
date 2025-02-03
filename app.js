document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.submit-btn');

    function moveButton() {
        const x = Math.random() * (window.innerWidth - button.clientWidth);
        const y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    function redirectToPage() {
        window.location.href = 'pagmeme1.html';
    }

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', redirectToPage);
});
