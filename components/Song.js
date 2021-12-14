import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const resolveDirectors = {
  en: 'Directors',
  nl: 'Regisseurs',
}

const resolveWriters = {
  en: 'Writers',
  nl: 'Schrijvers',
}

const resolveStars = {
  en: 'Stars',
  nl: 'Sterren',
}

const resolveMerchandise = {
  en: 'Merchandise',
  nl: 'Producten',
}

const resolveNews = {
  en: 'Events',
  nl: 'Evenementen',
}

const Song = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    var genres = data.rels.filter(obj => {
      return content.genres.includes(obj.uuid);
    })
    var albums = data.rels.filter(obj => {
      return content.albums.includes(obj.uuid);
    })
  } else {
    var content = data;
  }

  if(content.moods) {
    var moods = data.rels.filter(obj => {
      return content.moods.includes(obj.uuid);
    });
  } 
  
  const [personalities, setPersonalities] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'personality', 'songs').then(
    function (result) {
      setPersonalities(result.data.stories);
    });

  var pictures = content.pictures;

  <link rel="import" href="path/to/favorite-star.html"></link>

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.song}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.genrelist}>
            {genres.map((item, index) => (
              <div className={styles.genre}>
                {item.content.title}
              </div>
            ))}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
          <ion-icon name="logo-instagram"></ion-icon> <ion-icon name="logo-twitter"></ion-icon> <ion-icon name="logo-facebook"></ion-icon>
          <div className={styles.number_of_plays}>
            Number of Plays: {render(content.number_of_plays)}
          </div>
          <div className={styles.releasedate}>
            Release Date: {render(content.releasedate)}
          </div>
          <div className={styles.short}>
             {render(content.clip)}
          </div>
          <div className={styles.synopsis}>
            {render(content.clip)}
          </div>
          {personalities&&personalities.length>0&&<RelatedItemGallery items={personalities} title="Artist" type="artist"></RelatedItemGallery>}
          </div> 
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> 
      </main>
    </SbEditable>
  )
}

export default Song
