import { Button } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import styles from "./HeroSection.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/Gaurav_Sharma_Resume.pdf";
const HeroSection = () => {
  return (
    <div className={styles.rootCont}>
      <div className={styles.nameCont}>
        <p>Hi,</p>
        <p>
          I am <span>Gaurav Sharma</span>
        </p>
        <p>Full Stack Web Developer</p>
        <a href={resume} target="_blank" download>
          <Button
            onClick={() => window.open(resume)}
            colorScheme="blue"
            rightIcon={<DownloadIcon />}
          >
            Resume
          </Button>
        </a>
      </div>
   <div className={styles.photoCont}>
        <img src="/gaurav photo.png" alt="gauravimg" className={styles.heroImg} />
      </div>
      <div className={styles.socialCont}>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/gaurav-sharma-693236201/"
          target="_blank"
          className={styles.linkdin}
        >
          <AiFillLinkedin size={40} />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/grvsharma1994"
          target="_blank"
          className={styles.github}
        >
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </div>
  );
};
export default HeroSection;