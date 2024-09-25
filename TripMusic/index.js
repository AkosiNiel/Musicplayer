const previous = document.querySelector('#previous');
const play = document.querySelector('#play');
const next = document.querySelector('#next');

const title = document.querySelector('#title');
const image = document.querySelector('#image');

const track = document.createElement('audio');

let index = 0;
let playingSong = false;

let songs = [{
        name: 'Hanggang Tingin',
        path: './songs/HanggangTingin.mp3',
        image: './images/kamikazee.jpg',
    },
    {
        name: 'Ikot',
        path: './songs/Ikot.mp3',
        image: './images/over_october.jpg',
    },
    {
        name: 'Pantropiko',
        path: './songs/Pantropiko.mp3',
        image: './images/bini.jpg',
    },
    {
        name: 'Ikaw At Ako',
        path: './songs/ikawatako.mp3',
        image: './images/johndanao.jpg',
    },
    {
        name: 'Saksi Ang Langit',
        path: './songs/SaksiAngLangit.mp3',
        image: './images/december.jpg',
    },
];

function loadTrack(index) {
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    track.load();
}

loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
}

function nextSong() {
    if (index < songs.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();

    }
}

function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();

    } else {
        index = songs.length;
        loadTrack(index);
        playSong();
    }
}

function justPlay() {
    if (playingSong == false) {
        playSong();

    } else {
        pauseSong();
    }
}