//------------------------------------- Sidebar Script -------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger_dis');
    const sidebar = document.querySelector('.sidebar');
    const close = document.querySelector('.close_btn');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

    hamburger.addEventListener('click', function () {
        toggleSidebar();
    });

    close.addEventListener('click', function () {
        toggleSidebar();
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});

let icon = document.getElementById("dark_icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme"))
        icon.src = "assests/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    else
    icon.src = "assests/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
};