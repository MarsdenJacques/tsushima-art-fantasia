import styles from '../styles/gallery.module.css'
import zihan from '../public/assets/zihan.jpg'
import Image from 'next/image'
import { useState } from 'react'
import galleryText from './gallery-assets'

export default function Gallery(){
    const [currentVideo, setCurrentVideo] = useState(-1)
    return(
        <div className = {styles.main}>
            <div className = {styles.imageGallery}>
                <div  className = {styles.galleryImage} onClick = {()=>currentVideo !== 0 ? setCurrentVideo(0) : setCurrentVideo(-1)}><Image src = {zihan} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=> currentVideo !== 1 ? setCurrentVideo(1) : setCurrentVideo(-1)}><Image src = {zihan} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=>currentVideo !== 2 ? setCurrentVideo(2) : setCurrentVideo(-1)}><Image src = {zihan} width = {2667} height = {1775}/></div>
                <div  className = {styles.galleryImage} onClick = {()=>currentVideo !== 3 ? setCurrentVideo(3) : setCurrentVideo(-1)}><Image src = {zihan} width = {2667} height = {1775}/></div>
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
                        <div className = {styles.vidArtist2}>
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
                        <div className = {styles.vidArtist2}>
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