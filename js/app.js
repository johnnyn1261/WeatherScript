window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezeone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureUnit = document.querySelector(".degree");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/aed16ea40881ad68d90019bcd1f9c9e9/${lat},${long}`;

            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                const {temperature, summary, icon} = data.currently;

                // Set DOM elements from API
                let farenheit = Math.round(temperature * 10) / 10;
                temperatureDegree.textContent = farenheit;
                temperatureDescription.textContent = summary;
                locationTimezeone.textContent = data.timezone.replace("_", "");

                setIcons(icon, document.querySelector(".icon"));

                let celsius = (temperature - 32) * (5/9);
                temperatureSection.addEventListener("click", () => {
                    if (temperatureUnit.textContent === "F") {
                        temperatureUnit.textContent = "C";
                        temperatureDegree.textContent = Math.round(celsius * 10) / 10;
                    } else {
                        temperatureUnit.textContent = "F";
                        temperatureDegree.textContent = farenheit;
                    }
                });

                setDay1(data);
                setDay2(data);
                setDay3(data);
            });
        });
    } else {
        h1.textContent = "Location access not granted";
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        console.log(currentIcon);
        return skycons.set(iconID, Skycons[currentIcon]);
    }

    function setDay1(data) {
        const {apparentTemperatureHigh, summary, icon} = data.daily.data[0];
        let temperatureDescription = document.querySelector("#day1 .temperature-description");
        let temperatureDegree = document.querySelector("#day1 .temperature-degree");
        let temperatureSection = document.querySelector("#day1 .temperature");
        let temperatureUnit = document.querySelector("#day1 .degree");

        // Set DOM elements from API
        let farenheit = Math.round(apparentTemperatureHigh * 10) / 10;
        temperatureDegree.textContent = farenheit;
        temperatureDescription.textContent = summary;
        locationTimezeone.textContent = data.timezone.replace("_", "");

        setIcons(icon, document.querySelector("#day1 .icon"));

        let celsius = (apparentTemperatureHigh - 32) * (5/9);
        temperatureSection.addEventListener("click", () => {
            if (temperatureUnit.textContent === "F") {
                temperatureUnit.textContent = "C";
                temperatureDegree.textContent = Math.round(celsius * 10) / 10;
            } else {
                temperatureUnit.textContent = "F";
                temperatureDegree.textContent = farenheit;
            }
        });
    }

    function setDay2(data) {
        const {apparentTemperatureHigh, summary, icon} = data.daily.data[1];
        let temperatureDescription = document.querySelector("#day2 .temperature-description");
        let temperatureDegree = document.querySelector("#day2 .temperature-degree");
        let temperatureSection = document.querySelector("#day2 .temperature");
        let temperatureUnit = document.querySelector("#day2 .degree");

        // Set DOM elements from API
        let farenheit = Math.round(apparentTemperatureHigh * 10) / 10;
        temperatureDegree.textContent = farenheit;
        temperatureDescription.textContent = summary;
        locationTimezeone.textContent = data.timezone.replace("_", "");

        setIcons(icon, document.querySelector("#day2 .icon"));

        let celsius = (apparentTemperatureHigh - 32) * (5/9);
        temperatureSection.addEventListener("click", () => {
            if (temperatureUnit.textContent === "F") {
                temperatureUnit.textContent = "C";
                temperatureDegree.textContent = Math.round(celsius * 10) / 10;
            } else {
                temperatureUnit.textContent = "F";
                temperatureDegree.textContent = farenheit;
            }
        });
    }

    function setDay3(data) {
        const {apparentTemperatureHigh, summary, icon} = data.daily.data[2];
        let temperatureDescription = document.querySelector("#day3 .temperature-description");
        let temperatureDegree = document.querySelector("#day3 .temperature-degree");
        let temperatureSection = document.querySelector("#day3 .temperature");
        let temperatureUnit = document.querySelector("#day3 .degree");

        // Set DOM elements from API
        let farenheit = Math.round(apparentTemperatureHigh * 10) / 10;
        temperatureDegree.textContent = farenheit;
        temperatureDescription.textContent = summary;
        locationTimezeone.textContent = data.timezone.replace("_", "");

        setIcons(icon, document.querySelector("#day3 .icon"));

        let celsius = (apparentTemperatureHigh - 32) * (5/9);
        temperatureSection.addEventListener("click", () => {
            if (temperatureUnit.textContent === "F") {
                temperatureUnit.textContent = "C";
                temperatureDegree.textContent = Math.round(celsius * 10) / 10;
            } else {
                temperatureUnit.textContent = "F";
                temperatureDegree.textContent = farenheit;
            }
        });
    }
});