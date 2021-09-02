import styles from '../styles/nav.module.css'
export default function Nav({currentSection, scrollTo}){
    return(
        <div className = {styles.container}>
            <NavSection title = '対馬アートファンタジア' active = {currentSection === 0 || currentSection === -1} scrollTo = {scrollTo}/>
            <NavSection title = 'Artists' active = {currentSection === 1} scrollTo = {scrollTo}/>
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
