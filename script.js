function toggleMenu() {
    const nav = document.getElementById('hamburger-nav');
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');

    nav.classList.toggle('open');
    icon.classList.toggle('open');
    menu.classList.toggle('open');
}
