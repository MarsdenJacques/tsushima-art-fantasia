import styles from '../styles/gallery.module.css'
import vid0 from '../public/assets/vid0.jpeg'
import vid1 from '../public/assets/vid1.jpeg'
import vid2 from '../public/assets/vid2.jpeg'
import vid3 from '../public/assets/vid3.jpg'
import vid4 from '../public/assets/vid4.jpg'
import vid5 from '../public/assets/vid5.jpg'
import vid6 from '../public/assets/vid6.jpg'
import vid7 from '../public/assets/vid7.jpg'
import vid8 from '../public/assets/vid8.jpg'
import vid9 from '../public/assets/vid9.jpg'
import vid10 from '../public/assets/vid10.jpg'
import vid11 from '../public/assets/vid11.jpg'
import vid12 from '../public/assets/vid12.jpg'
import vid13 from '../public/assets/vid13.jpg'
import vid14 from '../public/assets/vid14.jpg'
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
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(0)}><Image alt = 'The Whistle' src = {vid0} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(1)}><Image alt = 'Find dad in Samman-ri' src = {vid1} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(2)}><Image alt = 'Day and Night of District' src = {vid2} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(3)}><Image alt = 'This Beauty Deserves a More Dramatic Song' src = {vid3} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(4)}><Image alt = 'Go Back to the Roots' src = {vid4} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(5)}><Image alt = 'Can We Do Performance without a Body' src = {vid5} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(6)}><Image alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' src = {vid6} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(7)}><Image alt = 'This is Tsushima / It’s night here /  I see waves / I see lights' src = {vid7} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(8)}><Image alt = 'WE ARE THE WORLD [short edit]' src = {vid8} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(9)}><Image alt = 'Approach 11.0' src = {vid9} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(10)}><Image alt = 'Crossing Tides' src = {vid10} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(11)}><Image alt = 'Level Flight - Butterfly’s Eye' src = {vid11} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(12)}><Image alt = 'Umi no Suki' src = {vid12} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(13)}><Image alt = 'Landscape Sketch' src = {vid13} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(14)}><Image alt = 'Removed Landscape' src = {vid14} width = {2667} height = {1775}/></div>
                </div>
                <div className = {styles.imageVessel} style = {{animationDelay: '-25s',animationPlayState: animationPlaying}}>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(0)}><Image alt = 'The Whistle' src = {vid0} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(1)}><Image alt = 'Find dad in Samman-ri' src = {vid1} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(2)}><Image alt = 'Day and Night of District' src = {vid2} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(3)}><Image alt = 'This Beauty Deserves a More Dramatic Song' src = {vid3} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(4)}><Image alt = 'Go Back to the Roots' src = {vid4} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(5)}><Image alt = 'Can We Do Performance without a Body' src = {vid5} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(6)}><Image alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' src = {vid6} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(7)}><Image alt = 'This is Tsushima / It’s night here /  I see waves / I see lights' src = {vid7} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(8)}><Image alt = 'WE ARE THE WORLD [short edit]' src = {vid8} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(9)}><Image alt = 'Approach 11.0' src = {vid9} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(10)}><Image alt = 'Crossing Tides' src = {vid10} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(11)}><Image alt = 'Level Flight - Butterfly’s Eye' src = {vid11} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(12)}><Image alt = 'Umi no Suki' src = {vid12} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(13)}><Image alt = 'Landscape Sketch' src = {vid13} width = {2667} height = {1775}/></div>
                    <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(14)}><Image alt = 'Removed Landscape' src = {vid14} width = {2667} height = {1775}/></div>
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
                    {
                        currentVideo === 7 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/KhM3VokrqtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 8 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/z4ofigD6_Qc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 9 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/DjxzFZNpak8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 10 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/LNgfjtxZJW0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 11 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/wdHLA4PqHno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 12 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/7i8nrbog7bg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 13 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/dFcu2d1JS0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {
                        currentVideo === 14 && <iframe className = {styles.vidIFrame} src="https://www.youtube.com/embed/kbVXKrStE3I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <div className = {styles.artists}>
                {
                    galleryText[0].map((text,index) => {
                        return(
                            <div key = {index} className = {styles.artist}>
                                <div className = {styles.artistText}>{text[1]}</div>
                                <div className = {styles.artistText}>{galleryText[1][index][1]}</div>
                            </div>
                        )
                    })
                }
            </div>   
        </div>
    )
}
//width="560" height="315"