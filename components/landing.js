import styles from '../styles/landing.module.css'
import Image from 'next/image'
import vid0 from '../public/assets/home0.png'
import vid1 from '../public/assets/home1.png'
import vid2 from '../public/assets/home2.png'
import vid3 from '../public/assets/home3.png'
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
            <div className = {styles.imageContainer}>
                <Image src={vid0} alt = 'The Whistle' width = {1920} height = {1080}/>
            </div>
            <div className = {styles.imageContainer} style = {{animationDelay: '-30s'}}>
                <Image src={vid1} alt = 'Find dad in Samman-ri' width = {1920} height = {1080}/>
            </div>
            <div className = {styles.imageContainer} style = {{animationDelay: '-20s'}}>
                <Image src={vid2} alt = 'Day and Night of District' width = {1920} height = {1080}/>
            </div>
            <div className = {styles.imageContainer} style = {{animationDelay: '-10s'}}>
                <Image src={vid3} alt = 'This Beauty Deserves a More Dramatic Song' width = {1920} height = {1080}/>
            </div>
        </div>
    )
}