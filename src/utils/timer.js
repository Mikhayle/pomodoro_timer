import signalSrc from "assets/audio/signal.mp3";

export const soundSignal = () => {
    const audio = new Audio();
    audio.src = signalSrc;
    audio.autoplay = true;
}

export const stopTimer = (id) => {
    clearInterval(id);
}