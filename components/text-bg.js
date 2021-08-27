import styles from '../styles/text-bg.module.css'

export default function TextBG(){
    const text = 'TSUSHIMA ART FANTASIA'
    const textPairs = GenPairs(text)
    return(
        <div className = {styles.container}>
            {
                textPairs.map((pair, index) => {
                    return <div key = {index}>{pair}</div>
                })
            }
        </div>
    )
}
function TextPair({text, index}){
    const offsets1 = [28,70,88]
    const offsets2 = [60,55,50]
    const position = index * 140 - 160 + 'px'
    const offset1 = 'translateX(-' + offsets1[index % 3] + '%)' //28% tsushima 70%  88% fantasia
    const offset2 = 'rotateX(180deg) translateX(calc(-' + offsets2[index % 3] + '% + 80px)) translateY(-35px)'
    return(
        <div className = {styles.textPair} style = {{top: position}}>
            <Text flipped = {false} text = {text} transform = {offset1}/>
            <Text flipped = {true} text = {text} transform = {offset2}/>
        </div>
    )
}
function Text({flipped, text, transform}){
    return<div className = {styles.text} style = {{transform: transform}}>{text}</div>
}
function GenPairs(text)
{
    //console.log('test')
    let pairs = []
    for(let count = 0; count < 50; count++){
        pairs.push(<TextPair text = {text} index = {count}/>)
    }
    return pairs
}