window.onscroll = () => {
    let btnScroll = document.querySelector('.btn__scroll');

    if (window.pageYOffset > 100) {
        btnScroll.classList.add('show');
    } else {
        btnScroll.classList.remove('show');
    }
}

// Menu Nav Mobile Tablet
const menuNavMobile = document.querySelector('.nav-mobile-container');
const btnOpenNav = document.querySelector('.btn-menu-nav-mobile');
const contentSpan = document.getElementById('nav-mobile-span');

btnOpenNav.onclick = function() {
    var heightNavMobile = menuNavMobile.style.maxHeight;

    if (heightNavMobile == '0px'){
        contentSpan.innerHTML = 'Close';

        if(SubNavMenu.style.maxHeight != '0px'){
            menuNavMobile.style.maxHeight = '400px';
        }else{
            menuNavMobile.style.maxHeight = '311px';
        }

    }else if (heightNavMobile != '0px') {
        contentSpan.innerHTML = 'Menu';
        menuNavMobile.style.maxHeight = '0px';
    }
}

// Sub Nav Menu Mobile
const btnCloseSubNav = document.querySelector('.subnav__mobile-link-close');
const btnOpenSubNav = document.querySelector('.subnav__mobile-link-open');
const SubNavMenu = document.querySelector('.subnav__mobile');

btnOpenSubNav.onclick = function() {
    btnOpenSubNav.style.display = 'none';
    btnCloseSubNav.style.display = 'block';

    menuNavMobile.style.maxHeight = '400px';
    SubNavMenu.style.maxHeight = '286px'; 
}

btnCloseSubNav.onclick = function() {
    btnCloseSubNav.style.display = 'none';
    btnOpenSubNav.style.display = 'block';

    menuNavMobile.style.maxHeight = '311px';
    SubNavMenu.style.maxHeight = '0px';
}

// Menu Link function
function slideOutCart(options) {
    var menuLink = document.querySelector(options.class);

    var showAnimation = 'showMenuLink ease 0.3s'
    var hideAnimation = 'hideMenuLink ease 0.3s';
    
    const btnMenuLink = document.querySelector('.btn__cart-main');
    var cartTitleMain = document.querySelector('.cart-title-main');
    var iconTurn = document.querySelector('.btn__cart-icon-main');

    
    

    btnMenuLink.onclick = function(){
        var checkMenuHide = menuLink.style.opacity == '0';
        var checkMenuShow = menuLink.style.opacity == '1';

        if(checkMenuHide) {
            menuLink.style.animation = showAnimation;
            menuLink.style.opacity = '1';
            iconTurn.classList.add('turn');
            cartTitleMain.classList.add('hide');
        }else if (checkMenuShow) {
            menuLink.style.animation = hideAnimation;
            menuLink.style.opacity = '0';
            iconTurn.classList.remove('turn');
            cartTitleMain.classList.remove('hide');
        }
    }
}
