const btnMenu = document.querySelector(".btn--menu");
const mobileDropdown = document.querySelector(".mobile__dropdown");
const mobileList = document.querySelector(".mobile__list");
const mobileList2 = document.querySelectorAll(".mobile__list-2");

const openIcon = btnMenu.querySelector('img[data-menu="open"]');
const closeIcon = btnMenu.querySelector('img[data-menu="close"]');

btnMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileDropdown.classList.toggle("active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

mobileList.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".mobile__item");
  if (!clicked) return;
  const subMenu = clicked.querySelector(".mobile__list-2");

  mobileList2.forEach((element) => {
    if (element !== subMenu) {
      element.classList.add("hidden");
    }
  });

  if (subMenu) {
    subMenu.classList.toggle("hidden");
  }
});
