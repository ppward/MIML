import { useCallback } from "react";
import FrameComponent5 from "./FrameComponent5";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = () => {
  const navigate = useNavigate();

  const onDataFlowImageClick = useCallback(() => {
    navigate("/main1");
  }, [navigate]);

  return (
    <section className={styles.converterWrapper}>
      <div className={styles.converter}>
        <div className={styles.calculator}>
          <div className={styles.aiParent}>
            <h1 className={styles.ai}>AI 지원 도서</h1>
            <div className={styles.combinationTable}>
              <div className={styles.div}>더보기 ▶</div>
            </div>
          </div>
        </div>
        <div className={styles.shapeContainer}>
          <div className={styles.frameParent}>
            <FrameComponent5
              image7="/image-71@2x.png"
              column="/vector-3.svg"
              propAlignSelf="unset"
              propWidth="275px"
              propTop="unset"
              propBottom="191.2px"
              propPadding="0px 0px var(--padding-8xs)"
              propPadding1="12.099999999999907px 60.80000000000018px var(--padding-2xs)"
            />
            <div className={styles.fileSystem}>
              <div className={styles.frameGroup}>
                <div className={styles.image8Wrapper}>
                  <img
                    className={styles.image8Icon}
                    loading="lazy"
                    alt=""
                    src="/image-81@2x.png"
                  />
                </div>
                <div className={styles.switch}>
                  <div className={styles.hub}>
                    <div className={styles.parent}>
                      <h3 className={styles.h3}>인간실격</h3>
                      <div className={styles.div1}>
                        <p className={styles.p}>다자이 오사무 (글)</p>
                        <p className={styles.p1}>강소정 (번역)</p>
                      </div>
                    </div>
                    <div className={styles.group}>
                      <div className={styles.div2}>8,820원</div>
                      <img
                        className={styles.antDesignheartOutlinedIcon}
                        loading="lazy"
                        alt=""
                        src="/antdesignheartoutlined1.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.buttonAddToCart}>
                  <div className={styles.buttonAddToCartChild} />
                  <div className={styles.div3}>눈과 귀로 읽으러 가기</div>
                </button>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.image9Wrapper}>
                  <img
                    className={styles.image9Icon}
                    loading="lazy"
                    alt=""
                    src="/image-91@2x.png"
                  />
                </div>
                <div className={styles.container}>
                  <h3 className={styles.h31}>셜록 홈즈 베스트 단편선</h3>
                  <div className={styles.frameDiv}>
                    <div className={styles.div4}>
                      <p className={styles.p2}>아서 코난 도일 (글)</p>
                      <p className={styles.p3}>조미영(번역)</p>
                    </div>
                    <div className={styles.parent1}>
                      <div className={styles.div5}>14,220원</div>
                      <img
                        className={styles.antDesignheartOutlinedIcon1}
                        alt=""
                        src="/antdesignheartoutlined-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.buttonAddToCart1}>
                  <div className={styles.buttonAddToCartItem} />
                  <div className={styles.div6}>눈과 귀로 읽으러 가기</div>
                </button>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.dataFlowWrapper}>
                  <img
                    className={styles.dataFlowIcon}
                    loading="lazy"
                    alt=""
                    src="/9781982185824-2@2x.png"
                    onClick={onDataFlowImageClick}
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent2}>
                    <h3 className={styles.h32}>총 균 쇠</h3>
                    <div className={styles.div7}>
                      <p className={styles.p4}>재레드 다이아몬드 (글)</p>
                      <p className={styles.p5}>강주헌 (번역)</p>
                    </div>
                    <div className={styles.parent3}>
                      <div className={styles.div8}>26,820원</div>
                      <img
                        className={styles.antDesignheartOutlinedIcon2}
                        alt=""
                        src="/antdesignheartoutlined-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.buttonAddToCart2}>
                  <div className={styles.buttonAddToCartInner} />
                  <div className={styles.div9}>눈과 귀로 읽으러 가기</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.scrollWrapper}>
            <img
              className={styles.scrollIcon}
              loading="lazy"
              alt=""
              src="/scroll1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
