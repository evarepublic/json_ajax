document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const select = document.getElementById("cars"),
    output = document.getElementById("output");

  select.addEventListener("change", () => {
    fetch("./cars.json")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("status not 200");
        }
        return res.json();
      })
      .then((data) => {
        data.cars.forEach((item) => {
          if (item.brand === select.value) {
            const { brand, model, price } = item;
            output.innerHTML = `${brand} ${model} <br> ${price}$`;
          }
        });
      })
      .catch((err) => console.error(err));
  });
});
