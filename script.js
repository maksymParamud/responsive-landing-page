const burgerMenu = document.querySelector("#burger-menu");
const navlist = document.querySelector(".nav-list");

burgerMenu.onclick = () => {
  navlist.classList.toggle("nav-list-active");
};
