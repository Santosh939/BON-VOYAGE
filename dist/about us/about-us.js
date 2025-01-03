document.addEventListener('DOMContentLoaded', () => {
    const aboutCards = document.querySelectorAll('.about-card');

    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
