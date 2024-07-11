// Slider
const sliderInfo = [
  {
    city: "Rostov-on-Don \r\nLCD admiral",
    area: "81 m2",
    time: "3.5 months",
    title: "Rostov-on-Don, Admiral",
    url: "./images/slider-img/slider-img-1.png",
  },
  {
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    title: "Sochi Thieves",
    url: "./images/slider-img/slider-img-2.png",
  },
  {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    title: "Rostov-on-Don Patriotic",
    url: "./images/slider-img/slider-img-3.png",
  },
];

function getSlider() {
  if (!sliderInfo || !sliderInfo.length) return;

  const sliderImg = document.querySelector(".second-section-inner__info-img"),
    sliderArrows = document.querySelector(".second-section-slider-control"),
    sliderDots = document.querySelector(".slider-container-dots"),
    sliderTitle = document.querySelector(".city-list-menu");

  initImages();
  initArrows();
  initDots();
  initTitles();

  function initImages() {
    sliderInfo.forEach((image, index) => {
      const imageDiv = `<div class="slider-img n${index} ${
        index === 0 ? "active-img" : ""
      }" data-index="${index}"><img src="${
        sliderInfo[index].url
      }" alt="slider-img-${index}"/></div>`;
      sliderImg.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider-btn-arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        const curNumber = +sliderImg.querySelector(".active-img").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left-arrow")) {
          nextNumber = curNumber === 0 ? sliderInfo.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === sliderInfo.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function moveSlider(num) {
    sliderImg.querySelector(".active-img").classList.remove("active-img");
    sliderImg.querySelector(".n" + num).classList.add("active-img");
    sliderDots.querySelector(".active-dot").classList.remove("active-dot");
    sliderDots.querySelector(".n" + num).classList.add("active-dot");
    sliderTitle.querySelector(".active-list").classList.remove("active-list");
    sliderTitle.querySelector(".n" + num).classList.add("active-list");
    changeSpan(num);
  }

  function initDots() {
    sliderInfo.forEach((sliderInfo, index) => {
      let dot = `<button class="slider-btn-dot n${index} ${
        index === 0 ? "active-dot" : ""
      }" data-index="${index}"></button>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-btn-dot").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initTitles() {
    sliderInfo.forEach((sliderInfo, index) => {
      const item = `<li class="list-menu-slider n${index} ${
        index === 0 ? "active-list" : ""
      }" data-index="${index}"><span class="slider__picture-text">${
        sliderInfo.title
      }</span></li>`;
      sliderTitle.innerHTML += item;
    });

    sliderTitle.querySelectorAll(".list-menu-slider").forEach((item) => {
      item.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function changeSpan(num) {
    const sliderColumnCity = document.querySelector(".city");
    const sliderColumnArea = document.querySelector(".area");
    const sliderColumnTime = document.querySelector(".time");
    sliderColumnCity.innerText = sliderInfo[num].city;
    sliderColumnArea.innerText = sliderInfo[num].area;
    sliderColumnTime.innerText = sliderInfo[num].time;
  }
}

document.addEventListener("DOMContentLoaded", getSlider);

// Scroll Up Arrow

const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -70);
    setTimeout(goTop, 0);
  }
}

// Phone Mask

mask("[data-tel-input]");

// Del "+" placeholder

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if ((input.value = "+")) input.value = "";
  });
});

// Input text

const setReplacer = (target, expression) => {
  target.addEventListener("input", () => {
    const parsedValue = target.value.replace(expression, "");

    if (parsedValue !== target.value) {
      target.value = parsedValue;
    }
  });
};

setReplacer(
  document.querySelector("#onlyCharsWithSpaces"),
  /[^A-Za-zА-Яа-я\s]/g
);

// Smooth scroll

const anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  });
}

// List of Design Styles

const spans = document.querySelectorAll(".span");

function replaceImg() {
  const img = document.querySelectorAll(".fifth-section-img img");
  for (let imgs of img) imgs.classList.toggle("replace-img");
}

spans.forEach((item) => {
  item.addEventListener("click", () => {
    const activeSpan = document.querySelector(".span.active-list");
    activeSpan.classList.remove("active-list");
    item.classList.add("active-list");
    replaceImg();
  });
});

// Mobile Slider

let images = [
  {
    url: "./images/slider-img/slider-img-1.png",
  },
  {
    url: "./images/slider-img/slider-img-2.png",
  },
  {
    url: "./images/slider-img/slider-img-3.png",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(
    ".second-section-inner__slider-images"
  );
  let sliderArrows = document.querySelector(
    ".second-section-inner__slider-arrows"
  );

  initImages();
  initArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider-arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});
