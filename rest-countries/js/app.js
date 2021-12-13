const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
}
const getCountryHTML = country => {
    // do destructuring for only three, if we need more than three datas that time we won't do it. but if we need onlt one, two or three datas that time we will do it for getting better performance
    const { name, capital, flag } = country;
    return `
        <div class="country">
            <h2>${name}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flag}">
        </div>
    `;
}
loadCountries();