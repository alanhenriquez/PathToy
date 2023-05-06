


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
  


function crearSlide(slideHTML, prevBtnHTML, nextBtnHTML, stopIndex0 = false, clasStop = 'stopped') {
  const slides = document.querySelectorAll(slideHTML);
  const prevBtn = document.querySelector(prevBtnHTML);
  const nextBtn = document.querySelector(nextBtnHTML);
  const stop = clasStop;
  let index = 0;

  if (slides && prevBtn && nextBtn) {
    actualizarSlide();

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      console.log(index);
      actualizarSlide();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      console.log(index);
      actualizarSlide();
    });

    function actualizarSlide() {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });

      prevBtn.disabled = index === 0 && stopIndex0;
      nextBtn.disabled = index === slides.length - 1 && stopIndex0;

      [prevBtn, nextBtn].forEach((btn) => {
        btn.classList.toggle(stop, btn.disabled);
        btn.parentElement.classList.toggle(stop, btn.disabled);
      });
    }
  }
}

crearSlide('.slide', '#prevBtn', '#nextBtn', true);





  