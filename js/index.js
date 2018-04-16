let tabs = document.querySelector(".tabs");
let itemTabs = document.querySelectorAll(".tabs__menu-item");
let elementTabs = document.querySelectorAll(".tabs__element");

tabs.addEventListener("click", function(e) {
  let element = e.target, elTab;

  if (element.classList.contains("tabs__menu-item")) {
    Object.keys(elementTabs).forEach(function(i) {
      elementTabs[i].classList.remove("tabs__element--active");
      itemTabs[i].classList.remove("tabs__menu--active");
    });

    elTab = document.getElementById(element.dataset.tabs);
    elTab.classList.add("tabs__element--active");
    element.classList.add("tabs__menu--active");
  }
});
