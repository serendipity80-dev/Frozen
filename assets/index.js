const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

// fixed navbar
const navbar = document.querySelector('#navigation');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-links")
    }else{
        topLink.classList.remove("show-links")
    }
}); 

// smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().
height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight

        if (!fixedNav) {
            position = position - navHeight
        }
        if (navHeight > 82) {
            position = position + containerHeight
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    });
});

// SET THE REMAINING TIME - COUNTDOWN

let deadline = new Date("Oct 31,2021 17:00:00 ").getTime();

let frozen = setInterval(function () {

    let now = new Date().getTime();
    
    let total = deadline - now;

    let days = Math.floor(total / (1000*60*60*24));
    let hours = Math.floor((total % (1000*60*60*24))/ (1000*60*60));
    let minutes = Math.floor((total % (1000*60*60)) / (1000*60));
    let seconds = Math.floor(( total % (1000*60))/ 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;

    

    if (total < 0) {
        clearInterval(frozen);

        document.querySelectorAll('#countdown').innerHTML = "EXPIRED"
        
    }

},1000);

