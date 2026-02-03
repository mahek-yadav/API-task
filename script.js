document.getElementById("showLocation").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("loc").textContent = "Geolocation not supported.";
    }
});

function showPosition(position) {
    const loc = document.getElementById("loc");
    loc.innerHTML = `Latitude: <span>${position.coords.latitude.toFixed(4)}</span><br>Longitude: <span>${position.coords.longitude.toFixed(4)}</span>`;
    loc.classList.add("show");
}

function showError(error) {
    const loc = document.getElementById("loc");
    loc.textContent = "Unable to retrieve location.";
    loc.classList.add("show");
}
