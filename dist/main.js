/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// nav bar settings start

// add class navbarScroll on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarScroll");
    } else {
        header.classList.remove("navbarScroll");
    }
};

// nav bar settings end

// languages infinate scrole animation start
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

// languages infinate scrole animation end

// resume download

function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement("a");
        save.href = fileURL;
        save.target = "_blank";
        var filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
        save.download = fileName || filename;
        if (
            navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
            navigator.userAgent.search("Chrome") < 0
        ) {
            document.location = save.href;
            // window event not working here
        } else {
            var evt = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: false,
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, "_blank");
        _window.document.close();
        _window.document.execCommand("SaveAs", true, fileName || fileURL);
        _window.close();
    }
}

const dBtn = document.getElementById("resume-btn");

dBtn.addEventListener("click",function () {
    download_file(
        "./assets/CHANDAN.KP_BE_ISE_2023.pdf",
        "CHANDAN.KP_BE_ISE_2023.pdf"
    );
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdiBiYXIgc2V0dGluZ3Mgc3RhcnRcclxuXHJcbi8vIGFkZCBjbGFzcyBuYXZiYXJTY3JvbGwgb24gbmF2YmFyIHNjcm9sbFxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGlmICh0b3AgPj0gMTAwKSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJTY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyU2Nyb2xsXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gbmF2IGJhciBzZXR0aW5ncyBlbmRcclxuXHJcbi8vIGxhbmd1YWdlcyBpbmZpbmF0ZSBzY3JvbGUgYW5pbWF0aW9uIHN0YXJ0XHJcbmNvbnN0IHNjcm9sbGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsZXJcIik7XHJcblxyXG5pZiAoIXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcykge1xyXG4gICAgYWRkQW5pbWF0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbigpIHtcclxuICAgIHNjcm9sbGVycy5mb3JFYWNoKChzY3JvbGxlcikgPT4ge1xyXG4gICAgICAgIHNjcm9sbGVyLnNldEF0dHJpYnV0ZShcImRhdGEtYW5pbWF0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsZXJJbm5lciA9IHNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsZXJfaW5uZXJcIik7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsZXJDb250ZW50ID0gQXJyYXkuZnJvbShzY3JvbGxlcklubmVyLmNoaWxkcmVuKTtcclxuICAgICAgICBzY3JvbGxlckNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkSXRlbS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgc2Nyb2xsZXJJbm5lci5hcHBlbmRDaGlsZChkdXBsaWNhdGVkSXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2Nyb2xsZXJDb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlZEl0ZW0gPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgZHVwbGljYXRlZEl0ZW0uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNjcm9sbGVySW5uZXIuYXBwZW5kQ2hpbGQoZHVwbGljYXRlZEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjcm9sbGVyQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZWRJdGVtID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGR1cGxpY2F0ZWRJdGVtLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBzY3JvbGxlcklubmVyLmFwcGVuZENoaWxkKGR1cGxpY2F0ZWRJdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBsYW5ndWFnZXMgaW5maW5hdGUgc2Nyb2xlIGFuaW1hdGlvbiBlbmRcclxuXHJcbi8vIHJlc3VtZSBkb3dubG9hZFxyXG5cclxuZnVuY3Rpb24gZG93bmxvYWRfZmlsZShmaWxlVVJMLCBmaWxlTmFtZSkge1xyXG4gICAgLy8gZm9yIG5vbi1JRVxyXG4gICAgaWYgKCF3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xyXG4gICAgICAgIHZhciBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgc2F2ZS5ocmVmID0gZmlsZVVSTDtcclxuICAgICAgICBzYXZlLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gZmlsZVVSTC5zdWJzdHJpbmcoZmlsZVVSTC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgICAgICBzYXZlLmRvd25sb2FkID0gZmlsZU5hbWUgfHwgZmlsZW5hbWU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhpcGFkfGlwaG9uZXxzYWZhcmkpLykgJiZcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goXCJDaHJvbWVcIikgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gc2F2ZS5ocmVmO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cgZXZlbnQgbm90IHdvcmtpbmcgaGVyZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBldnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcclxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNhdmUuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgICAgICAgICAod2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMKS5yZXZva2VPYmplY3RVUkwoc2F2ZS5ocmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIElFIDwgMTFcclxuICAgIGVsc2UgaWYgKCEhd2luZG93LkFjdGl2ZVhPYmplY3QgJiYgZG9jdW1lbnQuZXhlY0NvbW1hbmQpIHtcclxuICAgICAgICB2YXIgX3dpbmRvdyA9IHdpbmRvdy5vcGVuKGZpbGVVUkwsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgIF93aW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgICAgICBfd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKFwiU2F2ZUFzXCIsIHRydWUsIGZpbGVOYW1lIHx8IGZpbGVVUkwpO1xyXG4gICAgICAgIF93aW5kb3cuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdW1lLWJ0blwiKTtcclxuXHJcbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgZG93bmxvYWRfZmlsZShcclxuICAgICAgICBcIi4vYXNzZXRzL0NIQU5EQU4uS1BfQkVfSVNFXzIwMjMucGRmXCIsXHJcbiAgICAgICAgXCJDSEFOREFOLktQX0JFX0lTRV8yMDIzLnBkZlwiXHJcbiAgICApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9