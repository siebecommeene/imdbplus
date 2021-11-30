import styles from "../styles/Footer.module.scss"

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
        <p>IMDB Plus is every bit as good as IMDB. Plus!</p>
      </div>
    </footer>



  )
}

export default Footer
