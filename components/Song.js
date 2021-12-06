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
      return content.genre.includes(obj.uuid);
    })
  
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'product', 'personalities').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'newsitem', 'personalities').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  var pictures = content.pictures;

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

          <div className={styles.short}>
            Number of Plays: {render(content.numberofplays)}
          </div>
          <div className={styles.synopsis}>
            Release Date: {render(content.releasedate)}
          </div>
          <div className={styles.short}>
             {render(content.clip)}
          </div>
          <div className={styles.synopsis}>
            {render(content.clip)}
          </div>
          {products&&products.length>0&&<RelatedItemGallery items={products} title="Merchandise" type="product"></RelatedItemGallery>}
          {newsitems&&newsitems.length>0&&<RelatedItemGallery items={newsitems} title="News" type="newsitem"></RelatedItemGallery>}
          </div>  
      </main>
    </SbEditable>
  )
}

export default Song
