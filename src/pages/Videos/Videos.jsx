import ReactPlayer from 'react-player'
import './videos.css'

export default function Videos() {
    return (
        <div className="videos-container">
            <div className="video-menu">
                <div className="video-menu-item">
                    <p>Video 1</p>
                </div>
                <div className="video-menu-item">
                    <p>Video 2</p>
                </div>
                <div className="video-menu-item">
                    <p>Video 3</p>
                </div>
            </div>
            <div class="video-player-container">
                <ReactPlayer
                    // width='100%'
                    // height='100%'
                    controls={true}
                    url='videos/eval2023-c.mp4'/>
            </div>
        </div>
    )
}