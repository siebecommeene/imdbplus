import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Product.module.scss"
import Storyblok, { useStoryblok, getData } from "../utils/storyblok"
import RelatedItem from "./RelatedItem"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { FacebookShareButton, FacebookIcon,TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';



const Album = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
    var songs = data.rels.filter(obj => {
      return content.songs.includes(obj.uuid);
    });
    var personalities = data.rels.filter(obj => {
      return content.personalities.includes(obj.uuid);
    });
  } else {
    var content = data;
  }
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={data.uuid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.album}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className="sharebar">
            <FacebookShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} quote={content.short} hashtag={'#imdbplus'}><FacebookIcon size={32} round /></FacebookShareButton>
            <LinkedinShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} summary={content.short}><LinkedinIcon size={32} round /></LinkedinShareButton>
            <TwitterShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} title={content.title}><TwitterIcon size={32} round /></TwitterShareButton>
          </div>
           <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
              <div className={styles.personality}>
                {render(content.personality)}
              </div>
          <div className={styles.description}>
            <div className={styles.title}>Release Date</div>
            <div className={styles.content}> {render(content.releasedate)}</div>

          </div>
          {songs && songs.length > 0 && <SmallCardList items={songs} title="Related Songs" type="song"></SmallCardList>}
          {personalities && personalities.length > 0 && <SmallCardList items={personalities} title="Related Artists" type="personality"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Album
