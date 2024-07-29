document.getElementById('toggleButton').addEventListener('click', function() {
    var element = document.getElementById('navMenu');
    var button = document.getElementById('toggleButton');
    var icon = button.querySelector('img');
    
    if (element.style.display === 'none') {
        element.style.display = 'block';
        icon.src = 'assets/icons/toggle-close.png';
    } else {
        element.style.display = 'none';
        icon.src = 'assets/icons/toggle-menu.png';
    }
});