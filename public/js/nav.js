const currentPage = location.pathname;
const menuItens = document.querySelectorAll(".menu a")

for (const item of menuItens) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active')
  }
}
