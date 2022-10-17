
/* header play/pause */

document.querySelectorAll('.preview-btn').forEach(function(element) {

  element.addEventListener('click', function(e) {
  e.target.closest('.preview-btn').classList.toggle('preview-btn-click');
})
})

// header 320 simplebar

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

const btns = document.querySelectorAll(".header__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

/* header 320 simplebar play/pause */

document.querySelectorAll('.dropdown__btn').forEach(function(element) {

  element.addEventListener('click', function(e) {
  e.target.closest('.dropdown__btn').classList.toggle('dropdown__btn-click');
})
})

/* header search */

document.querySelector(".header__search").addEventListener("click", function() {
  document.querySelector(".search-form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".search-form");
  if (!target.closest(".header__search-wrapper")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search").classList.remove("active")
  }
})

/* podcasts Show blocks on click */

const btnMore = document.querySelector('.btn-more');
const podcastsContent = document.querySelectorAll('.podcasts__content');

btnMore.addEventListener('click', () => {
  podcastsContent.forEach(el => { el.classList.add('podcasts__content--visible') });
  btnMore.closest('.podcasts__more').classList.add('podcasts__more--hidden');
});

/* podcasts play/pause */

document.querySelectorAll('.podcasts__btn-play').forEach(function(element) {

  element.addEventListener('click', function(e) {
  e.target.closest('.podcasts__btn-play').classList.toggle('podcasts-btn-click');
})
})

/* select */

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".broadcast__select")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header-choices',
     },
  });

});

/* scroll */

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

/* accordion */

new Accordion('.guests__list', {
  duration: 700,
  elementClass: 'guests__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  openOnInit: [0],
});

/* tabs */

document.querySelectorAll('.accordion__link').forEach(function(tabsBtn){

  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.accordion__link').forEach(function(btn){
  btn.classList.remove('accordion__active')});
  e.currentTarget.classList.add('accordion__active');

  document.querySelectorAll('.accordion-card').forEach(function(tabsBtn){
    tabsBtn.classList.remove('accordion-card-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('accordion-card-active');
    });
    });

/* slider */

const swiperAbout = new Swiper('.about__swiper', {
  direction: 'horizontal',
  speed: 800,
  loop: true,
  // slidesPerView: 4,
  // spaceBetween: 30,

  navigation: {
    nextEl: '.about__swiper-next',
    prevEl: '.about__swiper-prev',
  },

  breakpoints: {

    1201: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    993: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 'auto',
      spaceBetween: 20
    }
  },
});

/* form */

const validate = new window.JustValidate('.about__form', {
  // colorWrong: '#d52b1e',
  rules: {
    textarea: {
      required: true,
      minLength: 3,
      maxLength: 100
    },
    name: {
      required: true,
      minLength: 2
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    textarea: "Ошибка",

    email: "Ошибка",

    name: "Ошибка",
  },
  colorWrong: '#d52b1e'
});

// modal

$('#btn').click(function(){
	$.fancybox.open({
		src: '#hidden',
		type: 'inline'
	});
});

// modal 320

$('#button').click(function(){
	$.fancybox.open({
		src: '#hidden',
		type: 'inline'
	});
});

/* log-in form */

new window.JustValidate('.form-validation', {
  colorWrong: '#D52B1E',
  rules: {
    name: {
      required: true
    },
    password: {
      required: true
    },
  },
  messages: {
       name: {
         required: "Ошибка"
       },
       password: {
         required: "Ошибка"
      },
     }
});

/* burger */

document.querySelector(".burger-open").addEventListener("click", function() {
  document.querySelector(".burger__nav").classList.add("active");
});
document.querySelector(".burger-close").addEventListener("click", function() {
  document.querySelector(".burger__nav").classList.remove("active");
});

// playlists swiper

const swiperPlaylists = new Swiper('.playlists__swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 800,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
});

// form send

document.querySelector(".about__form-btn").addEventListener("click", function() {
  console.log('Отправлено');
});

