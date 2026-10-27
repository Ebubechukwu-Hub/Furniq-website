const menuBtn = document.querySelector("#menuBtn");
const menuBtnIcon = document.querySelector("#menuBtn i");
const menuBtndropDown = document.querySelector(".drop-down");
menuBtn.addEventListener("click", function () {
  menuBtndropDown.classList.toggle("open");
  const isOpen = menuBtndropDown.classList.contains("open");
  menuBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})

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