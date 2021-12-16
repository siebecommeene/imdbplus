import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://736f53c4.sibforms.com/serve/MUIEAA7-TZyrro5Cmo7idXkKDm7R7r1aMDA-Ih8WsTdPfPW-xO_qbGretmH-xsoXDMcHMT4wxVbkcE9uvVoIGnJfoVfZcpkPPh2FrYej36_R5h2QxDW3qRJuMcsRiPHKDNyvuS2cLDznu8h2mQTiGWYze3XnWxK7Qu7vKdnDpdUUBLlA5oJXegty8gCotLh7qoOgoRDZBYelLZW9" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>} 
    </div>
  );
};

export default EmailOptin;
