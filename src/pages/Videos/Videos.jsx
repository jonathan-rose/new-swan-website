import ReactPlayer from 'react-player'
import { useState, useRef } from 'react';
import './videos.css'

export default function Videos() {

    const videos = [
        { url: "videos/promo2026.mp4", title: "Promo 2026" },
        { url: "videos/eval2023-c.mp4", title: "Eval 2023" },
        { url: "videos/culture.mp4", title: "Culture" },
        { url: "videos/pride2023.mp4", title: "Pride" },
    ];

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);
    const playerRef = useRef(null);

    const handleFullscreen = () => {
        if (playerRef.current) {
            const internalPlayer = playerRef.current.getInternalPlayer();
            if (internalPlayer) {
                if (internalPlayer.requestFullscreen) {
                    internalPlayer.requestFullscreen();
                } else if (internalPlayer.webkitRequestFullscreen) {
                    internalPlayer.webkitRequestFullscreen();
                } else if (internalPlayer.msRequestFullscreen) {
                    internalPlayer.msRequestFullscreen();
                }
            }
        }
    };

    function VideoSelectionMenu() {
        return (
            <div className="video-menu">
                {videos.map((video) => (
                    <VideoMenuItem key={video.url} video={video} onClick={() => setSelectedVideo(video)} />
                ))}
            </div>
        );
    }

    function VideoMenuItem({ video, onClick }) {
        const isSelected = selectedVideo.url === video.url;

        return (
            <div className={`video-menu-item ${isSelected ? "selected" : ""}`} onClick={onClick}>
                {video.title}
            </div>
        );
    }

    return (
        <div className="videos-container">
            <VideoSelectionMenu />
            <div class="video-player-container">
                <ReactPlayer
                    ref={playerRef}
                    // width='100%'
                    // height='100%'
                    controls={true}
                    url={selectedVideo.url} />
                <button onClick={handleFullscreen} className="fullscreen-button">Fullscreen</button>
            </div>
        </div>
    )
}