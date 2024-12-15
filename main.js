const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.board');


openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
    overlay.classList.add('active'); // Optional: If overlay is used
    document.body.classList.add('no-scroll'); // Disable scroll
});

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
    overlay.classList.remove('active'); // Optional
    document.body.classList.remove('no-scroll'); // Enable scroll
});

overlay.addEventListener('click', function() {
    offcanvasMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
