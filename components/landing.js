import styles from '../styles/landing.module.css'
import Image from 'next/image'
import vid0 from '../public/assets/home0.jpg'
import vid1 from '../public/assets/home1.jpg'
import vid2 from '../public/assets/home2.jpg'
import vid3 from '../public/assets/home3.jpg'
import vid4 from '../public/assets/home4.jpg'
import vid5 from '../public/assets/home5.jpg'
import vid6 from '../public/assets/home6.jpg'
import vid7 from '../public/assets/home7.jpg'
import vid8 from '../public/assets/home8.jpg'
import vid9 from '../public/assets/home9.jpg'
import vid10 from '../public/assets/home10.jpg'
export default function Landing(){
    const jpText = 'イ・イェジン/イ・ナリム/うらあやか/ウンディネ ゾマー/小笠原周/キム・ギュニョン/キム・ドキ/キム・ボギョン/黒田大スケ/ジハン・カリム/ジョイデブ　ロアジャ/ジョン・ユスン/西松秀祐/パク・ハヨン/潘逸舟/フィオナ・チェン/張小船/ボラシ・ポッタチャルジー/丸橋光生/迎英里子/山内光枝/row&row'
    const engText = 'Yejin Stephany Lee/Narim Lee/Ayaka Ura/Undine Sommer/Shu Ogasawara/Kyu Nyun Kim/Doki Kim/Bokyong Kim/Daisuke Kuroda/Zihan Karim/Joy Deb Roaja/Yooseung Jung/Shusuke Nishimatsu/Park Hwa Yeon/Ishu Han/Fiona Cheng/Boat ZHANG/Palash Bhattacharjee/Mitsuo Maruhashi/Eriko Mukai/Terue Yamauchi/row&row'
    return(
        <div className = {styles.main}>
            <div className = {styles.textContainer} style = {{top: '0',left: '0'}}>
                <div className = {styles.textVessel}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text}>{jpText}</div>
                </div>
                <div className = {styles.textVessel + ' ' + styles.textVessel2}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text}>{jpText}</div>
                </div>
            </div>
            <div className = {styles.textContainer} style = {{bottom: '0',left: '0', transform: 'rotate(180deg)'}}>
                <div className = {styles.textVessel}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text}>{jpText}</div>
                </div>
                <div className = {styles.textVessel + ' ' + styles.textVessel2}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text}>{jpText}</div>
                </div>
            </div>
            <div className = {styles.textContainerVert} style = {{top:'0',left:'0', writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                <div className = {styles.textVesselVert}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text} style = {{textOrientation: 'sideways'}}>{jpText}</div>
                </div>
                <div className = {styles.textVesselVert + ' ' + styles.textVessel2}>
                    <div className = {styles.text}>{engText}</div>
                    <div className = {styles.text} style = {{textOrientation: 'sideways'}}>{jpText}</div>
                </div>
            </div>
            <div className = {styles.textContainerVert} style = {{top:'0',right:'0',writingMode: 'vertical-lr'}}>
                <div className = {styles.textVesselVert}>
                    <div className = {styles.text} style = {{textOrientation: 'sideways'}}>{jpText}</div>
                    <div className = {styles.text}>{engText}</div>
                </div>
                <div className = {styles.textVesselVert + ' ' + styles.textVessel2}>
                    <div className = {styles.text} style = {{textOrientation: 'sideways'}}>{jpText}</div>
                    <div className = {styles.text}>{engText}</div>
                </div>
            </div>
            <div className = {styles.imageTray}>
                <div className = {styles.imageVessel}>
                    <div className = {styles.imageContainer}>
                        <Image src={vid0} alt = 'The Whistle' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid1} alt = 'Find dad in Samman-ri' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid2} alt = 'Day and Night of District' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid3} alt = 'This Beauty Deserves a More Dramatic Song' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid4} alt = 'Go Back to the Roots' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid5} alt = 'Can We Do Performance without a Body' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid6} alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid7} alt = 'This is Tsushima / It’s night here /  I see waves / I see lights' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid8} alt = 'WE ARE THE WORLD [short edit]' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid9} alt = 'Approach 11.0' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid10} alt = 'Crossing Tides' width = {1920} height = {1080}priority={true}/>
                    </div>
                </div>
                <div className = {styles.imageVessel}  style = {{animationDelay: '-50s'}}>
                    <div className = {styles.imageContainer}>
                        <Image src={vid0} alt = 'The Whistle' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid1} alt = 'Find dad in Samman-ri' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid2} alt = 'Day and Night of District' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid3} alt = 'This Beauty Deserves a More Dramatic Song' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid4} alt = 'Go Back to the Roots' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid5} alt = 'Can We Do Performance without a Body' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid6} alt = 'A Silent Song From Wrapped Expansion (Three Chapters)' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid7} alt = 'This is Tsushima / It’s night here /  I see waves / I see lights' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid8} alt = 'WE ARE THE WORLD [short edit]' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid9} alt = 'Approach 11.0' width = {1920} height = {1080}priority={true}/>
                    </div>
                    <div className = {styles.imageContainer}>
                        <Image src={vid10} alt = 'Crossing Tides' width = {1920} height = {1080}priority={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}