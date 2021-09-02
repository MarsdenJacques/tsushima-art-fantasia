import styles from '../styles/gallery.module.css'
import vid0 from '../public/assets/vid0.jpeg'
import vid1 from '../public/assets/vid1.jpeg'
import vid2 from '../public/assets/vid2.jpeg'
import vid3 from '../public/assets/vid3.jpg'
import Image from 'next/image'
import { useState } from 'react'
import galleryText from './gallery-assets'

export default function Gallery(){
    const [currentVideo, setCurrentVideo] = useState(0)//-1 currentVideo !== 0 ? setCurrentVideo(0) : setCurrentVideo(-1)
    return(
        <div className = {styles.main}>
            <div className = {styles.imageGallery}>
                <div  className = {styles.galleryImage} onClick = {()=> setCurrentVideo(0)}><Image alt = 'The Whistle' src = {vid0} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(1)}><Image alt = 'Find dad in Samman-ri' src = {vid1} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(2)}><Image alt = 'Day and Night of District' src = {vid2} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=>setCurrentVideo(3)}><Image alt = 'This Beauty Deserves a More Dramatic Song' src = {vid3} width = {2667} height = {1775}/></div>
                <div className = {styles.comingSoon}>More coming soon...</div>
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