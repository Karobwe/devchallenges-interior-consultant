export default function() {
    let menuToggler = document.querySelector('.menu-toggler');
    let menuCollapse = document.querySelector('.menu-collapse');
    let menuIcon = document.querySelector('.material-icons');
    let menuLinks = document.querySelectorAll('.menu-collapse li');

    menuToggler.addEventListener('click', (e) => {
        menuCollapse.classList.toggle('opened');

        if(!menuCollapse.classList.contains('opened')) {
            // show opened icon
            menuIcon.innerHTML = 'menu';
        } else {
            // show closed icon
            menuIcon.innerHTML = 'close';
        }
    });

    // simulate server response on link click
    // TODO: should be adapted on real prod environment
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            menuLinks.forEach(otherLink => {
                otherLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
}
