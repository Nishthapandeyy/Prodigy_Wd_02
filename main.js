document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function opentab(tablink) { 
        tablinks.forEach(function (link) { 
            link.classList.remove("active-link");
        });

        tabcontents.forEach(function (tabcontent) {
            tabcontent.classList.remove("active-tab");
        });

        var tabname = tablink.getAttribute("data-tab");
        document.querySelector(`#${tabname}`).classList.add("active-tab");
        tablink.classList.add("active-link");
    }

    tablinks.forEach(function (tablink) {
        tablink.addEventListener("click", function () {
            opentab(this);
        });
    });
});