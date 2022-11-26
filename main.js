const Lap = document.querySelector("#lap");
const Lapbtn = document.querySelector("#lapbtn");

Lapbtn.addEventListener("click", () => {
  Lap.classList.toggle("lapActive");
});
