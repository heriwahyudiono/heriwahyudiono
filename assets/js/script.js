document.getElementById('toggleButton').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    var button = document.getElementById('toggleButton');
    var icon = button.querySelector('img');
    
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block';
        icon.src = 'assets/icons/toggle-close.png';
    } else {
        navMenu.style.display = 'none';
        icon.src = 'assets/icons/toggle-menu.png';
    }
});