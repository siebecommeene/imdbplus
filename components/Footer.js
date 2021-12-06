import styles from "../styles/Footer.module.scss"

const resolveFooter = {
  en: 'Discover everything about music on TheMusicPro',
  nl: 'Vind hier alles over muziek op TheMusicPro',
}
const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/134952/500x500/ebe8675a16/themusicpro-2_adobespark.png"
            alt="TheMusicPro Logo"
            className=""
          />
        </div>
        <p>Discover everything about music on TheMusicPro</p>
      </div>
    </footer>



  )
}

export default Footer
