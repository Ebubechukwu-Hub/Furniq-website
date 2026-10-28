const menuBtn = document.querySelector("#menuBtn");
const menuBtnIcon = document.querySelector("#menuBtn i");
const menuBtndropDown = document.querySelector(".drop-down");
const dropDownLinks = document.querySelectorAll(".drop-down a");
menuBtn.addEventListener("click", function () {
  menuBtndropDown.classList.toggle("open");
  const isOpen = menuBtndropDown.classList.contains("open");
  menuBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
dropDownLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuBtndropDown.classList.remove("open");
    menuBtnIcon.className = "fa-solid fa-bars";
  });
});

// FAQ section functionality
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector("i");

  question.addEventListener("click", function () {
    item.classList.toggle("open");

    const isOpen = item.classList.contains("open");
    icon.className = isOpen ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
  });
});

// Smooth scrolling to the featured section when the scroll down button is clicked
const scrollDown = document.querySelector(".scroll-down");
const featuredSection = document.querySelector("#about");

scrollDown.addEventListener("click", function (e) {
  e.preventDefault();
  featuredSection.scrollIntoView({ behavior: "smooth" });
});