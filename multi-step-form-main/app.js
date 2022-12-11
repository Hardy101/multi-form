const active = document.querySelectorAll("active");
const checkbox = document.querySelector(".checkbox");
const pricePeriod = document.querySelectorAll(".select-per");
const slider = document.querySelector(".slider");
const btn_step = document.querySelector(".btm-btn");
const step_2 = document.querySelector(".step-2");
const step_3 = document.querySelector(".step-3");

const num = document.querySelectorAll(".num");
const steps = document.querySelectorAll(".step");
const backBtn = document.querySelector(".go-back");


let checker = 1;
checkDiv = () => {
  if (checker > steps.length - 1) {
    // checker = 0;
    checker = steps.length - 1;
    //TODO: FINAL PAGE
  }
  steps.forEach((e) => {
    e.classList.remove("active");
  });
  num.forEach((e) => {
    e.classList.remove("active");
  });
  steps[checker].classList.add("active");
  num[checker].classList.add("active");
  checker++;
  console.log(checker);
};
btn_step.addEventListener("click", () => {
  checkDiv();
});

// Implementing the back feature
goBack = () => {
  if (checker == 0) {
  } else {
    if (checker <= 0) {
      checker = steps.length;
    }
    checker--;
    steps.forEach((e) => {
      e.classList.remove("active");
    });
    num.forEach((e) => {
      e.classList.remove("active");
    });
    steps[checker].classList.add("active");
    num[checker].classList.add("active");
    console.log(checker);
  }
};
backBtn.addEventListener("click", goBack);

const check = () => {
  if (checkbox.checked == true) {
    pricePeriod.forEach((div) => {
      div.classList.toggle("active");
    });
    // pricePeriod[1].classList.
  } else {
    pricePeriod.forEach((div) => {
      div.classList.toggle("active");
    });
  }
};
slider.addEventListener("click", check);
// Moving from step 2 to step 3
// btn_2.addEventListener("click", () => {
//   step_2.classList.remove("active");
//   step_3.classList.add("active");
// });
