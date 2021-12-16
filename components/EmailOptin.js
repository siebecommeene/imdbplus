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
      {formstate&&<iframe width="540" height="900" src="https://736f53c4.sibforms.com/serve/MUIEAJEzSn8mfNf47ujqS0JPokK-tvNXCXGx2FuzENIOVbxj0y4ecS0s-tTDDuAp-32MPlm333yAi3Vb_B37AMw6e4BaqMS6cbu8-PGdsU-6f7wR8lzq80XNLxNMO424MjLSsRAWDpi64BDhvT1a-sd6PGOzAMdCWXieNdNIG-pxH6b7Ho9ilAAKOSqEiCM0Fx_0BunysT6mNmjw" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>} 
    </div>
  );
};

export default EmailOptin;
