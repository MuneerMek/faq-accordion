const buttons = document.querySelectorAll(".button");
const headerImg = document.querySelectorAll(".header-img");
const infos = document.querySelectorAll(".info");
const plus = "assets/images/icon-plus.svg";
const minus = "assets/images/icon-minus.svg";

headerImg.forEach((faqItem, index) => {
  faqItem.addEventListener("click", () => {
    const info = infos[index];
    const button = buttons[index];
    if (info) {
      info.hidden = !info.hidden;
      if (button.src.includes(plus)) {
        button.src = minus;
      } else {
        button.src = plus;
      }
    }
  });
});
