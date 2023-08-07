const countryContainer = document.querySelector(".country-container");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");
const h3 = document.querySelector("h3");

async function showCountry() {
  try {
    const response = await fetch(" https://restcountries.com/v3.1/all", {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);

    const countries = data.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));
    countryContainer.classList.add("none");
    h3.style.display = "flex";
    card.innerHTML = "";

    setTimeout(() => {
      countryContainer.classList.remove("none");
      h3.style.display = "none";
      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];

      const countryName = document.createElement("h1");
      countryName.textContent = randomCountry.name;

      const countryFlag = document.createElement("img");
      countryFlag.src = randomCountry.flag;

      card.appendChild(countryName);
      card.appendChild(countryFlag);
      countryContainer.appendChild(card);
    }, 2000);
  } catch (err) {
    console.log("Error fetch:", err);
  }
}
showCountry();

btn.addEventListener("click", showCountry);
