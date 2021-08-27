import styles from '../styles/index.module.css'
import Section from '../components/section'
import BGText from '../components/text-bg.js'
import Landing from '../components/landing.js'
import Gallery from '../components/gallery.js'
import Nav from '../components/nav.js'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(-1)
  const ref1 = useRef()
  const ref2 = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {if(entry.isIntersecting)setCurrentSection(0)}, {threshold: .5})
    observer.observe(ref1.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {if(entry.isIntersecting)setCurrentSection(1)}, {threshold: .5})
    observer.observe(ref2.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  function scrollToAnchor(selectedAnchor) {
    const element = selectedAnchor === '/#Home' ? ref1 : ref2
    if(element.current !== undefined){
      element.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  return (
    <div className = {styles.main}>
      <Nav currentSection = {currentSection} scrollTo = {scrollToAnchor}/>
      <BGText/>
      <div ref = {ref1}><Section name = {'Home'}><Landing/></Section></div>
      <div ref = {ref2}><Section name = {'Works'}><Gallery/></Section></div>
    </div>
  )
}
