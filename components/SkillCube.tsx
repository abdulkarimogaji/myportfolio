import styles from "../styles/cube.module.css";
const SkillCube = () => {
  return (
    <div className={`${styles.mainDiv} absolute right-16`}>
      <div className={styles.boxDiv}>
        <div className={styles.front}></div>
        <div className={styles.back}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default SkillCube;
