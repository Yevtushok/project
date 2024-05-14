const themsbody = document.querySelector(".themsbody");
const thems = document.querySelector(".thems");

thems.addEventListener("click", () => {
  themsbody.classList.toggle("darkmode");
  if (themsbody.classList.contains("darkmode")) {
   icon.classList.remove("thems-img-moon")
  } else {
  }
});
