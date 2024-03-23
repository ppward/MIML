import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onoff.module.css";

const Onoff = () => {
  const navigate = useNavigate();

  const onOnoffContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.onoff} onClick={onOnoffContainerClick}>
      <div className={styles.onoffChild} />
      <div className={styles.onoffItem} />
      <div className={styles.on}>on</div>
      <div className={styles.onoffInner} />
      <div className={styles.offWrapper}>
        <div className={styles.off}>off</div>
      </div>
    </div>
  );
};

export default Onoff;
