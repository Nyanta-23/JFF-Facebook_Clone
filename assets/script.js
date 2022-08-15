const language = document.querySelectorAll(".language a");

// console.log(getTheElement.textCreatePage. = "Create Page for celebriy, brand, or business.);



language.forEach(function (e) {

    e.addEventListener("click", function (list) {
        if (list.target.innerText === "Bahasa Indonesia") {
            indonesian();
        } else if (list.target.innerText === "English (UK)") {
            english();
        } else if (list.target.innerText === "Basa Jawa") {
            basaJawa();
        } else if (list.target.innerText === "Bahasa Melayu") {
            BahasaMelayu();
        } else if (list.target.innerText === "Français (France)") {
            france()
        } else if (list.target.innerText === "Español") {
            spainsh();
        } else if (list.target.innerText === "Português (Brasil)") {
            portugies();
        } else if (list.target.innerText === "Deutsch") {
            deutsch();
        } else {
            alert("Link EROR");
        }
    });
});