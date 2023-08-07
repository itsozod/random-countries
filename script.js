const countryContainer = document.querySelector(".country-container");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");
const generateMessage = document.querySelector(".generate");

async function showCountry() {
  console.log("Button is clicked");
  btn.removeEventListener("click", showCountry);
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
    card.classList.remove("none");
    generateMessage.style.display = "flex";
    card.innerHTML = "";
    btn.removeEventListener("click", showCountry);

    setTimeout(() => {
      card.classList.add("none");
      generateMessage.style.display = "none";
      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];
      const countryName = document.createElement("h2");
      countryName.classList.add("country-name");
      countryName.textContent = randomCountry.name;

      const countryFlag = document.createElement("img");
      countryFlag.classList.add("country-flag");
      countryFlag.src = randomCountry.flag;

      card.appendChild(countryName);
      card.appendChild(countryFlag);
      countryContainer.appendChild(card);
      btn.addEventListener("click", showCountry);
    }, 2000);
  } catch (err) {
    console.log("Error fetch:", err);
    btn.addEventListener("click", showCountry);
  }
}

btn.addEventListener("click", showCountry);
