/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGFuZ3VhZ2VzIGluZmluYXRlIHNjcm9sZSBhbmltYXRpb24gc3RhcnRcclxuY29uc3Qgc2Nyb2xsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGxlclwiKTtcclxuXHJcbmlmKCF3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMpe1xyXG4gICAgYWRkQW5pbWF0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbigpe1xyXG4gICAgc2Nyb2xsZXJzLmZvckVhY2goKHNjcm9sbGVyKT0+IHtcclxuICAgICAgICBzY3JvbGxlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFuaW1hdGVkXCIsdHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsZXJJbm5lciA9IHNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsZXJfaW5uZXJcIik7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsZXJDb250ZW50ID0gQXJyYXkuZnJvbShzY3JvbGxlcklubmVyLmNoaWxkcmVuKTtcclxuICAgICAgICBzY3JvbGxlckNvbnRlbnQuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyx0cnVlKTtcclxuICAgICAgICAgICAgc2Nyb2xsZXJJbm5lci5hcHBlbmRDaGlsZChkdXBsaWNhdGVkSXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzY3JvbGxlckNvbnRlbnQuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyx0cnVlKTtcclxuICAgICAgICAgICAgc2Nyb2xsZXJJbm5lci5hcHBlbmRDaGlsZChkdXBsaWNhdGVkSXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzY3JvbGxlckNvbnRlbnQuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyx0cnVlKTtcclxuICAgICAgICAgICAgc2Nyb2xsZXJJbm5lci5hcHBlbmRDaGlsZChkdXBsaWNhdGVkSXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pIFxyXG59XHJcblxyXG4vLyBsYW5ndWFnZXMgaW5maW5hdGUgc2Nyb2xlIGFuaW1hdGlvbiBlbmRcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9