const selected = document.querySelector(".selected");
const optionsList = document.querySelectorAll(".option");
const selectBox = document.querySelector(".select-box");
optionsList.forEach((o) => {
    o.querySelector("label").addEventListener("click", (elm) => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        selectBox.style.height = "0px";
    });
});

async function callDefaultChapterNumber() {
    // For Chapter Click User In page
    try {
        const res = await fetch("https://aosasori.com/api/Loader/37/Arman"); // این ادرس ای پی ای باید دیفالت چپتر مورد نظر باشه
        if (res.ok) {
            const data = await res.json();
            data.images.forEach((url) => createImageTag(url));
            const default_chapter_number = data.defaultChapterNumber + " " + "چپتر";
            selected.innerHTML = default_chapter_number;
        } else {
            throw Error(res.status);
        }
    } catch (error) {
        console.log(error);
    }
}
callDefaultChapterNumber();

function getUserChapterNumber() {
    // For User Change Chapter
    const user_chapter = document.querySelectorAll(".options-container .option label");
    const callUserChapter = async (e) => {
        let chapter_id = parseInt(e.target.parentElement.querySelector("input").getAttribute("id"));
        const res = await fetch("https://aosasori.com/api/Loader/1068/Arman");
        const data = await res.json();
        const all_chapters = data.allChapters;
        // const user_chapters = data.userChapters;
        const chapter_find = all_chapters.find((chapter) => chapter.chapterNumber === chapter_id);
        const chapter_id_second = chapter_find.chapterId;
        const res_second = await fetch(`https://aosasori.com/api/Loader/${chapter_id_second}/Arman`);
        const data_second = await res_second.json();
        // const chapter_find_in_user_chapter = user_chapters.find((chapter) => chapter.chapterNumber);
        removeImg();
        data_second.images.forEach((url) => createImageTag(url));

        // if(chapter_id === chapter_find_in_user_chapter.chapterNumber) {
        // }
        // else {
        //     alert("این چپتر باید بخری")
        // }
    };
    user_chapter.forEach((chapterid) => {
        chapterid.addEventListener("click", callUserChapter);
    });
}
getUserChapterNumber();
// style="width: 1000px; height: auto;"
function createImageTag(url) {
    const imageContiner = document.querySelector(".main");
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", "https://dl.aosasori.com/ChapterParts/" + url);
    imageTag.classList.add("img");
    imageTag.setAttribute("loading", "lazy");
    imageTag.setAttribute("style", "width: 700px;");
    imageContiner.appendChild(imageTag);
}

function removeImg() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const imageContiner = document.querySelector(".main");
    img_class = imageContiner.querySelectorAll("img");
    img_class.forEach((img_class) => {
        imageContiner.removeChild(img_class);
    });
}

const btn_next_chapter = document.querySelector(".nextChpter").querySelector(".btn");
btn_next_chapter.addEventListener("click", nextChpter);

async function nextChpter() {
    try {
        const res = await fetch("https://aosasori.com/api/Loader/3087/AMIRHHH");
        if (res.ok) {
            const data = await res.json();

            let default_chapter_number_next = (data.defaultChapterNumber += 1);

            const all_chapters = data.allChapters;

            const user_chapter = data.userChapters;

            const find_chapter = all_chapters.find((item) => item.chapterNumber === default_chapter_number_next);

            const find_chapter_id_in_all_chapters = find_chapter.chapterId;

            const find_chapter_in_user_chapters = user_chapter.find((itme) => itme.chapterId === find_chapter_id_in_all_chapters);

            const find_chapter_id_in_user_chapters = find_chapter_in_user_chapters.chapterId;

            // const res_second = await fetch(`https://aosasori.com/api/Loader/${find_chapter_id_in_user_chapters}/AMIRHHH`);
            // const data_second = await res_second.json();
            
            console.log(default_chapter_number_next);


        } else {
            throw Error(res.status);
        }
    } catch (err) {
        console.log(err);
    }

    // let default_chapter_number = data.defaultChapterNumber;
    // default_chapter_number += 1;
    // const user_chapters = data.userChapters;
    // console.log(user_chapters);

    // user_chapters.forEach((chapter_number) => {
    //     if (chapter_number === default_chapter_number) {
    //         const chapter_find_in_user_chapter = chapter_number.find((chapter) => chapter.chapterNumber);
    //         console.log(chapter_find_in_user_chapter);
    //     }
    // });

    // console.log(user_chapters);    // const res_second = await fetch(`https://aosasori.com/api/Loader/${default_chapter_number}/Arman`);
    // const data_second = await res_second.json();
    // removeImg();
    // data_second.images.forEach(url => createImageTag(url));
}

// function buy() {
//     const buy_pop_up_box = document.createElement("div");

// }
// buy();
