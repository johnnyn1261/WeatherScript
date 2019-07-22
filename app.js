window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezeone = document.querySelector(".location-timezone");

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
                const {temperature, summary} = data.currently;

                // Set DOM elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezeone.textContent = data.timezone;
            });
        });
    } else {
        h1.textContent = "Location acess not granted"
    }
});