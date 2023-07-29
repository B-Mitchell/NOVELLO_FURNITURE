let navToggle = document.getElementById('toggle');
let navMobileList = document.getElementById('nav_ul_items');

navToggle.addEventListener('click' , function() {
    navMobileList.classList.toggle('active');
});