// Создадим компонент Player для проигрывания видео используя нативный тег <video>. Чтобы запустить и остановить проигрывание необходимо вызвать методы HTMLMediaElement.play() и HTMLMediaElement.pause(), где HTMLMediaElement это элемент <video>. Используем реф для получения доступа к DOM-элементу и его методам.

import { useRef } from "react";

const VideoPlayerWithHookUseRef = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};


export default VideoPlayerWithHookUseRef;