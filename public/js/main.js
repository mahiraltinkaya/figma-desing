window.onload = () => {
  let screenWidth = window.innerWidth;
  const buttons = document.querySelectorAll(".slide-button");
  const slideLength = document.querySelectorAll(".slide").length;
  const gap = 30;
  const imgWidth = document.querySelector(".slide img").offsetWidth;
  let count = 0;

  let imagesWidth = gap * slideLength + imgWidth * slideLength;

  resize(screenWidth);
  hideBtns(imagesWidth);

  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    resize(screenWidth);
    hideBtns(imagesWidth);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.sliderButton;

      if (type === "prev") {
        if (count <= slideLength) {
          count--;
        }

        document.querySelector("ul").style.marginLeft = `-${
          (imgWidth + gap) * count
        }px`;
        document.querySelector("ul").style.transition = `0.2s`;
      }

      if (type === "next") {
        if (count < slideLength) {
          count++;
        }
        document.querySelector("ul").style.marginLeft = `-${
          (imgWidth + gap) * count
        }px`;
        document.querySelector("ul").style.transition = `0.2s`;
      }

      if (count === 0) {
        document.querySelector(".prev-button").style.display = "none";
      } else {
        document.querySelector(".prev-button").style.display = "block";
      }

      if (count === slideLength - 1) {
        document.querySelector(".next-button").style.display = "none";
      } else {
        document.querySelector(".next-button").style.display = "block";
      }

      hideBtns(imagesWidth - count * imgWidth);
    });
  });
};
const resize = (screenWidth) => {
  if (screenWidth < 960) {
    document.querySelector(".next-button").style.display = "none";
    document.querySelector(".prev-button").style.display = "none";
  } else {
    document.querySelector(".next-button").style.display = "block";
  }
};

const hideBtns = (width) => {
  const slideGroupWidth = document.querySelector(".slide-group").offsetWidth;

  if (slideGroupWidth > width) {
    document.querySelector(".next-button").style.display = "none";
  }
};
