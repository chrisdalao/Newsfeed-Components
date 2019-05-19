
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (menu.className === "menu") {
    menu.classList.toggle('menu--open');
  }else if(menu.className === "menu menu--open"){
    menu.classList.toggle('menu--close');
  }else{
    menu.setAttribute("class", "menu menu--open");
  }

  // menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());