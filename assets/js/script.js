document.getElementById('toggleButton').addEventListener('click', function() {
    let navMenu = document.getElementById('navMenu');
    let button = document.getElementById('toggleButton');
    let icon = button.querySelector('img');

    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block';
        icon.src = 'assets/icons/toggle-close.png';
    } else {
        navMenu.style.display = 'none';
        icon.src = 'assets/icons/toggle-menu.png';
    }
});


