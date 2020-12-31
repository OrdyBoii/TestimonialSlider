const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
let slideIndex = 1;

const changeSlide = (n) => {
    changeImage(slideIndex += n);
}

const changeImage = (n) => {
    let i;
    let clients = document.querySelectorAll(".client-image");
    let testimonial = document.querySelectorAll(".testimonial");
    let clientName = document.querySelectorAll(".client");
    if(n > clients.length && testimonial.length && clientName.length) {
        slideIndex = 1;
    } 
    if(n < 1) {
        slideIndex = clients.length && testimonial.length && clientName.length;
    }
    for (i = 0; i < clients.length; i++) {
        clients[i].style.display = "none";
        testimonial[i].style.display = "none";
        clientName[i].style.display = "none";
    }
    clients[slideIndex-1].style.display = 'block';
    testimonial[slideIndex-1].style.display = 'block';
    clientName[slideIndex-1].style.display = 'block';
}

changeImage(slideIndex);