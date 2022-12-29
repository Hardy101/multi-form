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

const name_label = document.querySelector(".name-label");
const email_label = document.querySelector(".email-label");
const num_label = document.querySelector(".num-label");

const step_3_div = document.querySelectorAll(".add");
const checkbox = document.querySelectorAll(".checkbox");
const checkbox_plan = document.querySelector(".checkerbox");

// Selecting Elements from Plans selection
const tab_plan = document.querySelectorAll(".tab-m");
const tab_year = document.querySelectorAll(".tab-year");
const monthly_div = document.querySelector(".monthly");
const yearly_div = document.querySelector(".yearly");

// Selecting Elemnts from Add-ons Step
const month_add = document.querySelector(".month_add");
const year_add = document.querySelector(".year_add");

const btn_change = document.querySelector(".btn-chng");
// Button created to push "next btn" to the right when back button is not displayed
const back_to = document.querySelector(".back-to");

checkbox[0].classList.add("active");
/* =====  Functions ===== */
/////////////////////////////
// Function to determine Period of Add-ons
add_ons = () => {
  if (checkbox_plan.checked) {
    month_add.classList.remove("none");
    year_add.classList.add("none");
  } else {
    month_add.classList.add("none");
    year_add.classList.remove("none");
  }
};
// Selecting and Removing the Add-ons
add_div = () => {
  function add_tab(x) {
    if (step_3_div[x].classList.contains("active")) {
      checkbox[x].checked = true;
    }
  }
  function remove_tab(x) {
    if (!step_3_div[x].classList.contains("active")) {
      checkbox[x].checked = false;
    }
  }
  add_tab(0);
  add_tab(1);
  add_tab(2);
  add_tab(3);
  add_tab(4);
  add_tab(5);
  remove_tab(0);
  remove_tab(1);
  remove_tab(2);
  remove_tab(3);
  remove_tab(4);
  remove_tab(5);
};
// Validation Function
const validate_label = document.querySelector(".val-label");
// Implementing the Next Step Feature
let checker = 0;
nextStep = () => {
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
// Validating Step one form
btn_step.addEventListener("click", () => {
  if (
    !name_input.value.trim() ||
    !email_input.value.trim() ||
    !number_input.value.trim()
  ) {
    validate_label.classList.remove("none");
  }
  if (
    name_input.value.trim() &&
    email_input.value.trim() &&
    number_input.value.trim()
  ) {
    validate_label.classList.add("none");
    if (name_input.value.trim().length < 5) {
      name_label.classList.remove("show-up");
    }
    if (
      !email_input.value.trim().includes("@") ||
      !email_input.value.trim().includes(".com")
    ) {
      email_label.classList.remove("show-up");
    }
    if (number_input.value.trim().length < 11) {
      num_label.classList.remove("show-up");
    }
    if (
      name_input.value.trim().length >= 5 &&
      email_input.value.trim().includes("@") &&
      email_input.value.trim().includes(".com") &&
      number_input.value.trim().length >= 11
    ) {
      nextStep();
    }
  }
});
// Separating figures in Phone Number field with Space
function numberWithSpaces(x) {
  let num = x.replace(/(\d{3})/g, "$1 ").trim();
  return num;
}
number_input.addEventListener("input", () => {
  if (number_input.value.trim().length >= 11) {
    let numSpace = number_input.value;
    number_input.value = numberWithSpaces(numSpace);
  }
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

// Plans Selection Function
function activate(div) {
  if (!div.classList.contains("active-tab")) {
    const question = document.querySelectorAll(".active-tab");
    question.forEach((activeQuestion) => {
      activeQuestion.classList.remove("active-tab");
    });
    div.classList.add("active-tab");
  } else if (div.classList.contains("active-tab")) {
    div.classList.remove("active-tab");
  }
}
// Implementing Monthly Plans Feature
tab_plan.forEach((div) => {
  div.addEventListener("click", () => {
    activate(div);
  });
});
// Implementing Yealy Plans Feature
tab_year.forEach((div) => {
  div.addEventListener("click", () => {
    activate(div);
  });
});
// Implementing the Monthly-Yearly Feature
checkbox_plan.checked = true;
checkbox_plan.addEventListener("click", (event) => {
  if (event.currentTarget.checked) {
    console.log(checkbox_plan.checked, "Checked");
    pricePeriod.forEach((div) => {
      div.classList.toggle("active");
    });
  } else if (!event.currentTarget.checked) {
    console.log(checkbox_plan.checked, "Not checked");
    pricePeriod.forEach((div) => {
      div.classList.toggle("active");
    });
  }
});

/////////////////////////////////////
if (!checkbox_plan.checked) {
  monthly_div.classList.add("none");
  yearly_div.classList.remove("none");
}

// slider.addEventListener("click", (event) => {
//   if (event.currentTarget.checked) {
//     pricePeriod.forEach((div) => {
//       div.classList.toggle("active");
//     });
//   } else if (!event.currentTarget.checked) {
//     pricePeriod.forEach((div) => {
//       div.classList.toggle("active");
//     });
//   }
// });

// Implementing the pick add-ons feature in step 3
step_3_div.forEach((step_3_div) => {
  step_3_div.addEventListener("click", (e) => {
    step_3_div.classList.toggle("active");
    active.forEach((div) => {
      div.classList.remove("active");
    });
  });
});
// Making the Empty Button show when the first step is active
if (!steps[0].classList.contains("active")) {
  back_to.classList.add("none");
} else {
  // Making the Empty Button disappear when the first step is not active
  back_to.classList.remove("none");
}
// Making the "Back Button" disappear when the first step is active
if (steps[0].classList.contains("active")) {
  backBtn.classList.add("none");
}

// Activating Functions when the window is Interacted with
window.addEventListener("click", () => {
  if (name_input.value.trim().length >= 5) {
    name_label.classList.add("show-up");
  }
  if (
    email_input.value.trim().includes("@") &&
    email_input.value.trim().includes(".com")
  ) {
    email_label.classList.add("show-up");
  }
  if (number_input.value.trim().length >= 10) {
    num_label.classList.add("show-up");
  }
  add_ons();
  add_div();
  // Making the Empty Button show when the first step is active
  if (!steps[0].classList.contains("active")) {
    back_to.classList.add("none");
  } else {
    // Making the Empty Button disappear when the first step is not active
    back_to.classList.remove("none");
  }
  // Making the "Back Button" disappear when the first step is active
  if (steps[0].classList.contains("active")) {
    backBtn.classList.add("none");
  } else {
    backBtn.classList.remove("none");
  }
  // Making the "Next button" say Next Step when any other Step besides step 1 is active
  if (steps[2].classList.contains("active")) {
    btn_step.textContent = "Next Step";
  }
  // Making the "Next button" say Confirm when step 4 is active
  if (steps[3].classList.contains("active")) {
    btn_step.textContent = "Confirm";
  }
  if (steps[4].classList.contains("active")) {
    num[3].classList.add("active");
    btn_step.classList.add("none");
    backBtn.classList.add("none");
  }
});
