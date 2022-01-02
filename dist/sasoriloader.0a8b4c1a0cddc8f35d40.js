/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ (() => {


// API 
(() => {
    (() => {
        const selected = document.querySelector(".selected")
        const optionsContainer = document.querySelector(".options-container")
        const optionsList = document.querySelectorAll(".option");
        const selectBox = document.querySelector(".select-box")
        optionsList.forEach(o => {
            o.addEventListener("click", elm => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                selectBox.style.height = "0px"
                let el = Number(elm.target.id)

            });
        });
    })();
})();
// end
// Api load image
(() => {
    const imageContiner = document.querySelector(".main");
    const slideValue = document.querySelector(".topspanU");

    // inputSlider.oninput = (()=>{
    //   let value = inputSlider.value;
    //   slideValue.textContent = value;
    //   slideValue.style.left = (value/2) + "%";
    //   slideValue.classList.add("show");
    // });
    // inputSlider.onblur = (()=>{
    //     slideValue.classList.remove("show");
    // });

    // const inputSlider = document.querySelector("input");
    // inputSlider.addEventListener("change" , e => {

    //    let vel = Number(e.target.value)

    //    return vel
    // });

    // console.log(vel);
    // let vel;
    // inputSlider.addEventListener("change", e => {
    //     vel = Number(e.target.value);
    // });


    function createImage(url) {
        let imageTag = document.createElement('img');
        imageTag.classList.add("img");
        imageTag.setAttribute("src", url);
        imageTag.setAttribute("loading", "lazy"); // lazy
        imageTag.setAttribute("alt", "..");
        imageContiner.appendChild(imageTag);
    }

    // document.addEventListener("DOMContentLoaded", () => {
    //     let img = document.querySelector(".main");
    //     imageContiner.style.width = `${vel}%`;
    //     console.log(img);
    // });

    fetch("img.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw Error(response.status);
            }
        })
        .then(response => {
            let defaultChapterNamber = response[0].defaultChapterNamber;
            let userChapters = response[0].userChapters[defaultChapterNamber];
            let allChaptersLength = response[1].allChapters.length;
            let userChaptersLength = response[0].userChapters.length;
            const selected = document.querySelector(".selected")
            selected.innerHTML = `چپتر ${defaultChapterNamber}`;
            if (defaultChapterNamber >= allChaptersLength) {
                alert("خطا")
            } else if (defaultChapterNamber < allChaptersLength) {
                if (userChaptersLength <= allChaptersLength) {
                    if (userChapters.chapterId === response[1].allChapters[defaultChapterNamber].chapterId) {
                        response[1].allChapters[defaultChapterNamber].images.forEach(url => {
                            createImage(url);
                        });
                    }
                } else if (defaultChapterNamber <= allChaptersLength) {
                    console.log("222222222222222222222222222222222222222222222222222222222");
                }
            }
        })
        .catch(error => {
            console.log(error.message);
        })
})();

// (() => {

//     fetch('https://aosasori.com/api/Loader/3190/Arman') //  your api
//         .then(response => response.json())
//         .then(json => console.log(json))

// })();

