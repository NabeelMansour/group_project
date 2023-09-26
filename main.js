const faBars = document.getElementById('hamburger-menu');

faBars.addEventListener('click', toggleBar);

function toggleBar() {
  const nav = document.getElementById('header-list');
  if (nav.style.visibility === 'hidden') {
    nav.style.visibility = 'visible';
  } else {
    nav.style.visibility = 'hidden';
  }
}
