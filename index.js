const navbar = document.querySelector(".navbar");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
});

const projectJSON = [
  {
    name: "Coin tracker",
    images: [
      "img/coinTracker1.png",
      "img/coinTracker2.png",
      "img/coinTracker3.png",
      "img/coinTracker4.png",
    ],
    link: "https://chase0115.github.io/coin-tracker/",
    code: "https://github.com/Chase0115/coin-tracker",
    description:
      "This project for checking the coin's price and chart. you can change from dark mode to bright mode.",
    tools: ["TypeScript", "React.js", "Fetch API", "Apex Charts"],
  },
  {
    name: "Emotion diary",
    images: [
      "img/emotionDiary1.png",
      "img/emotionDiary2.png",
      "img/emotionDiary3.png",
    ],
    link: "https://chase-web-react-project.web.app/",
    code: "https://github.com/Chase0115/EmotionDiary",
    description: "Write a daily diary with 5 emotion options",
    tools: ["React.js", "context API", "localStorage", "fetch API"],
  },
];

const carousel = document.querySelector('.projectCarousel');
const carouselInner = document.querySelector('.carousel__inner');
const slides = carouselInner.querySelectorAll('img');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
let currentIndex = 0;
let slideCount = slides.length;
let slideWidth = "330";

function showSlide(index) {
  currentIndex = index;
  carouselInner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    showSlide(slideCount - 1);
  } else {
    showSlide(currentIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex === slideCount - 1) {
    showSlide(0);
  } else {
    showSlide(currentIndex + 1);
  }
});

showSlide(currentIndex);