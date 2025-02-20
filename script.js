document.addEventListener("DOMContentLoaded", () => {
    const loadingDiv = document.getElementById("loading");
    const ipInfoDiv = document.getElementById("ip-info");

    fetch("http://ip-api.com/json/")
        .then(response => response.json())
        .then(data => {
            if (data.status === "fail") {
                loadingDiv.innerHTML = "Error fetching IP details.";
                return;
            }

            document.getElementById("ip").textContent = data.query;
            document.getElementById("city").textContent = data.city;
            document.getElementById("region").textContent = data.regionName;
            document.getElementById("country").textContent = data.country;
            document.getElementById("isp").textContent = data.isp;
            document.getElementById("timezone").textContent = data.timezone;

            loadingDiv.style.display = "none";
            ipInfoDiv.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
            loadingDiv.innerHTML = "Failed to load IP data.";
        });
});
