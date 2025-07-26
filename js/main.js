// Header scroll
// let nav = document.querySelector(".navbar");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e)
{
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

function filterCities() {
    const searchInput = document.getElementById('citySearch').value.toLowerCase();
    const dropdown = document.getElementById('cityDropdown');
    const options = dropdown.getElementsByTagName('option');
    
    for (let i = 1; i < options.length; i++) {
        const option = options[i];
        const cityName = option.textContent.toLowerCase();
        if (cityName.indexOf(searchInput) === -1) {
            option.style.display = 'none';
        } else {
            option.style.display = 'block';
        }
    }
}

// Update payment method info based on selection
function updatePaymentInfo(plan) {
    const paymentMethod = document.getElementById(plan).querySelector('.payment-method').value;
    const paymentInfo = document.getElementById(`${plan}Payment`);
    
    if (paymentMethod === "creditCard") {
        paymentInfo.innerHTML = "Pay securely using Credit Card.";
    } else if (paymentMethod === "paypal") {
        paymentInfo.innerHTML = "Pay securely using PayPal.";
    }
}

// How It Works:

//     Navbar: A basic navigation bar with links to Home, Services, Pricing, and Contact.
//     **Banner


let index = 0;

function moveSlide(step) {
    const slider = document.querySelector('.slider');
    const totalCards = document.querySelectorAll('container1').length;

    index += step;

    if (index < 0) {
        index = totalCards - 1;
    } else if (index >= totalCards) {
        index = 0;
    }

    const cardWidth = document.querySelector('container1').offsetWidth;
    slider.style.transform = `translateX(-${index * (cardWidth + 20)}px)`;
}
