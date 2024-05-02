function mostrarMenuDropdown(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  const currentState = menu.style.display;

  button.addEventListener("click", function () {
    menu.style.display = currentState == "block" ? "none" : "block";
  });
}

function esconderMenuDropdown(menuId, key = "Escape") {
  document.addEventListener("keydown", function (event) {
    const menu = document.getElementById(menuId);

    if (event.key === key) {
      menu.style.display = "none";
    }
  });
}
