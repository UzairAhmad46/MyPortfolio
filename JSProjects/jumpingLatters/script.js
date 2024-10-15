const container = document.querySelectorAll("span")
container.forEach((item) => {
  console.log(container);
  item.addEventListener("click", () => {
    item.classList.toggle("active")
  })
})