import { useCallback } from "react";
import FrameComponent18 from "./FrameComponent18";
import { useNavigate } from "react-router-dom";
import styles from "./Stack.module.css";

const Stack = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/main1");
  }, [navigate]);

  const onButtonAddToCartClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.stack}>
      <img className={styles.stackChild} alt="" src="/line-11.svg" />
      <div className={styles.loop}>
        <h1 className={styles.h1}>위시리스트</h1>
      </div>
      <div className={styles.variable}>
        <div className={styles.frameParent}>
          <div className={styles.logicalOperatorWrapper}>
            <div className={styles.logicalOperator}>
              <div className={styles.constantValue}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/9781982185824-2@2x.png"
                />
                <img
                  className={styles.image13Icon}
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.parent}>
                  <h3 className={styles.h3}>크림슨의 미궁</h3>
                  <div className={styles.div}>
                    <p className={styles.p}>기시 유스케 (글)</p>
                    <p className={styles.p1}>김미영 (번역)</p>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.div1}>12,600원</div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.div2}>눈과 귀로 읽으러 가기</div>
              </button>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.image11Parent}>
                <img
                  className={styles.image11Icon}
                  alt=""
                  src="/image-11@2x.png"
                />
                <div className={styles.antDesignheartOutlined} />
              </div>
              <FrameComponent18
                prop="모모"
                prop1="미하엘 엔데 (글)"
                prop2="한미희 (번역)"
                prop3="13,500원"
              />
              <div className={styles.frameDiv}>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/rectangle-40.svg"
                  />
                  <div className={styles.div3}>읽으러 가기</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/9781982185824-2@2x.png"
              onClick={onImageClick}
            />
            <FrameComponent18
              prop="총 균 쇠"
              prop1="재레드 다이아몬드 (글)"
              prop2="강주헌 (번역)"
              prop3="26,820원"
              propPadding="unset"
              propMinWidth="84px"
              propDebugCommit="unset"
              propPadding1="6.2999999999999545px 0px 0px"
              propDebugCommit1="unset"
            />
            <div className={styles.buttonAddToCartWrapper}>
              <button
                className={styles.buttonAddToCart}
                onClick={onButtonAddToCartClick}
              >
                <div className={styles.div4}>눈과 귀로 읽으러 가기</div>
                <div className={styles.buttonAddToCartChild} />
                <div className={styles.div5}>눈과 귀로 읽으러 가기</div>
                <div className={styles.addToCartWrapper}>
                  <img className={styles.addToCart} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
