import { useMemo } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({
  prop,
  prop1,
  prop2,
  prop3,
  antDesignheartOutlined,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const h33Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div3Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const antDesignheartOutlinedIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={styles.parent}>
      <h3 className={styles.h3} style={h33Style}>
        {prop}
      </h3>
      <div className={styles.div}>
        <p className={styles.p}>{prop1}</p>
        <p className={styles.p1}>{prop2}</p>
      </div>
      <div className={styles.group}>
        <div className={styles.div1} style={div3Style}>
          {prop3}
        </div>
        <img
          className={styles.antDesignheartOutlinedIcon}
          alt=""
          src={antDesignheartOutlined}
          style={antDesignheartOutlinedIconStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent10;
