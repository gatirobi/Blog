
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const banner = document.querySelector('.banner');
const about = document.querySelector('.about');

            
    menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    banner.classList.toggle('inactive');
    about.classList.toggle('inactive');

    }
     window.addEventListener('scroll', function() {

    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
})
       