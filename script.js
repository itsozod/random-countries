async function showCountry() {
    const response = await fetch(" https://restcountries.com/v3.1/all", { mode: "cors"});
    const data = await response.json();
    console.log(data);
}
showCountry();