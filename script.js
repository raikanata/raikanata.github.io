window.onload = function() {
    const hoverContainer = document.querySelector('.hoverc');
const imageElement = document.querySelector('#hoverchange');

hoverContainer.addEventListener('mouseover', () => {
    imageElement.src = 'img/icon2.jpg';
});

hoverContainer.addEventListener('mouseout', () => {
    imageElement.src = 'img/icon.jpg';
});
}
