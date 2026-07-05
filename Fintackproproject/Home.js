

const mode = document.getElementById("mode");

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
 if (document.body.classList.contains("dark-mode")) {
        mode.src = "./imges/sunny.png";
    } else {
        mode.src = "./imges/moon.png";
    }
});