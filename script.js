const buttons = document.querySelectorAll(".button");
const infos = document.querySelectorAll(".info");
const plus = "assets/images/icon-plus.svg";
const minus = "assets/images/icon-minus.svg";

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const info = infos[index];
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
