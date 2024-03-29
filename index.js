import {getVotersCount} from "stats.js";

const  = document.querySelector("#primary-job-select");
const count = document.querySelector("#count");
const cityName = document.querySelector("#city-name");

city.addEventListener("change", () => {
    if (!city.value) {
        return false;
    }
    fetch(`https://jasonkerr.github.io/${city.value}.json`
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cityName.textContent = city.options[city.selectedIndex].textContent;
            count.textContent = getVotersCount(data);
        });
});
