window.onload = function () {
    const lookupBtn = document.getElementById("lookup");
    const lookupCitiesBtn = document.getElementById("lookup-cities");
    const input = document.getElementById("country");
    const result = document.getElementById("result");

    // Lookup country 
    lookupBtn.addEventListener("click", function () {
        let country = input.value.trim();

        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });

    // Lookup cities 
    lookupCitiesBtn.addEventListener("click", function () {
        let country = input.value.trim();

        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });
};
