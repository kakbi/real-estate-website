export function initMenu() {
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    const submenuParent = document.querySelector('.has-submenu');
    const submenu = submenuParent?.querySelector('.submenu');

    if (iconMenu && menuBody) {
        iconMenu.addEventListener('click', function () {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');
        });
    }

    if (submenuParent && submenu) {
        submenuParent.addEventListener('click', function (e) {
            if (window.innerWidth <= 767) {
                e.preventDefault;
                submenuParent.classList.toggle('active');
                submenu.style.display = submenuParent.classList.contains(
                    'active'
                )
                    ? 'block'
                    : 'none';
            }
        });
    }
}
