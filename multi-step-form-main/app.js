// Input
const name_input = document.getElementById("name");
const email_input = document.getElementById("email");
const number_input = document.getElementById("number");

const active = document.querySelectorAll("active");
const pricePeriod = document.querySelectorAll(".select-per");
const slider = document.querySelector(".slider");
const btn_step = document.querySelector(".btm-btn");
const step_2 = document.querySelector(".step-2");
const step_3 = document.querySelector(".step-3");
const num = document.querySelectorAll(".num");
const steps = document.querySelectorAll(".step");
const backBtn = document.querySelector(".go-back");

const step_3_div = document.querySelectorAll(".add");
const checkbox = document.querySelectorAll(".checkbox");

const btn_change = document.querySelector(".btn-chng");

// Validation Function
// validate = () => {
//   if (name_input && email_input && number_input) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Implementing the Next Step Feature
let checker = 0;
checkDiv = () => {
  if (checker > steps.length - 1) {
    checker = steps.length - 1;
  }
  checker++;
  console.log(checker);
  steps.forEach((e) => {
    e.classList.remove("active");
  });
  num.forEach((e) => {
    e.classList.remove("active");
  });
  steps[checker].classList.add("active");
  num[checker].classList.add("active");
};
btn_step.addEventListener("click", () => {
  checkDiv();
  // validate();
});

// Implementing the Go back feature
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
  } else {
    pricePeriod.forEach((div) => {
      div.classList.toggle("active");
    });
  }
};
slider.addEventListener("click", check);

// Implementing the pick add ons feature in step 3
step_3_div.forEach((step_3_div) => {
  step_3_div.addEventListener("click", (e) => {
    step_3_div.classList.toggle("active");
    active.forEach((div) => {
      div.classList.remove("active");
    });
  });
});
if (steps[0].classList.contains("active")) {
  backBtn.classList.add("none");
}
// Last Step
window.addEventListener("click", () => {
  if (steps[0].classList.contains("active")) {
    backBtn.classList.add("none");
  }
  if (steps[0].classList.contains("active")) {
  } else {
    backBtn.classList.remove("none");
  }
  if (steps[3].classList.contains("active")) {
    btn_step.textContent = "Confirm";
  }
  if (steps[4].classList.contains("active")) {
    num[3].classList.add("active");
    btn_step.classList.add("none");
    backBtn.classList.add("none");
  }
});

// btn_change.addEventListener("click", () => {
//   steps.forEach((e) => {
//     e.classList.remove("active");
//   });
//   num.forEach((e) => {
//     e.classList.remove("active");
//   });
//   steps[2].classList.add("active");
//   num[2].classList.add("active");
//   console.log("few");
// });
