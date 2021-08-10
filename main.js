/* toggles menu when icons are clicked */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* closes the menu when a menu link is selected */
const pages = document.querySelectorAll('nav ul li a')
for (const page of pages) {
  page.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* adds shadow to the header when user scrolls the page */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function addHeaderWhenScrolled() {
  if (navHeight <= window.scrollY) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Swiper carousel for user testimonials */
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Reveal elements as user scrolls the page down */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testimonials,
  #contact .text, #contact .contacts,
  footer .brand, footer .socials  
`,
  { interval: 100 }
)

/* adds a back-to-top button to the page once user scrolls the page down */
const backToTopButton = document.querySelector('.back-to-top')
function addBackToTopButton() {
  if (window.scrollY >= 900) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Indicates which page is active in the navigation bar */
const sections = document.querySelectorAll('main section[id]')
function indicateActivePageNavBar() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const sectionStart = checkpoint >= sectionTop
    const sectionEnd = checkpoint <= sectionTop + sectionHeight

    if (sectionStart && sectionEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Executes the functions based on the scroll event */
window.addEventListener('scroll', function () {
  addHeaderWhenScrolled()
  addBackToTopButton()
  indicateActivePageNavBar()
})
