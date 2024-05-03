function registrarLike(heartId) {
  const heart = document.getElementById(heartId);

  if (heart.classList.contains("fa-solid")) {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
  } else {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
  }
}