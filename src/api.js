const selected = document.querySelector(".selected");
const optionsList = document.querySelectorAll(".option");
const selectBox = document.querySelector(".select-box");
optionsList.forEach((o) => {
    o.querySelector("label").addEventListener("click", (elm) => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        selectBox.style.height = "0px";
    });
});

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

// shit trick ! 😂

var public_api_id = 3228; // ای دی اولیه که از سمت بک امده این جا میزنی

var api_left = "https://aosasori.com/api/Loader/"; // این باید از بک بیاد

var api_right = "/Arman"; // این باید از بک بیاد

// end

// function defaultChapterNumberApi(api) {

async function callDefaultChapterNumber() {
    // شروع همه چی 😀
    try {
        const res = await fetch(api_left + public_api_id + api_right);
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
    // وقتی کاربر از طریق منو چپتر دستی عوض کرد 😃
    // For User Change Chapter
    const user_chapter = document.querySelectorAll(".options-container .option label");
    const callUserChapter = async (e) => {
        let chapter_id = parseInt(e.target.parentElement.querySelector("input").getAttribute("id"));
        const res = await fetch(api_left + public_api_id + api_right);
        const data = await res.json();
        const all_chapters = data.allChapters;
        const chapter_find = all_chapters.find((chapter) => chapter.chapterNumber === chapter_id);
        const chapter_id_second = chapter_find.chapterId;

        // const res_second = await fetch(publicApiUrl(chapter_id_second));
        const res_second = await fetch(api_left + chapter_id_second + api_right);

        const data_second = await res_second.json();
        // const chapter_find_in_user_chapter = user_chapters.find((chapter) => chapter.chapterNumber);
        public_api_id = chapter_id_second;
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

async function nextDefaultChpterHandler() {
    const res = await fetch(api_left + public_api_id + api_right);
    const data = await res.json();
    const defaultChapterNumber = (data.defaultChapterNumber += 1);
    const all_chapters = data.allChapters;
    const chapter_find = all_chapters.find((chapter) => chapter.chapterNumber === defaultChapterNumber);
    const chapter_id_second = chapter_find.chapterId;
    public_api_id = chapter_id_second;
    nextChpterRenderHandler();
}

async function nextChpterRenderHandler() {
    try {
        const res = await fetch(api_left + public_api_id + api_right);
        if (res.ok) {
            const data = await res.json();
            const default_chapter_number = data.defaultChapterNumber + " " + "چپتر";
            selected.innerHTML = default_chapter_number;
            removeImg();
            data.images.forEach((url) => createImageTag(url));
        } else {
            throw Error(res.status);
        }
    } catch (err) {
        console.log(err);
    }
}

const btn_next_chapter = document.querySelector(".nextChpter").querySelector(".btn");

btn_next_chapter.addEventListener("click", nextDefaultChpterHandler);


async function bay() {
    const res = await fetch("https://aosasori.com/api/loader/GetChapter/37");
    const data = await res.json();
    
    console.log(data);
}

bay()

// btn_next_chapter.addEventListener("click", rr);

// let default_chapter_number_next = (data.defaultChapterNumber += 1);

//             const all_chapters = data.allChapters;

//             const user_chapter = data.userChapters;

//             const find_chapter = all_chapters.find((item) => item.chapterNumber === default_chapter_number_next);

//             const find_chapter_id_in_all_chapters = find_chapter.chapterId;

//             const find_chapter_in_user_chapters = user_chapter.find((itme) => itme.chapterId === find_chapter_id_in_all_chapters);

//             const find_chapter_id_in_user_chapters = find_chapter_in_user_chapters.chapterId;
