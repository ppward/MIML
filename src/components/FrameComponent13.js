import styles from "./FrameComponent13.module.css";

const FrameComponent13 = () => {
  return (
    <section className={styles.videoPlayerWrapper}>
      <div className={styles.videoPlayer}>
        <div className={styles.timer}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-7.svg"
                />
                <div className={styles.div}>인기 도서</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div1}>신작</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>남성 인기</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div3}>여성 인기</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div4}>판타지</div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.div5}>현판</div>
            </div>
            <div className={styles.featureSplitter}>
              <div className={styles.div6}>무협</div>
            </div>
            <div className={styles.wrapper2}>
              <div className={styles.div7}>드라마</div>
            </div>
            <div className={styles.wrapper3}>
              <div className={styles.div8}>로판</div>
            </div>
            <div className={styles.wrapper4}>
              <div className={styles.div9}>로맨스</div>
            </div>
          </div>
        </div>
        <img className={styles.videoPlayerChild} alt="" src="/line-11.svg" />
      </div>
    </section>
  );
};

export default FrameComponent13;
