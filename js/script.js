// Top Page
window.addEventListener("scroll", function () {
  let topPage = document.querySelector(".top-page");
  topPage.classList.toggle("top", window.scrollY > 0);
});
