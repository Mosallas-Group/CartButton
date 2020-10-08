const cartButtonToggle = document.getElementById("cart-button-toggle");
const cartButton = document.querySelector(".cart-button");
const cartContent = document.querySelector(".cart-content");

cartButtonToggle.addEventListener("change", () => {
  if (cartButtonToggle.checked) {
    cartButton.classList.add("cart-button__open");
    setTimeout(() => {
      cartContent.classList.add("cart-content__open");
    }, 500);
    return;
  }

  cartContent.classList.remove("cart-content__open");
  setTimeout(() => {
    cartButton.classList.remove("cart-button__open");
  }, 500);
});
