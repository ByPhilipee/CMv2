document.addEventListener('DOMContentLoaded', () => {
    const indicators = document.querySelectorAll('.carousel-indicator');

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            // Remove 'active' de todos os indicadores
            indicators.forEach(i => i.classList.remove('active'));
            // Adiciona 'active' ao indicador clicado
            indicator.classList.add('active');

            // Aqui você implementaria a lógica para mover o carrossel para o slide correspondente
            // const carouselContainer = document.querySelector('.carousel-container');
            // carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});