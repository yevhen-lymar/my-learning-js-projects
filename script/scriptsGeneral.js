const gridBtn = document.getElementById("grid");
const flexBtn = document.getElementById("flex");
const toggle = document.getElementById("toggle-g-f");
const links = document.querySelectorAll(".link");
const header = document.getElementById("header");

const linkCount = links.length;
const countProjects = document.querySelector(".countProjects span");
countProjects.innerText = linkCount;

gridBtn.addEventListener("click", () => {
  toggle.classList.remove("flex");
  toggle.classList.add("grid");
});
flexBtn.addEventListener("click", () => {
  toggle.classList.remove("grid");
  toggle.classList.add("flex");
});

