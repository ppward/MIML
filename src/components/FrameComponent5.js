import { useMemo } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
  image7,
  column,
  propAlignSelf,
  propWidth,
  propTop,
  propBottom,
  propPadding,
  propPadding1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const skipIconStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const buttonAddToCartStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.skipParent}>
        <img
          className={styles.skipIcon}
          alt=""
          src="/skip.svg"
          style={skipIconStyle}
        />
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/9781982185824-2@2x.png" />
          <img
            className={styles.image7Icon}
            loading="lazy"
            alt=""
            src={image7}
          />
        </div>
      </div>
      <div className={styles.frameGroup} style={frameDiv3Style}>
        <div className={styles.group}>
          <h3 className={styles.h3}>크림슨의 미궁</h3>
          <div className={styles.div}>
            <p className={styles.p}>기시 유스케 (글)</p>
            <p className={styles.p1}>김미영 (번역)</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>12,600원</div>
          <div className={styles.columnWrapper}>
            <img
              className={styles.columnIcon}
              loading="lazy"
              alt=""
              src={column}
            />
          </div>
        </div>
      </div>
      <button className={styles.buttonAddToCart} style={buttonAddToCartStyle}>
        <div className={styles.buttonAddToCartChild} />
        <div className={styles.div2}>눈과 귀로 읽으러 가기</div>
      </button>
    </div>
  );
};

export default FrameComponent5;
