import React from "react";
import styles from "./about.module.css";
function About() {
  return (
    <div id="about">
      <div>
        <p className={styles.aboutName}>About Me</p>
        <div className={styles.aboutsection}>
          <div className={styles.imagediv}>
            <img
              className={styles.aboutimg}
              src="https://i.pinimg.com/originals/a1/ba/2c/a1ba2c150d44d387f565a87c54351bf8.gif"
              alt="img"
            />
          </div>
          <div className={styles.details}>
            <p>
            A Web Developer with a vast array of knowledge in
many different Front end and Backend languages,
Responsive Frameworks, Databases, and best code
practices.look forward to using my Skills for gaining
more experience.
I build interesting things that live on the Internet.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

