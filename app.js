document.querySelector(".slider").addEventListener("click", () => {
  const moneys = document.querySelectorAll(".money");
  moneys.forEach((el) => {
    el.classList.toggle("hidden");
  });
});
