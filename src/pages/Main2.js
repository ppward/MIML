import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent15 from "../components/FrameComponent15";
import ConditionalBranch from "../components/ConditionalBranch";
import Footer2 from "../components/Footer2";
import styles from "./Main2.module.css";

//책갈피
const Main2 = () => {
  const navigate = useNavigate();

  const onAITextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <section className={styles.mainInner}>
        <div className={styles.frameParent}>
          <FrameComponent15
            frameDivFlex="unset"
            frameDivAlignSelf="stretch"
            aIPadding="var(--padding-10xs) 21.899999999999636px 0px 0px"
            frameDivPadding="var(--padding-4xs) 15.100000000000364px 8.100000000000023px"
            frameDivPadding1="var(--padding-4xs) 29.400000000000546px 0px 0px"
            onAIText1Click={onAITextClick}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
              <div className={styles.wrapper2}>
                <div className={styles.div6}>무협</div>
              </div>
              <div className={styles.wrapper3}>
                <div className={styles.div7}>드라마</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div8}>로판</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.div9}>로맨스</div>
              </div>
            </div>
          </div>
          <div className={styles.navigationParent}>
            <img
              className={styles.navigationIcon}
              alt=""
              src="/navigation.svg"
            />
            <img className={styles.frameItem} alt="" src="/line-11.svg" />
          </div>
          <ConditionalBranch />
        </div>
      </section>
      <img className={styles.mainChild} alt="" src="/frame-2@2x.png" />
      <Footer2 />
    </div>
  );
};

export default Main2;