(() => { // test 

    // fetch('https://jsonplaceholder.typicode.com/todos/1') // jsonplaceholder
    //     .then(res => {
    //         if (res.ok) {
    //             return res.json();
    //         } else {
    //             throw Error(res.status)
    //         }
    //     })
    //     .then(data => {
    //         console.log(data.data());
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.data))

})();

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/***/ (() => {

(() => {
    const musicList = [
        {
            title: "Madara Uchiha The God Awakened",
            artist: "Naruto Shippuden",
            audio: "./Music/0/MadaraUchihaTheGodAwakened.mp3",
            image: "./Music/0/MadaraUchihaTheGodAwakened.png"
        },
        {
            title: "Sneaky Snitch",
            artist: "Kevin Macleod",
            audio: "./Music/1/SneakySnitch.mp3",
            image: "./Music/1/SneakySnitch.jpg"
        },
        {
            title: "Don't Be So Serious",
            artist: "Low Roar",
            audio: "./Music/2/Low_Roar_Don't_Be_So_Serious.mp3",
            image: "./Music/2/Low_Roar_Don't_Be_So_Serious.mp3.jpg"
        },
        {
            title: "One-Eyed Maestro",
            artist: "Kevin Macleod",
            audio: "./Music/3/One_Eyed_Maestro.mp3",
            image: "./Music/3/One_Eyed_Maestro.jpg"
        },
        {
            title: "Beggin",
            artist: "Madcon",
            audio: "./Music/4/Beggin.mp3",
            image: "./Music/4/Beggin.png"
        }
    ];

    const
        musicPlayer = document.querySelector(".musicPlayer"),
        title_music = document.querySelector("#title_music"),
        artist_music = document.querySelector("#artist_music"),
        audio_img_cover = document.querySelector("#audio_img_cover"),
        audio = document.querySelector("#audio"),
        playPauseBtn = musicPlayer.querySelector(".play-pause i"),
        prevBtn = document.querySelector("#prev"),
        nextBtn = document.querySelector("#next"),
        progressBar = document.querySelector(".progressBar"),
        ProgressArea = document.querySelector(".mpProgressArea"),
        repeatBtn = document.querySelector("#repeat-plist"),
        duration_slider = document.querySelector("#duration_slider"),
        music_list = document.querySelector(".music__list"),
        music_close = document.querySelector("#music__close"),
        music_itames = document.querySelector(".music__itames"),
        more_music = document.querySelector("#more-music");


    let musicIndex = 2;

    window.addEventListener("load", () => {
        loadMusic(musicIndex);
    });

    function loadMusic(index) {
        title_music.innerText = musicList[index - 1].title;
        artist_music.innerText = musicList[index - 1].artist;
        audio_img_cover.setAttribute("src", musicList[index - 1].image);
        audio.setAttribute("src", musicList[index - 1].audio);
    }

    playPauseBtn.addEventListener("click", () => {
        const isMusicPaused = musicPlayer.classList.contains("paused");
        isMusicPaused ? pausedMusic() : playMusic();
    });
    function playMusic() {
        musicPlayer.classList.add("paused");
        playPauseBtn.innerText = "pause";
        audio.play();
    }

    function pausedMusic() {
        musicPlayer.classList.remove("paused");
        playPauseBtn.innerText = "play_arrow";
        audio.pause();
    }
    nextBtn.addEventListener("click", () => {
        nextMusic();
    });

    prevBtn.addEventListener("click", () => {
        prevMusic();
    });

    function nextMusic() {
        musicIndex++;
        musicIndex > musicList.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }
    function prevMusic() {
        musicIndex--;
        musicIndex < 1 ? musicIndex = musicList.length : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }

    audio.addEventListener("timeupdate", e => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let porgressWidth = (currentTime / duration) * 100;
        progressBar.style.width = `${porgressWidth}%`;

        let musicCurrentTime = document.querySelector(".current"),
            musicDuration = document.querySelector(".druation");
        audio.addEventListener("loadeddata", () => {

            let audioDuration = audio.duration;
            let totaMin = Math.floor(audioDuration / 60);
            let totaSec = Math.floor(audioDuration % 60);
            if (totaSec < 10) {
                totaSec = `0${totaSec}`;
            }
            musicDuration.innerText = `${totaMin}:${totaSec}`;
        });
        let currentMin = Math.floor(currentTime / 60);
        let currenSec = Math.floor(currentTime % 60);
        if (currenSec < 10) {
            currenSec = `0${currenSec}`;
        }
        musicCurrentTime.innerText = `${currentMin}:${currenSec}`;
    });

    ProgressArea.addEventListener("click", e => {
        let porogressWidthval = ProgressArea.clientWidth;
        let clickendoffSetX = e.offsetX;
        let songDuration = audio.duration;

        audio.currentTime = (clickendoffSetX / porogressWidthval) * songDuration;
        playMusic();
    });

    repeatBtn.addEventListener("click", () => {
        let getText = repeatBtn.innerText;
        switch (getText) {
            case "repeat":
                repeatBtn.innerText = "repeat_one";
                repeatBtn.setAttribute("title", "پخش مجدد این آهنگ");
                break;
            case "repeat_one":
                repeatBtn.innerText = "shuffle";
                repeatBtn.setAttribute("title", "پخش تصادفی");
                break;
            case "shuffle":
                repeatBtn.innerText = "repeat";
                repeatBtn.setAttribute("title", "پخش لیست پخش");
                break;
        }
    });

    audio.addEventListener("ended", () => {
        let getText = repeatBtn.innerText;
        switch (getText) {
            case "repeat":
                nextMusic();
                break;
            case "repeat_one":
                audio.currentTime = 0;
                loadMusic(musicIndex);
                playMusic();
                break;
            case "shuffle":
                let randIndex = Math.floor((Math.random() * musicList.length) + 1);
                do {
                    randIndex = Math.floor((Math.random() * musicList.length) + 1);
                } while (musicIndex == randIndex);
                musicIndex = randIndex;
                loadMusic(musicIndex);
                playMusic();
                break;
        }
    });

    duration_slider.addEventListener("input", () => {
        audio.volume = duration_slider.value / 100;
    });

    more_music.addEventListener("click", () => {
        music_list.classList.toggle("show");
    });

    music_close.addEventListener("click", () => {
        more_music.click();
    });

    // music_itames

    for (let music = 0; music < musicList.length; music++) {
        let li = `
            <li class="music__itame" li-index = "${music + 1}">
                <span class="music__title"><span class="music__number">${music + 1} : </span>${musicList[music].title}</span>
                <span class="music__artist">${musicList[music].artist}</span>
                <audio id="${musicList[music].audio}" src="${musicList[music].audio}"></audio>
            </li>
        `
        music_itames.insertAdjacentHTML("beforeend", li);
    }

    const liMusicTag = music_itames.querySelectorAll("li");

    for (let itame = 0; itame < musicList.length; itame++) {

        if (liMusicTag[itame].classList.contains("isPlayMusic")) {
            liMusicTag[itame].classList.remove("isPlayMusic");
        }

        if (liMusicTag[itame].getAttribute("li-index") == musicIndex) {
            music_list.classList.add("isPlayMusic");
        }

        liMusicTag[itame].addEventListener("click", lodeThisMusic, false);
        

    }
    function lodeThisMusic(e) {

        let getLiIndex = e.target.getAttribute("li-index");
        if(getLiIndex) {
            musicIndex = getLiIndex;
            e.target.classList.add("isPlayMusic");
            loadMusic(musicIndex);
            playMusic();
            music_list.classList.remove("show");
        }else {
            musicIndex = e.target.parentNode.getAttribute("li-index");
            loadMusic(musicIndex);
            playMusic();
            music_list.classList.remove("show");
        }
    }

})();




/***/ }),

