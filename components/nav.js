import styles from '../styles/nav.module.css'
import Link from 'next/link'
export default function Nav({currentSection, scrollTo}){
    return(
        <div className = {styles.container}>
            <NavSection title = 'Home' active = {currentSection === 0 || currentSection === -1} scrollTo = {scrollTo}/>
            <NavSection title = 'Works' active = {currentSection === 1} scrollTo = {scrollTo}/>
        </div>
    )
}

function NavSection({title, active, scrollTo}){
    const style = active ? ' ' + styles.activeNav : ''
    const link = '/#' + title
    return(
        <div onClick = {()=>scrollTo(link)}  className = {styles.navSection + style}>
                {title}
        </div>
    )
}
