var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});



//  var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//         },
//     },
// });


// var swiper = new Swiper(".slier-swap", {
//     navigation: {
//         nextEl: ".left-slider",
//         prevEl: ".right-slider",
//     },
// });


var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




/////age verification/////
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const ageVerification = document.getElementById('age-verification');
  const input = document.getElementById('age-field');
  const submit = document.getElementById('submit');
  const hasVerified = localStorage.getItem('ageVerified');
  const error = document.getElementById("error")
  const welcome = document.getElementById('welcome');
  const notEligible = document.getElementById('notEligible');

  if (!hasVerified) {
    ageVerification.style.display = 'flex';
  }

  submit.addEventListener('click', () => {
    if (input.value < 18 || input.value > 100) {
      notEligible.style.display = 'flex';
      ageVerification.style.display = 'none';

    }
    else {
      localStorage.setItem('ageVerified', 'true');
      ageVerification.style.display = 'none';
      welcome.style.display = 'flex'

      setTimeout(() => {
        welcome.style.display = "none"
      }, 2000);
    }
  });
});


