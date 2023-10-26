document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const h1 = document.querySelector("h1");
  const h3 = document.querySelector("h3");

  button.addEventListener("click", function () {
    const city = prompt("What city do you live");
    if (city) {
      const temperature = prompt("What temperature is it?");
      if (temperature) {
        h1.textContent = `Currently ${temperature}° in ${city}`;

        if (parseInt(temperature) < 0) {
          h1.textContent = "😔";
        } else {
          h1.textContent = "😊";
        }
      }
    }
  });
});
