document.addEventListener('DOMContentLoaded', () => {

    const menus = document.querySelectorAll('.menu');
    
    menus.forEach((menu) => {
        menu.addEventListener('click', (e) => {
            const subMenu = menu.querySelector('.sub-menu');
            subMenu.classList.toggle('active');
        });
    });



    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;


    slides[0].style.top = '0';

    setInterval(() => {

        slides[currentIndex].style.top = '-100%';
        slides[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.top = '-100%';
    
        setTimeout(() => {
            slides[currentIndex].style.top = '0';
            slides[currentIndex].classList.add('active');
        }, 50);

    }, 3000);


    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });


    const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    const popupOk = document.querySelector('.popup-ok');

    popupTrigger.addEventListener('click', () => {
        popup.classList.add('active');
        overlay.classList.add('active');
    });

    popupOk.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });

});