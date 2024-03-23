import { useMemo } from "react";
import styles from "./FrameComponent18.module.css";

const FrameComponent18 = ({
  prop,
  prop1,
  prop2,
  prop3,
  propPadding,
  propMinWidth,
  propDebugCommit,
  propPadding1,
  propDebugCommit1,
}) => {
  const frameDiv15Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const h35Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div4Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv16Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const vectorIcon1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={styles.parent} style={frameDiv15Style}>
      <h3 className={styles.h3} style={h35Style}>
        {prop}
      </h3>
      <div className={styles.div}>
        <p className={styles.p}>{prop1}</p>
        <p className={styles.p1}>{prop2}</p>
      </div>
      <div className={styles.group}>
        <div className={styles.div1} style={div4Style}>
          {prop3}
        </div>
        <div className={styles.vectorWrapper} style={frameDiv16Style}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector.svg"
            style={vectorIcon1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent18;
