import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const videoplayerCurrent = "videoplayer-current-time";

function onPlay(event) {
    const currentTime = event.seconds;
    localStorage.setItem(videoplayerCurrent, currentTime);
};

const savedCurrentTime = localStorage.getItem(videoplayerCurrent);
if (savedCurrentTime !== null) {
    player.setCurrentTime(savedCurrentTime);
};