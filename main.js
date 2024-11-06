// Elements for menu toggling
const btnMenu = document.querySelector(".btn--menu");
const mobileDropdown = document.querySelector(".mobile__dropdown");
const openIcon = btnMenu.querySelector('img[data-menu="open"]');
const closeIcon = btnMenu.querySelector('img[data-menu="close"]');

btnMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileDropdown.classList.toggle("active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Reusable function to handle submenu toggling
function handleDropdownToggle(listSelector, itemSelector, submenuSelector) {
  document.querySelector(listSelector).addEventListener("click", function (e) {
    e.preventDefault();

    const clicked = e.target.closest(itemSelector);
    if (!clicked) return;

    const subMenu = clicked.querySelector(submenuSelector);

    document.querySelectorAll(submenuSelector).forEach((element) => {
      if (element !== subMenu) element.classList.add("hidden");
    });
    document.querySelectorAll(`${itemSelector} img`).forEach((img) => {
      img.style.transform = "rotate(0deg)";
    });

    if (subMenu) {
      subMenu.classList.toggle("hidden");
      const icon = clicked.querySelector("img");
      icon.style.transform = subMenu.classList.contains("hidden")
        ? "rotate(0deg)"
        : "rotate(180deg)";
    }
  });
}

handleDropdownToggle(".nav__list", ".nav__item", ".nav__dropdown__list");
handleDropdownToggle(".mobile__list", ".mobile__item", ".mobile__list-2");
