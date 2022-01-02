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


