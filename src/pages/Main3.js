import FrameComponent19 from "../components/FrameComponent19";
import Stack from "../components/Stack";
import Footer3 from "../components/Footer3";
import styles from "./Main3.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <img className={styles.downloadIcon} alt="" />
      <div className={styles.div}>눈과 귀로 읽으러 가기</div>
      <div className={styles.addToCart}>Add to cart</div>
      <img className={styles.downloadIcon1} alt="" src="/download.svg" />
      <div className={styles.div1}>읽으러 가기</div>
      <div className={styles.antDesignheartOutlined} />
      <section className={styles.mainInner}>
        <div className={styles.frameParent}>
          <FrameComponent19 />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-7.svg"
                  />
                  <div className={styles.div2}>인기 도서</div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div3}>신작</div>
              </div>
              <div className={styles.container}>
                <div className={styles.div4}>남성 인기</div>
              </div>
              <div className={styles.frame}>
                <div className={styles.div5}>여성 인기</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.div6}>판타지</div>
              </div>
              <div className={styles.wrapper1}>
                <div className={styles.div7}>현판</div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.div8}>무협</div>
              </div>
              <div className={styles.wrapper3}>
                <div className={styles.div9}>드라마</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div10}>로판</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.div11}>로맨스</div>
              </div>
            </div>
          </div>
          <Stack />
        </div>
      </section>
      <img className={styles.addUserIcon} alt="" src="/add-user.svg" />
      <div className={styles.conditionBranch}>
        <div className={styles.userParent}>
          <img className={styles.userIcon} alt="" src="/3-user.svg" />
          <img className={styles.addUserIcon1} alt="" src="/add-user-1.svg" />
        </div>
        <img className={styles.addUserIcon2} alt="" src="/add-user-1.svg" />
      </div>
      <Footer3 />
    </div>
  );
};

export default Main;
