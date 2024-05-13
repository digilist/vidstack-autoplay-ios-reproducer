import './App.css'

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

function App() {
  return (
    <>
        <MediaPlayer title="Sprite Fight"
                     src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
                     autoPlay={true}
                     playsInline={true}>
            <MediaProvider />
            <DefaultVideoLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={defaultLayoutIcons} />
        </MediaPlayer>
    </>
  )
}

export default App
