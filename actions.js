window.onload = function () {
    let projects = document.getElementById('#projects');
    projects.addEventListener("click", toggleVisibility)
}



function toggleVisibility(id) {
    console.log("test")
    let div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}


//projects.addEventListener("click", toggleVisibility)