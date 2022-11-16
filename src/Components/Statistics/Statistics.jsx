import React from "react";
import styles from "./statistics.module.css";
import GitHubCalendar from "react-github-calendar";
const Statistics = () => {
    return (
      <div>
        <p className={styles.stat}>Statistics</p>
        <div className={styles.contribution}>
          <div>
            <img
              className={styles.img}
              src="https://github-readme-streak-stats.herokuapp.com/?user=grvsharma1994"
              alt="Gaurav Sharma"
            />
          </div>
          <div>
            <img
              className={styles.img}
              src="https://github-readme-stats.vercel.app/api?username=grvsharma1994"
              alt="Gaurav Sharma"
            />
          </div>
        </div>
        <div className={styles.github}>
          <GitHubCalendar
            style={{
              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "3px",
            }}
            username="grvsharma1994"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    );
  };
  export default Statistics;
  