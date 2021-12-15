import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Mood.module.scss"


const Mood = ({ data }) => {
  var content = data.story.content;
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.song, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.Title}>
            {content.Title}
          </h1>
        </div>
        <div className={styles.description}>
          {render(content.Discription)}
        </div>
      </main>
    </SbEditable>
  )
}

export default Mood
