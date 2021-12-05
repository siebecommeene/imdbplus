import styles from "../styles/Navigation.module.scss"

const Navigation = ({ locale, locales }) => {
  const resolveSongs = {
    en: 'Songs',
    nl: 'Liedjes',
  }
  const resolveAlbum = {
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
  let homeurl="/";
  if(locale!='default'){
    homeurl = "/"+locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
           <img
              src="https://a.storyblok.com/f/134952/500x500/ebe8675a16/themusicpro-2_adobespark.png"
              alt="TheMusicPro Logo"
              className=""
            /> 
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/songs`} className={styles.song}>{resolveSongs[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/albums`} className={styles.album}>{resolveAlbum[locale]}</a>
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
        </div>

      </nav>
    </header>
  )
}

export default Navigation
