import './sass/app.scss';
import './noCopyRightCode';
// Scroll Down Show on Scroll Up
(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.nav-con');
    const selctBox = document.querySelector(".select-box");
    const boxOpstion = document.querySelector("#boxOpstion");
    const musicPlayer = document.querySelector("#musicPlayer");  // musicPlayer
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-54px";
            navbar.style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0)";
            selctBox.style.height = "0px";
            boxOpstion.style.height = "0px";
            musicPlayer.style.height = "0px";
            musicPlayer.style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0)";

        } else {
            navbar.style.top = "0";
            navbar.style.boxShadow = "0 0 70px 10px rgba(0,0,0,0.7)";
            musicPlayer.style.height = "150px";
            musicPlayer.style.boxShadow = "0 0 70px 10px rgba(0,0,0,0.8)";
        }
        lastScrollTop = scrollTop;
    });
})();
// end
(() => {
    const btnOptions = document.querySelector("#btnChapter")
    const selectBox = document.querySelector(".select-box")
    const boxOpstion = document.querySelector("#boxOpstion");
    const btnOpstion = document.querySelector("#btnOpstion");

    btnOptions.addEventListener("click", e => {
        if (selectBox.style.height === "0px") {
            if (boxOpstion.style.height === "200px") {
                boxOpstion.style.height = "0px"
            }
            selectBox.style.height = "300px"
        } else {
            selectBox.style.height = "0px"
        }
    })
    btnOpstion.addEventListener("click", e => {
        if (boxOpstion.style.height === "0px") {
            if (selectBox.style.height === "300px") {
                selectBox.style.height = "0px"
            }
            boxOpstion.style.height = "200px"
        } else {
            boxOpstion.style.height = "0px"
        }
    })
})();
import './api';
import './music';