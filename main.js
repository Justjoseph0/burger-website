let showSide = document.querySelector('.iconShow');
let navBar = document.querySelector('#navbarShow');
let isOpen;

showSide.onclick = function() {
    isOpen = !isOpen;

    if (isOpen) {
        navBar.style.display = 'block';
        showSide.querySelector('.showNav').style.display = 'none';
        showSide.querySelector('.closeNav').style.display = 'block';
    } else {
        navBar.style.display = 'none';
        showSide.querySelector('.showNav').style.display = 'block';
        showSide.querySelector('.closeNav').style.display = 'none';
    }
}
