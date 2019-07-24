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
});