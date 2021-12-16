import styles from "../styles/NavigationMobile.module.scss"
import React, { useState } from "react"

const NavigationMobile = ({ locale, locales }) => {

  const resolveSongs = {
    en: 'Songs',
    nl: 'Liedjes',
  }
  const resolveAlbums = {
    en: 'Albums',
    nl: 'Albums',
  }
  const resolveArtists = {
    en: 'Artists',
    nl: 'Artiesten',
  }
  const resolveEvents = {
    en: 'Events',
    nl: 'Evenementen',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  const resolveAboutUs = {
    en: 'About Us',
    nl: 'Over ons',
  }
  function togglenav() {
    setNavstate(result.data.stories);
  }

  const [navstate,setNavstate] = useState(false);
  //setNavstate(true);

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationmobilewrapper}>
      <nav className={styles.navigationmobile} role="navigation">

        <div className={styles.navlogo}>
          <a href="/">
            <img
              src="https://a.storyblok.com/f/134952/500x500/ebe8675a16/themusicpro-2_adobespark.png"
              alt="TheMusicPro Logo" width="200" height="200"
              className="" 
            />
          </a>
        </div>
        <div className={styles.hamburger} onClick={() => setNavstate(!navstate)}><div className={styles.line}></div><div className={styles.line}></div><div className={styles.line}></div></div>
        {navstate&&<div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/songs`} className={styles.song}>{resolveSongs[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/albums`} className={styles.song}>{resolveAlbums[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/artists`} className={styles.personality}>{resolveArtists[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/events`} className={styles.newsitem}>{resolveEvents[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/aboutus`} className={styles.aboutus}>{resolveAboutUs[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>}

      </nav>
    </header>
  )
}

export default NavigationMobile
