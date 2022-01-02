
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
// (() => {
//     const imageContiner = document.querySelector(".main");
//     const slideValue = document.querySelector(".topspanU");

//     // inputSlider.oninput = (()=>{
//     //   let value = inputSlider.value;
//     //   slideValue.textContent = value;
//     //   slideValue.style.left = (value/2) + "%";
//     //   slideValue.classList.add("show");
//     // });
//     // inputSlider.onblur = (()=>{
//     //     slideValue.classList.remove("show");
//     // });

//     // const inputSlider = document.querySelector("input");
//     // inputSlider.addEventListener("change" , e => {

//     //    let vel = Number(e.target.value)

//     //    return vel
//     // });

//     // console.log(vel);
//     // let vel;
//     // inputSlider.addEventListener("change", e => {
//     //     vel = Number(e.target.value);
//     // });


//     function createImage(url) {
//         let imageTag = document.createElement('img');
//         imageTag.classList.add("img");
//         imageTag.setAttribute("src", url);
//         imageTag.setAttribute("loading", "lazy"); // lazy
//         imageTag.setAttribute("alt", "..");
//         imageContiner.appendChild(imageTag);
//     }

//     // document.addEventListener("DOMContentLoaded", () => {
//     //     let img = document.querySelector(".main");
//     //     imageContiner.style.width = `${vel}%`;
//     //     console.log(img);
//     // });

//     fetch("img.json")
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             else {
//                 throw Error(response.status);
//             }
//         })
//         .then(response => {
//             let defaultChapterNamber = response[0].defaultChapterNamber;
//             let userChapters = response[0].userChapters[defaultChapterNamber];
//             let allChaptersLength = response[1].allChapters.length;
//             let userChaptersLength = response[0].userChapters.length;
//             const selected = document.querySelector(".selected")
//             selected.innerHTML = `چپتر ${defaultChapterNamber}`;
//             if (defaultChapterNamber >= allChaptersLength) {
//                 alert("خطا")
//             } else if (defaultChapterNamber < allChaptersLength) {
//                 if (userChaptersLength <= allChaptersLength) {
//                     if (userChapters.chapterId === response[1].allChapters[defaultChapterNamber].chapterId) {
//                         response[1].allChapters[defaultChapterNamber].images.forEach(url => {
//                             createImage(url);
//                         });
//                     }
//                 } else if (defaultChapterNamber <= allChaptersLength) {
//                     console.log("222222222222222222222222222222222222222222222222222222222");
//                 }
//             }
//         })
//         .catch(error => {
//             console.log(error.message);
//         })
// })();


// `<div class="option">
// <input type="radio" class="radio" id="0" name="category" />
// <span class="icon">
//     <svg width="24px" height="24px" viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z" />
//     </svg>

// </span>
// <label for="0">چپتر 0</label>
// <span>خریداری شده</span>
// </div>`

// (() => {
//     fetch('https://aosasori.com/api/Loader/3190/Arman') //  your api
//         .then(res => {
//             if(res.ok) {
//                 return res.json()
//             }
//             else {
//                 throw Error(res.status)
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })

// })();

// let chpterTagHtml = "";

// data.allChapters.forEach((chpters)=> {
//     console.log(chpters);
//     chpterTagHtml +=
//         `<div class="option">
//             <input type="radio" class="radio" id="${chpters.chapterNumber}" name="category" />
//             <span class="icon">
//                 <svg width="24px" height="24px" viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z" />
//                 </svg>
//             </span>
//             <label for="0">چپتر ${chpters.chapterNumber}</label>
//             <span>خریداری شده</span>
//         </div>`;
//     options_container.innerHTML = chpterTagHtml;
// });
const options_container = document.querySelector(".options-container");

const chpterSelection = async () => {
    try {
        const res = await fetch('https://aosasori.com/api/Loader/3190/Arman');
        if (res.ok) {
            const data = await res.json();



        }
        else {
            throw Error(res.status)
        }
    }
    catch (err) {
        console.log(err);
    }
}

chpterSelection();