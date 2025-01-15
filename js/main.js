document.getElementById('nav_mobile_btn').addEventListener('click', function () {
    const target = document.getElementById('nav_mobile');
    if (target.classList.contains('show')) {
        target.classList.remove('show');
    } else {
        target.classList.add('show');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000);
});