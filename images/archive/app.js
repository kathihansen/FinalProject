const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const search = form.querySelector("input[type=search]");
    search.value = "site:extendsim.com" + search.value;
    form.submit();
});

function myFunction() {
    const x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}