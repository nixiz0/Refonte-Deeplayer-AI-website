/* Dynamic Navbar on Laptop*/
window.onload = function() {
  if (window.innerWidth > 1020) {
    window.onscroll = function() {
      var navbar = document.querySelector('nav');
      var distanceFromTop = window.pageYOffset > 5;
    
      if (distanceFromTop > navbar.offsetTop) {
        navbar.classList.add('fixed-navbar');
      } else {
        navbar.classList.remove('fixed-navbar');
      }
    };
  }
};
/* ---------------- */

/* Toggle Navbar Mobil */
function toggleNav() {
  var navLinks = document.getElementById("nav_links");
  navLinks.classList.toggle("nav-expanded");
}
/* ---------------- */

/* Form script */
function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}
/* ---------------- */

/* Animation Effect */
const navbar = document.getElementById('navbar');
const home = document.getElementById('home');
const aboutus = document.getElementById('about-us');
const map = document.getElementById('map');
const experiences = document.getElementById('experiences');
const contact = document.getElementById('contact');

const observerSlideRight = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slideInRight');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('slideInRight');
    }
  });
});

const observerFadeleft = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInLeft');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fadeInLeft');
    }
  });
});

const observerfadeInUp = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacityEffect');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('opacityEffect');
    }
  });
});

observerSlideRight.observe(aboutus);
observerFadeleft.observe(home);
observerfadeInUp.observe(navbar);
observerfadeInUp.observe(map);
observerfadeInUp.observe(contact);
observerFadeleft.observe(experiences);
/* ---------------- */
