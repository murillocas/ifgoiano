const btnMobile = document.getElementById("btn-mobile");  



function toggleMenu(){
    if(event.type === "touchstart") {
        event.preventDefault();
    }
    const Nav = document.getElementById("nav-Menu");
    Nav.classList.toggle("active");
    ;
    
};


btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);