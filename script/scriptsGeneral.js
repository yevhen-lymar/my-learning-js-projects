const gridBtn = document.getElementById("grid");
const flexBtn = document.getElementById("flex");
const toggle = document.getElementById("toggle-g-f");
const links = document.querySelectorAll(".link");
const header = document.getElementById("header");
const loader = document.getElementById("loader");
const loaderEl = document.getElementById("loader-container");
const sectionProject = document.getElementById("projects");

const linkCount = links.length;
const countProjects = document.querySelector(".countProjects span");
countProjects.innerText = linkCount;

gridBtn.addEventListener("click", () => {
  if (toggle.className === "grid") {
    return;
  } else {
    sectionProject.classList.remove("project");
    sectionProject.classList.add("hidden");
    setTimeout(function () {
      toggle.classList.remove("flex");
      loader.style.display = "block";
      loaderEl.style.display = "flex";

      setTimeout(function () {
        loader.style.display = "none";
        loaderEl.style.display = "none";
        toggle.classList.remove("hidden");
        toggle.classList.add("grid");
        sectionProject.classList.remove("hidden");
      }, 1000);
    }, 600);
  }
});

flexBtn.addEventListener("click", () => {
  if (toggle.className === "flex") {
    return;
  } else {
    sectionProject.classList.remove("project");
    sectionProject.classList.add("hidden");

    setTimeout(function () {
      toggle.classList.remove("grid");
      toggle.classList.add("hidden");
      loader.style.display = "block";
      loaderEl.style.display = "flex";

      setTimeout(function () {
        loader.style.display = "none";
        loaderEl.style.display = "none";
        toggle.classList.remove("hidden");
        toggle.classList.add("flex");
        sectionProject.classList.remove("hidden");
      }, 1000);
    }, 600);
  }
});
