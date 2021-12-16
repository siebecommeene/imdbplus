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
      {formstate&&<iframe width="540" height="900" src="https://736f53c4.sibforms.com/serve/MUIEAMwbXOdlJ5yx9ix2QRTC7X4dxJBT2QMJlsKOsA9brGvEHA0uVfg5tFAx4WlqZVJHenAf8nZLsUkYwjSKe2QhEzRA2yjCJMjF5pICLxAXARVixPfBiaQMckJg_JylGwm9rJ-ntGVAo09Px4u9ogK4ablRitykfGWYFo9VXpn_qePVpzlZ_An3StUG2vZplbHsy0q2zpdMVae_" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>} 
    </div>
  );
};

export default EmailOptin;
