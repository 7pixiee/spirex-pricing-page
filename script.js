const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const modal = document.querySelector(".modal");
const chosenPlan = document.querySelector("#chosen-plan");
const closeButton = document.querySelector(".modal-close");
const backdrop = document.querySelector(".modal-backdrop");
const signupForm = document.querySelector("#signup-form");
const formMessage = document.querySelector(".form-message");

document.querySelector("#year").textContent = new Date().getFullYear();

// Mobile navigation
menuButton.addEventListener("click", ()=> {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link)=> {
  link.addEventListener("click", ()=> {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// signup popup for the selcted plan
document.querySelectorAll(".signup-button, .nav-signup, .login-link").forEach((button) => {
  button.addEventListener("click", (event)=> {
    if (button.classList.contains("signup-button")) {
      chosenPlan.textContent = button.dataset.plan;
    } else {
      chosenPlan.textContent = "your plan";
    }

    event.preventDefault();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    formMessage.textContent = "";
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown",(event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

// Demo form only
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#full-name").value.trim();

  formMessage.textContent = `Thanks, ${name}! This demo form is working.`;
  signupForm.reset();
});
