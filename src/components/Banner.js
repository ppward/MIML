import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.dataAggregatorWrapper}>
      <div className={styles.dataAggregator}>
        <div className={styles.logicBranch}>
          <div className={styles.inputCluster}>
            <div className={styles.inputClusterChild} />
            <div className={styles.inputClusterItem} />
            <div className={styles.inputClusterInner} />
            <div className={styles.thresholdSetter} />
          </div>
        </div>
        <div className={styles.dataAggregatorInner}>
          <div className={styles.frameParent}>
            <div className={styles.authorOfAugustWrapper}>
              <button className={styles.authorOfAugust}>
                <div className={styles.authorOfAugust1}>Author of august</div>
              </button>
            </div>
            <div className={styles.parent}>
              <h1 className={styles.h1}>난중일기</h1>
              <div className={styles.div}>
                <p className={styles.p}>
                  임진왜란 3개월 전부터 전사하기 이틀 전까지 2,539일간의 기록들
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.p1}>
                  국보 제76호, 2013년 유네스코 세계기록유산으로 등재!
                </p>
                <p className={styles.p2}>
                  류성룡에 대한 걱정, 원균에 대한 비판, 나라에 대한 애틋함
                </p>
                <p className={styles.p3}>
                  임진왜란을 승리로 이끌 수 있었던 비책(秘策)이 담긴 일기
                </p>
              </div>
            </div>
            <button className={styles.ghoustButton}>
              <div className={styles.requestACall}>눈과 귀로 읽으러 가기</div>
            </button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
        <div className={styles.image10Wrapper}>
          <img
            className={styles.image10Icon}
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
