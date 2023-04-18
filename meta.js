// disable scroll
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });

// disable zoom
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
})