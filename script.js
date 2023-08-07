const countryContainer = document.querySelector('.country-container');
const btn = document.querySelector('.btn');

async function showCountry() {
    try {
    const response = await fetch(" https://restcountries.com/v3.1/all", { mode: "cors"});
    const data = await response.json();
    console.log(data);

    const countries = data.map(country =>  ({
        name: country.name.common,
        flag: country.flags.png,
    }));

    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];

    const countryName = document.createElement("h1")
    countryName.textContent = randomCountry.name;

    const countryFlag = document.createElement("img");
    countryFlag.src = randomCountry.flag;

    countryContainer.innerHTML = "";

    countryContainer.appendChild(countryName);
    countryContainer.appendChild(countryFlag);
    } catch (err) {
        console.log("Error fetch:", err);

    }
}
showCountry();

btn.addEventListener("click", showCountry);