


// FUNCION PARA DESPLEGAR EL MENU LATERAL DEL HEADER

function dysplayMenu () {
    let menuContainer = document.querySelector(".container2");
    let menuIcon = document.querySelector(".icon-menu");
  
    if (menuContainer && menuIcon) { 
      menuIcon.addEventListener("click", function() {
        if (menuContainer.classList.contains("extend")) {
          menuContainer.classList.remove("extend");
        } else {
          menuContainer.classList.add("extend");
        }
      });
    }
};
dysplayMenu();
  



function crearSlide(slideHTML, prevBtnHTML, nextBtnHTML) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let index = 0;

    if (slides && prevBtn && nextBtn){
        slides.forEach((slide, i) => {
            if (i !== 0) {
              slide.style.display = 'none';
            }
        });
    
        prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        actualizarSlide();
        });
    
        nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        actualizarSlide();
        });
    
        function actualizarSlide() {
        slides.forEach((slide, i) => {
            if (i === index) {
            slide.style.display = 'block';
            } else {
            slide.style.display = 'none';
            }
        });
        }
    }
}
  
crearSlide('.slide', '#prevBtn', '#nextBtn');
  
  