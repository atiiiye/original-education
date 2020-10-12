$(document).ready(function () {
    $("li.dropdown-item").on("click", function (e) {
      $(this).parents("ul.dropdown-menu.show").removeClass("show");
      $(this).parents("li.nav-item.dropdown.show").removeClass("show");
      $(this)
        .parents("div.collapse")
        .prev("div.hamburger-menu.navbar-toggler")
        .addClass("collapsed");
    });

    $("li#list-item").on("click", function (e) {
      $(this).parents("div.collapse.navbar-collapse").toggleClass("show");
      $(this)
        .parents("div.navbar-right")
        .children("div.navbar-toggler")
        .children("span.navbar-toggler-icon")
        .toggleClass("change");
    });

    $("li.dropdown-item").on("click", function (e) {
      $(this).parents("div.collapse.navbar-collapse.show").removeClass("show");
      $(this)
        .parents("div.navbar-right")
        .children("div.navbar-toggler")
        .children("span.navbar-toggler-icon")
        .toggleClass("change");
    });

    let nanBarTogglerIcon = document.querySelector(".navbar-toggler-icon");
    let navItemDropdowns = document.querySelectorAll("li.nav-item.dropdown");

    nanBarTogglerIcon.addEventListener("click", function (e) {
      nanBarTogglerIcon.classList.toggle("change");
    });

    navItemDropdowns.forEach((navItem) =>
      navItem.addEventListener("mouseover", function () {
        navItem.classList.add("show");
        let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
        dropdownMenus.classList.add("show");
      })
    );

    navItemDropdowns.forEach((navItem) =>
      navItem.addEventListener("mouseleave", function () {
        navItem.classList.remove("show");
        let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
        dropdownMenus.classList.remove("show");
      })
    );
})