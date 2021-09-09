import styles from '../styles/gallery.module.css'
import vid0 from '../public/assets/vid0.jpeg'
import vid1 from '../public/assets/vid1.jpeg'
import vid2 from '../public/assets/vid2.jpeg'
import vid3 from '../public/assets/vid3.jpg'
import vid4 from '../public/assets/vid4.jpg'
import vid5 from '../public/assets/vid5.jpg'
import vid6 from '../public/assets/vid6.jpg'
import Image from 'next/image'
import { useState } from 'react'
import galleryText from './gallery-assets'

export default function Gallery(){
    const [currentVideo, setCurrentVideo] = useState(0)//-1 currentVideo !== 0 ? setCurrentVideo(0) : setCurrentVideo(-1)
    const [animationPlaying, setAnimationPlaying] = useState('running')
    return(
        <div className = {styles.main}>
            <div className = {styles.imageGallery} onMouseEnter = {()=>setAnimationPlaying('paused')} onMouseLeave = {()=>setAnimationPlaying('running')}
            onTouchStart = {()=> setAnimationPlaying('paused')} onTouchEnd = {()=> setAnimationPlaying('running')}>
                <div className = {styles.imageVessel} style = {{animationPlayState: animationPlaying}}>
                    <div  className = {styles.galleryImage} onClick = {()=> setCurrentVideo(0)}><Image alt = 'The Whistle' src = {vid0} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(1)}><Image alt = 'Find dad in Samman-ri' src = {vid1} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(2)}><Image alt = 'Day and Night of District' src = {vid2} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(3)}><Image alt = 'This Beauty Deserves a More Dramatic Song' src = {vid3} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(4)}><Image alt = 'Go Back to the Roots' src = {vid4} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(5)}><Image alt = 'Can We Do Performance without a Body' src = {vid5} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(6)}><Image alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' src = {vid6} width = {2667} height = {1775}/></div>
                </div>
                <div className = {styles.imageVessel} style = {{animationDelay: '-25s',animationPlayState: animationPlaying}}>
                    <div  className = {styles.galleryImage} onClick = {()=> setCurrentVideo(0)}><Image alt = 'The Whistle' src = {vid0} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(1)}><Image alt = 'Find dad in Samman-ri' src = {vid1} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(2)}><Image alt = 'Day and Night of District' src = {vid2} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(3)}><Image alt = 'This Beauty Deserves a More Dramatic Song' src = {vid3} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(4)}><Image alt = 'Go Back to the Roots' src = {vid4} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(5)}><Image alt = 'Can We Do Performance without a Body' src = {vid5} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(6)}><Image alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' src = {vid6} width = {2667} height = {1775}/></div>
                </div>
            </div>
            <div className = {styles.vidGallery}>
                <div className = {styles.vidTextContainer}>
                    <div className = {styles.vidTitle}>
                        {currentVideo >= 0 && galleryText[0][currentVideo][0]}
                    </div>
                    <div className = {styles.vidArtistContainer}>
                        <div className = {styles.vidArtist1}>
                            {currentVideo >= 0 && galleryText[0][currentVideo][1]}
                        </div>
                        <div className = {styles.vidArtist2} style = {{borderRight: 'none'}}>
                        </div>
                    </div>
                    <div className = {styles.vidDescription}>
                        {currentVideo >= 0 && galleryText[0][currentVideo][2]}
                    </div>
                </div>
                <div className = {styles.videoFrame}>
                    {
                        currentVideo === 0 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/q5N5Z6FPB20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 1 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/39nuFjyQDVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 2 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/gIAuv3uF14c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 3 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/dL5N2P7OoEQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 4 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/dX_vu8C5c7E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 5 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/6j8e0_ryNjg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 6 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/nInFmkGN_vQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                </div>
                <div className = {styles.vidTextContainer}>
                    <div className = {styles.vidTitle}>
                        {currentVideo >= 0 && galleryText[1][currentVideo][0]}
                    </div>
                    <div className = {styles.vidArtistContainer}>
                        <div className = {styles.vidArtist2} style = {{borderLeft: 'none'}}>
                        </div>
                        <div className = {styles.vidArtist1}>
                            {currentVideo >= 0 && galleryText[1][currentVideo][1]}
                        </div>
                    </div>
                    <div className = {styles.vidDescription}>
                        {currentVideo >= 0 && galleryText[1][currentVideo][2]}
                    </div>
                </div>
            </div>   
        </div>
    )
}
//width="560" height="315"