/***/ "./src/noCopyRightCode.js":
/*!********************************!*\
  !*** ./src/noCopyRightCode.js ***!
  \********************************/
/***/ (() => {

// (()=> {
//     let allImages = document.querySelectorAll("img");
//     allImages.forEach((value)=>{
//         value.oncontextmenu = (e)=>{
//             e.preventDefault();
//         }
//     });
//     document.onkeydown = e => {
//         if(event.keyCode == 123) {
//            return false;
//         }
//         if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//            return false;
//         }
//         if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//            return false;
//         }
//         if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//            return false;
//         }
//         if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//            return false;
//         }
//     }
//     document.addEventListener('contextmenu', e => e.preventDefault());
// })();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.scss */ "./src/sass/app.scss");
/* harmony import */ var _noCopyRightCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noCopyRightCode */ "./src/noCopyRightCode.js");
/* harmony import */ var _noCopyRightCode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_noCopyRightCode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_music__WEBPACK_IMPORTED_MODULE_3__);


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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fzb3JpbG9hZGVyLjBhOGI0YzFhMGNkZGM4ZjM1ZDQwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxQkFBcUI7QUFDOUQ7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ2hJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBLHlDQUF5QyxRQUFRLEdBQUcsUUFBUTtBQUM1RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQSx3Q0FBd0MsV0FBVyxHQUFHLFVBQVU7QUFDaEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQSxtREFBbUQsVUFBVTtBQUM3RCx5RUFBeUUsV0FBVyxXQUFXLHVCQUF1QjtBQUN0SCw4Q0FBOEMsd0JBQXdCO0FBQ3RFLDZCQUE2Qix1QkFBdUIsU0FBUyx1QkFBdUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7VUN6Qko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nhc29yaWxvZGVyLy4vc3JjL3Nhc3MvYXBwLnNjc3M/NTdiMCIsIndlYnBhY2s6Ly9zYXNvcmlsb2Rlci8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vc2Fzb3JpbG9kZXIvLi9zcmMvbXVzaWMuanMiLCJ3ZWJwYWNrOi8vc2Fzb3JpbG9kZXIvLi9zcmMvbm9Db3B5UmlnaHRDb2RlLmpzIiwid2VicGFjazovL3Nhc29yaWxvZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nhc29yaWxvZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Nhc29yaWxvZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYXNvcmlsb2Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Nhc29yaWxvZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2Fzb3JpbG9kZXIvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxyXG4vLyBBUEkgXHJcbigoKSA9PiB7XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnMtY29udGFpbmVyXCIpXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1ib3hcIilcclxuICAgICAgICBvcHRpb25zTGlzdC5mb3JFYWNoKG8gPT4ge1xyXG4gICAgICAgICAgICBvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gby5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Qm94LnN0eWxlLmhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGxldCBlbCA9IE51bWJlcihlbG0udGFyZ2V0LmlkKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG59KSgpO1xyXG4vLyBlbmRcclxuLy8gQXBpIGxvYWQgaW1hZ2VcclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlQ29udGluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBjb25zdCBzbGlkZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BzcGFuVVwiKTtcclxuXHJcbiAgICAvLyBpbnB1dFNsaWRlci5vbmlucHV0ID0gKCgpPT57XHJcbiAgICAvLyAgIGxldCB2YWx1ZSA9IGlucHV0U2xpZGVyLnZhbHVlO1xyXG4gICAgLy8gICBzbGlkZVZhbHVlLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAvLyAgIHNsaWRlVmFsdWUuc3R5bGUubGVmdCA9ICh2YWx1ZS8yKSArIFwiJVwiO1xyXG4gICAgLy8gICBzbGlkZVZhbHVlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBpbnB1dFNsaWRlci5vbmJsdXIgPSAoKCk9PntcclxuICAgIC8vICAgICBzbGlkZVZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gY29uc3QgaW5wdXRTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAvLyBpbnB1dFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIgLCBlID0+IHtcclxuXHJcbiAgICAvLyAgICBsZXQgdmVsID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxyXG5cclxuICAgIC8vICAgIHJldHVybiB2ZWxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHZlbCk7XHJcbiAgICAvLyBsZXQgdmVsO1xyXG4gICAgLy8gaW5wdXRTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcclxuICAgIC8vICAgICB2ZWwgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHVybCkge1xyXG4gICAgICAgIGxldCBpbWFnZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlVGFnLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHVybCk7XHJcbiAgICAgICAgaW1hZ2VUYWcuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7IC8vIGxhenlcclxuICAgICAgICBpbWFnZVRhZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCIuLlwiKTtcclxuICAgICAgICBpbWFnZUNvbnRpbmVyLmFwcGVuZENoaWxkKGltYWdlVGFnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIC8vICAgICBpbWFnZUNvbnRpbmVyLnN0eWxlLndpZHRoID0gYCR7dmVsfSVgO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGltZyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBmZXRjaChcImltZy5qc29uXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0Q2hhcHRlck5hbWJlciA9IHJlc3BvbnNlWzBdLmRlZmF1bHRDaGFwdGVyTmFtYmVyO1xyXG4gICAgICAgICAgICBsZXQgdXNlckNoYXB0ZXJzID0gcmVzcG9uc2VbMF0udXNlckNoYXB0ZXJzW2RlZmF1bHRDaGFwdGVyTmFtYmVyXTtcclxuICAgICAgICAgICAgbGV0IGFsbENoYXB0ZXJzTGVuZ3RoID0gcmVzcG9uc2VbMV0uYWxsQ2hhcHRlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgdXNlckNoYXB0ZXJzTGVuZ3RoID0gcmVzcG9uc2VbMF0udXNlckNoYXB0ZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmlubmVySFRNTCA9IGDahtm+2KrYsSAke2RlZmF1bHRDaGFwdGVyTmFtYmVyfWA7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0Q2hhcHRlck5hbWJlciA+PSBhbGxDaGFwdGVyc0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLYrti32KdcIilcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0Q2hhcHRlck5hbWJlciA8IGFsbENoYXB0ZXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckNoYXB0ZXJzTGVuZ3RoIDw9IGFsbENoYXB0ZXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJDaGFwdGVycy5jaGFwdGVySWQgPT09IHJlc3BvbnNlWzFdLmFsbENoYXB0ZXJzW2RlZmF1bHRDaGFwdGVyTmFtYmVyXS5jaGFwdGVySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VbMV0uYWxsQ2hhcHRlcnNbZGVmYXVsdENoYXB0ZXJOYW1iZXJdLmltYWdlcy5mb3JFYWNoKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbWFnZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRDaGFwdGVyTmFtYmVyIDw9IGFsbENoYXB0ZXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pXHJcbn0pKCk7XHJcblxyXG4vLyAoKCkgPT4ge1xyXG5cclxuLy8gICAgIGZldGNoKCdodHRwczovL2Fvc2Fzb3JpLmNvbS9hcGkvTG9hZGVyLzMxOTAvQXJtYW4nKSAvLyAgeW91ciBhcGlcclxuLy8gICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vICAgICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcclxuXHJcbi8vIH0pKCk7XHJcblxyXG4oKCkgPT4geyAvLyB0ZXN0IFxyXG5cclxuICAgIC8vIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMScpIC8vIGpzb25wbGFjZWhvbGRlclxyXG4gICAgLy8gICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1cylcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSgpKTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uLmRhdGEpKVxyXG5cclxufSkoKTsiLCIoKCkgPT4ge1xyXG4gICAgY29uc3QgbXVzaWNMaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWFkYXJhIFVjaGloYSBUaGUgR29kIEF3YWtlbmVkXCIsXHJcbiAgICAgICAgICAgIGFydGlzdDogXCJOYXJ1dG8gU2hpcHB1ZGVuXCIsXHJcbiAgICAgICAgICAgIGF1ZGlvOiBcIi4vTXVzaWMvMC9NYWRhcmFVY2hpaGFUaGVHb2RBd2FrZW5lZC5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiLi9NdXNpYy8wL01hZGFyYVVjaGloYVRoZUdvZEF3YWtlbmVkLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlNuZWFreSBTbml0Y2hcIixcclxuICAgICAgICAgICAgYXJ0aXN0OiBcIktldmluIE1hY2xlb2RcIixcclxuICAgICAgICAgICAgYXVkaW86IFwiLi9NdXNpYy8xL1NuZWFreVNuaXRjaC5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiLi9NdXNpYy8xL1NuZWFreVNuaXRjaC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJEb24ndCBCZSBTbyBTZXJpb3VzXCIsXHJcbiAgICAgICAgICAgIGFydGlzdDogXCJMb3cgUm9hclwiLFxyXG4gICAgICAgICAgICBhdWRpbzogXCIuL011c2ljLzIvTG93X1JvYXJfRG9uJ3RfQmVfU29fU2VyaW91cy5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiLi9NdXNpYy8yL0xvd19Sb2FyX0Rvbid0X0JlX1NvX1NlcmlvdXMubXAzLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk9uZS1FeWVkIE1hZXN0cm9cIixcclxuICAgICAgICAgICAgYXJ0aXN0OiBcIktldmluIE1hY2xlb2RcIixcclxuICAgICAgICAgICAgYXVkaW86IFwiLi9NdXNpYy8zL09uZV9FeWVkX01hZXN0cm8ubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4vTXVzaWMvMy9PbmVfRXllZF9NYWVzdHJvLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJlZ2dpblwiLFxyXG4gICAgICAgICAgICBhcnRpc3Q6IFwiTWFkY29uXCIsXHJcbiAgICAgICAgICAgIGF1ZGlvOiBcIi4vTXVzaWMvNC9CZWdnaW4ubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4vTXVzaWMvNC9CZWdnaW4ucG5nXCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgbXVzaWNQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljUGxheWVyXCIpLFxyXG4gICAgICAgIHRpdGxlX211c2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZV9tdXNpY1wiKSxcclxuICAgICAgICBhcnRpc3RfbXVzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FydGlzdF9tdXNpY1wiKSxcclxuICAgICAgICBhdWRpb19pbWdfY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1ZGlvX2ltZ19jb3ZlclwiKSxcclxuICAgICAgICBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9cIiksXHJcbiAgICAgICAgcGxheVBhdXNlQnRuID0gbXVzaWNQbGF5ZXIucXVlcnlTZWxlY3RvcihcIi5wbGF5LXBhdXNlIGlcIiksXHJcbiAgICAgICAgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlwiKSxcclxuICAgICAgICBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0XCIpLFxyXG4gICAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc0JhclwiKSxcclxuICAgICAgICBQcm9ncmVzc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1wUHJvZ3Jlc3NBcmVhXCIpLFxyXG4gICAgICAgIHJlcGVhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVwZWF0LXBsaXN0XCIpLFxyXG4gICAgICAgIGR1cmF0aW9uX3NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVyYXRpb25fc2xpZGVyXCIpLFxyXG4gICAgICAgIG11c2ljX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljX19saXN0XCIpLFxyXG4gICAgICAgIG11c2ljX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdXNpY19fY2xvc2VcIiksXHJcbiAgICAgICAgbXVzaWNfaXRhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpY19faXRhbWVzXCIpLFxyXG4gICAgICAgIG1vcmVfbXVzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmUtbXVzaWNcIik7XHJcblxyXG5cclxuICAgIGxldCBtdXNpY0luZGV4ID0gMjtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvYWRNdXNpYyhtdXNpY0luZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNdXNpYyhpbmRleCkge1xyXG4gICAgICAgIHRpdGxlX211c2ljLmlubmVyVGV4dCA9IG11c2ljTGlzdFtpbmRleCAtIDFdLnRpdGxlO1xyXG4gICAgICAgIGFydGlzdF9tdXNpYy5pbm5lclRleHQgPSBtdXNpY0xpc3RbaW5kZXggLSAxXS5hcnRpc3Q7XHJcbiAgICAgICAgYXVkaW9faW1nX2NvdmVyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtdXNpY0xpc3RbaW5kZXggLSAxXS5pbWFnZSk7XHJcbiAgICAgICAgYXVkaW8uc2V0QXR0cmlidXRlKFwic3JjXCIsIG11c2ljTGlzdFtpbmRleCAtIDFdLmF1ZGlvKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc011c2ljUGF1c2VkID0gbXVzaWNQbGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGF1c2VkXCIpO1xyXG4gICAgICAgIGlzTXVzaWNQYXVzZWQgPyBwYXVzZWRNdXNpYygpIDogcGxheU11c2ljKCk7XHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIHBsYXlNdXNpYygpIHtcclxuICAgICAgICBtdXNpY1BsYXllci5jbGFzc0xpc3QuYWRkKFwicGF1c2VkXCIpO1xyXG4gICAgICAgIHBsYXlQYXVzZUJ0bi5pbm5lclRleHQgPSBcInBhdXNlXCI7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhdXNlZE11c2ljKCkge1xyXG4gICAgICAgIG11c2ljUGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJwYXVzZWRcIik7XHJcbiAgICAgICAgcGxheVBhdXNlQnRuLmlubmVyVGV4dCA9IFwicGxheV9hcnJvd1wiO1xyXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbmV4dE11c2ljKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcHJldk11c2ljKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0TXVzaWMoKSB7XHJcbiAgICAgICAgbXVzaWNJbmRleCsrO1xyXG4gICAgICAgIG11c2ljSW5kZXggPiBtdXNpY0xpc3QubGVuZ3RoID8gbXVzaWNJbmRleCA9IDEgOiBtdXNpY0luZGV4ID0gbXVzaWNJbmRleDtcclxuICAgICAgICBsb2FkTXVzaWMobXVzaWNJbmRleCk7XHJcbiAgICAgICAgcGxheU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwcmV2TXVzaWMoKSB7XHJcbiAgICAgICAgbXVzaWNJbmRleC0tO1xyXG4gICAgICAgIG11c2ljSW5kZXggPCAxID8gbXVzaWNJbmRleCA9IG11c2ljTGlzdC5sZW5ndGggOiBtdXNpY0luZGV4ID0gbXVzaWNJbmRleDtcclxuICAgICAgICBsb2FkTXVzaWMobXVzaWNJbmRleCk7XHJcbiAgICAgICAgcGxheU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBlLnRhcmdldC5jdXJyZW50VGltZTtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGUudGFyZ2V0LmR1cmF0aW9uO1xyXG4gICAgICAgIGxldCBwb3JncmVzc1dpZHRoID0gKGN1cnJlbnRUaW1lIC8gZHVyYXRpb24pICogMTAwO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cG9yZ3Jlc3NXaWR0aH0lYDtcclxuXHJcbiAgICAgICAgbGV0IG11c2ljQ3VycmVudFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIiksXHJcbiAgICAgICAgICAgIG11c2ljRHVyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRydWF0aW9uXCIpO1xyXG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpb0R1cmF0aW9uID0gYXVkaW8uZHVyYXRpb247XHJcbiAgICAgICAgICAgIGxldCB0b3RhTWluID0gTWF0aC5mbG9vcihhdWRpb0R1cmF0aW9uIC8gNjApO1xyXG4gICAgICAgICAgICBsZXQgdG90YVNlYyA9IE1hdGguZmxvb3IoYXVkaW9EdXJhdGlvbiAlIDYwKTtcclxuICAgICAgICAgICAgaWYgKHRvdGFTZWMgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YVNlYyA9IGAwJHt0b3RhU2VjfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXVzaWNEdXJhdGlvbi5pbm5lclRleHQgPSBgJHt0b3RhTWlufToke3RvdGFTZWN9YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY3VycmVudE1pbiA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUgLyA2MCk7XHJcbiAgICAgICAgbGV0IGN1cnJlblNlYyA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUgJSA2MCk7XHJcbiAgICAgICAgaWYgKGN1cnJlblNlYyA8IDEwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlblNlYyA9IGAwJHtjdXJyZW5TZWN9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVzaWNDdXJyZW50VGltZS5pbm5lclRleHQgPSBgJHtjdXJyZW50TWlufToke2N1cnJlblNlY31gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvZ3Jlc3NBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBsZXQgcG9yb2dyZXNzV2lkdGh2YWwgPSBQcm9ncmVzc0FyZWEuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgbGV0IGNsaWNrZW5kb2ZmU2V0WCA9IGUub2Zmc2V0WDtcclxuICAgICAgICBsZXQgc29uZ0R1cmF0aW9uID0gYXVkaW8uZHVyYXRpb247XHJcblxyXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gKGNsaWNrZW5kb2ZmU2V0WCAvIHBvcm9ncmVzc1dpZHRodmFsKSAqIHNvbmdEdXJhdGlvbjtcclxuICAgICAgICBwbGF5TXVzaWMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBnZXRUZXh0ID0gcmVwZWF0QnRuLmlubmVyVGV4dDtcclxuICAgICAgICBzd2l0Y2ggKGdldFRleHQpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlcGVhdFwiOlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0QnRuLmlubmVyVGV4dCA9IFwicmVwZWF0X29uZVwiO1xyXG4gICAgICAgICAgICAgICAgcmVwZWF0QnRuLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwi2b7Yrti0INmF2KzYr9ivINin24zZhiDYotmH2Ybar1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVwZWF0X29uZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0QnRuLmlubmVyVGV4dCA9IFwic2h1ZmZsZVwiO1xyXG4gICAgICAgICAgICAgICAgcmVwZWF0QnRuLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwi2b7Yrti0INiq2LXYp9iv2YHbjFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2h1ZmZsZVwiOlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0QnRuLmlubmVyVGV4dCA9IFwicmVwZWF0XCI7XHJcbiAgICAgICAgICAgICAgICByZXBlYXRCdG4uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCLZvtiu2LQg2YTbjNiz2Kog2b7Yrti0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgZ2V0VGV4dCA9IHJlcGVhdEJ0bi5pbm5lclRleHQ7XHJcbiAgICAgICAgc3dpdGNoIChnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXBlYXRcIjpcclxuICAgICAgICAgICAgICAgIG5leHRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXBlYXRfb25lXCI6XHJcbiAgICAgICAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBsb2FkTXVzaWMobXVzaWNJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5TXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2h1ZmZsZVwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBtdXNpY0xpc3QubGVuZ3RoKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRJbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBtdXNpY0xpc3QubGVuZ3RoKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAobXVzaWNJbmRleCA9PSByYW5kSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbXVzaWNJbmRleCA9IHJhbmRJbmRleDtcclxuICAgICAgICAgICAgICAgIGxvYWRNdXNpYyhtdXNpY0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHBsYXlNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZHVyYXRpb25fc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgYXVkaW8udm9sdW1lID0gZHVyYXRpb25fc2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9yZV9tdXNpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG11c2ljX2xpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtdXNpY19jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1vcmVfbXVzaWMuY2xpY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG11c2ljX2l0YW1lc1xyXG5cclxuICAgIGZvciAobGV0IG11c2ljID0gMDsgbXVzaWMgPCBtdXNpY0xpc3QubGVuZ3RoOyBtdXNpYysrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gYFxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtdXNpY19faXRhbWVcIiBsaS1pbmRleCA9IFwiJHttdXNpYyArIDF9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm11c2ljX190aXRsZVwiPjxzcGFuIGNsYXNzPVwibXVzaWNfX251bWJlclwiPiR7bXVzaWMgKyAxfSA6IDwvc3Bhbj4ke211c2ljTGlzdFttdXNpY10udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdXNpY19fYXJ0aXN0XCI+JHttdXNpY0xpc3RbbXVzaWNdLmFydGlzdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YXVkaW8gaWQ9XCIke211c2ljTGlzdFttdXNpY10uYXVkaW99XCIgc3JjPVwiJHttdXNpY0xpc3RbbXVzaWNdLmF1ZGlvfVwiPjwvYXVkaW8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIG11c2ljX2l0YW1lcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpTXVzaWNUYWcgPSBtdXNpY19pdGFtZXMucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGl0YW1lID0gMDsgaXRhbWUgPCBtdXNpY0xpc3QubGVuZ3RoOyBpdGFtZSsrKSB7XHJcblxyXG4gICAgICAgIGlmIChsaU11c2ljVGFnW2l0YW1lXS5jbGFzc0xpc3QuY29udGFpbnMoXCJpc1BsYXlNdXNpY1wiKSkge1xyXG4gICAgICAgICAgICBsaU11c2ljVGFnW2l0YW1lXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXNQbGF5TXVzaWNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGlNdXNpY1RhZ1tpdGFtZV0uZ2V0QXR0cmlidXRlKFwibGktaW5kZXhcIikgPT0gbXVzaWNJbmRleCkge1xyXG4gICAgICAgICAgICBtdXNpY19saXN0LmNsYXNzTGlzdC5hZGQoXCJpc1BsYXlNdXNpY1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpTXVzaWNUYWdbaXRhbWVdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2RlVGhpc011c2ljLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9kZVRoaXNNdXNpYyhlKSB7XHJcblxyXG4gICAgICAgIGxldCBnZXRMaUluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGktaW5kZXhcIik7XHJcbiAgICAgICAgaWYoZ2V0TGlJbmRleCkge1xyXG4gICAgICAgICAgICBtdXNpY0luZGV4ID0gZ2V0TGlJbmRleDtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImlzUGxheU11c2ljXCIpO1xyXG4gICAgICAgICAgICBsb2FkTXVzaWMobXVzaWNJbmRleCk7XHJcbiAgICAgICAgICAgIHBsYXlNdXNpYygpO1xyXG4gICAgICAgICAgICBtdXNpY19saXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbXVzaWNJbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwibGktaW5kZXhcIik7XHJcbiAgICAgICAgICAgIGxvYWRNdXNpYyhtdXNpY0luZGV4KTtcclxuICAgICAgICAgICAgcGxheU11c2ljKCk7XHJcbiAgICAgICAgICAgIG11c2ljX2xpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG4iLCIvLyAoKCk9PiB7XHJcbi8vICAgICBsZXQgYWxsSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuLy8gICAgIGFsbEltYWdlcy5mb3JFYWNoKCh2YWx1ZSk9PntcclxuLy8gICAgICAgICB2YWx1ZS5vbmNvbnRleHRtZW51ID0gKGUpPT57XHJcbi8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGUgPT4ge1xyXG4vLyAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMTIzKSB7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT0gJ0knLmNoYXJDb2RlQXQoMCkpIHtcclxuLy8gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGUuY3RybEtleSAmJiBlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PSAnQycuY2hhckNvZGVBdCgwKSkge1xyXG4vLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoZS5jdHJsS2V5ICYmIGUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09ICdKJy5jaGFyQ29kZUF0KDApKSB7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09ICdVJy5jaGFyQ29kZUF0KDApKSB7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4vLyB9KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Fzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9ub0NvcHlSaWdodENvZGUnO1xyXG4vLyBTY3JvbGwgRG93biBTaG93IG9uIFNjcm9sbCBVcFxyXG4oKCkgPT4ge1xyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1jb24nKTtcclxuICAgIGNvbnN0IHNlbGN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtYm94XCIpO1xyXG4gICAgY29uc3QgYm94T3BzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm94T3BzdGlvblwiKTtcclxuICAgIGNvbnN0IG11c2ljUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdXNpY1BsYXllclwiKTsgIC8vIG11c2ljUGxheWVyXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gXCItNTRweFwiO1xyXG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgICAgIHNlbGN0Qm94LnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIGJveE9wc3Rpb24uc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgbXVzaWNQbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgbXVzaWNQbGF5ZXIuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApXCI7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDcwcHggMTBweCByZ2JhKDAsMCwwLDAuNylcIjtcclxuICAgICAgICAgICAgbXVzaWNQbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xyXG4gICAgICAgICAgICBtdXNpY1BsYXllci5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCA3MHB4IDEwcHggcmdiYSgwLDAsMCwwLjgpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9KTtcclxufSkoKTtcclxuLy8gZW5kXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBidG5PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5DaGFwdGVyXCIpXHJcbiAgICBjb25zdCBzZWxlY3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1ib3hcIilcclxuICAgIGNvbnN0IGJveE9wc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveE9wc3Rpb25cIik7XHJcbiAgICBjb25zdCBidG5PcHN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5PcHN0aW9uXCIpO1xyXG5cclxuICAgIGJ0bk9wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RCb3guc3R5bGUuaGVpZ2h0ID09PSBcIjBweFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChib3hPcHN0aW9uLnN0eWxlLmhlaWdodCA9PT0gXCIyMDBweFwiKSB7XHJcbiAgICAgICAgICAgICAgICBib3hPcHN0aW9uLnN0eWxlLmhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxlY3RCb3guc3R5bGUuaGVpZ2h0ID0gXCIzMDBweFwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0Qm94LnN0eWxlLmhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgYnRuT3BzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgaWYgKGJveE9wc3Rpb24uc3R5bGUuaGVpZ2h0ID09PSBcIjBweFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RCb3guc3R5bGUuaGVpZ2h0ID09PSBcIjMwMHB4XCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEJveC5zdHlsZS5oZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm94T3BzdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib3hPcHN0aW9uLnN0eWxlLmhlaWdodCA9IFwiMHB4XCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSgpO1xyXG5pbXBvcnQgJy4vYXBpJztcclxuaW1wb3J0ICcuL211c2ljJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=