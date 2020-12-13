//  This Is Code Offer
const element_offer = document.getElementById('offer'),
      offers = ['Off 10%! Shop Now Man', '50% - 80% off on hion', '20% off Entire Purchase Promo code: offT20', 'Off 50%! Shop Now', 'Off 10%! Shop Now Man', '50% - 80% off on hion', '20% off Entire Purchase Promo code: offT20'];

setInterval(() => {
    element_offer.textContent = offers[Math.floor(Math.random() * offers.length)];
}, 2500);




//  This is Code in Icon Navbar For Icon Search
const icon_Search = document.getElementById('search'),
      show_search = document.getElementById('show-search'),
      hide_search = document.getElementById('hide-search');


icon_Search.addEventListener('click', function (e) {
    e.preventDefault();

    if (show_search.style.height === '0px' ) {  

        show_search.style.height = '60px'

    } else {

        show_search.style.height = '0px'

    }
});


hide_search.addEventListener('click', function () {
    show_search.style.height = '0px'
});
// ========================================================






//  This is Code in Icon Navbar For Icon Side Menu
const side_Menu = document.getElementById('side-menu'),
      show_Menu = document.getElementById('show-menu'),
      hide_Menu = document.getElementById('hide-menu');


side_Menu.addEventListener('click', function (e) {
    e.preventDefault();

    if (show_Menu.style.right === '-290px' ) {  

        show_Menu.style.right = '0px'
    }
});

hide_Menu.addEventListener('click', function () {
    show_Menu.style.right = '-290px'
});

// ========================================================

// Show Navbar

document.querySelector('.span-click').onclick = function () {

    document.querySelector('.nav-list').style.display = 'inline-block';

}