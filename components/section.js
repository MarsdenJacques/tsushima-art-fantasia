import styles from '../styles/section.module.css'
export default function Section({name, children}){
    return(
        <section  id = {name} className = {styles.container}>{children}</section>
    )
}