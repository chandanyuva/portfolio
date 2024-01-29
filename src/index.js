// nav bar settings start

// add class navbarScroll on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarScroll');
    }
    else {
        header.classList.remove('navbarScroll');
    }
}

// nav bar settings end




// languages infinate scrole animation start
const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller)=> {
        scroller.setAttribute("data-animated",true);
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden',true);
            scrollerInner.appendChild(duplicatedItem);
        })
        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden',true);
            scrollerInner.appendChild(duplicatedItem);
        })
        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden',true);
            scrollerInner.appendChild(duplicatedItem);
        })
    }) 
}

// languages infinate scrole animation end

