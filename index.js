import projectJSON from "./projectDB.js";

// Navbar section

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

// Project section

const carousel = document.querySelector(".projectCarousel");
const carouselInner = document.querySelector(".carousel__inner");

const projectList = document.querySelector(".projectList");

const projectNameList = projectJSON.map((item) => item.name);

const projectItems = projectList.querySelectorAll("li");

const setImages = (imgArr) => {
  for (let i = 0; i < imgArr.length; i++) {
    const newImg = document.createElement("img");
    newImg.setAttribute("src", imgArr[i]);
    newImg.setAttribute("alt", `Slide ${i}`);
    carouselInner.appendChild(newImg);
    const slides = carouselInner.querySelectorAll("img");
    const prevButton = carousel.querySelector(".carousel__button--prev");
    const nextButton = carousel.querySelector(".carousel__button--next");
    let currentIndex = 0;
    let slideCount = slides.length;
    let slideWidth = "330";

    const showSlide = (index) => {
      currentIndex = index;
      carouselInner.style.transform = `translateX(-${
        slideWidth * currentIndex
      }px)`;
    };

    prevButton.addEventListener("click", () => {
      if (currentIndex === 0) {
        showSlide(slideCount - 1);
      } else {
        showSlide(currentIndex - 1);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex === slideCount - 1) {
        showSlide(0);
      } else {
        showSlide(currentIndex + 1);
      }
    });

    showSlide(currentIndex);
  }
};

const projectDesc = document.querySelector(".desc");

const projectTools = document.querySelector(".tools");

const projectLinks = document.querySelector(".links");

const setDesc = (project) => {
  projectDesc.textContent = project.description;
  for (let i = 0; i < project.tools.length; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = project.tools[i];
    projectTools.appendChild(newItem);
  }
  projectLinks.innerHTML = `
  <p><i class="fa-solid fa-link"></i>link: <br><a href="${project.link}">${project.link}</a> </p>
        <p><i class="fa-solid fa-link"></i>code: <br> <a href="${project.code}">${project.code}</a></p>
  `;
};

projectItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    projectItems.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    const projectIndex = projectNameList.findIndex(
      (item) => item === e.target.innerHTML
    );
    const newImages = projectJSON[projectIndex].images;
    carouselInner.innerHTML = null;
    projectTools.innerHTML = null;
    setImages(newImages);
    setDesc(projectJSON[projectIndex]);
  });
});

