const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up")
.forEach(el=>observer.observe(el));