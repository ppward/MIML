import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import styles from "./AIBookItem.module.css";

const AIBookItem = () => {
  const navigate = useNavigate();

  const onBenefictContainerClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onDataAggregatorImageClick = useCallback(() => {
    navigate("/main1");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/read");
  }, [navigate]);
  
  return (
    <section className={styles.mainInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <FrameComponent6 bookOpen="/book-open.svg" prop="자세히 보기" />
              <div className={styles.frameChild} />
              <FrameComponent6
                bookOpen="/star.svg"
                prop="위시 리스트"
                propWidth="277.4px"
                propPadding="var(--padding-8xs) 0px 0px"
                propColor="#382c2c"
                onBenefictContainerClick={onBenefictContainerClick}
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.aiParent}>
                <h1 className={styles.ai}>AI 지원 도서</h1>
                <div className={styles.imageContainer}>
                  <div className={styles.div}>더보기 ▶</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonInner}>
                <FrameComponent5
                  image7="/image-7@2x.png"
                  column="/vector.svg"
                />
              </div>
              <div className={styles.constraint}>
                <div className={styles.frameParent1}>
                  <div className={styles.image8Wrapper}>
                    <img
                      className={styles.image8Icon}
                      loading="lazy"
                      alt=""
                      src="/image-8@2x.png"
                    />
                  </div>
                  <div className={styles.divider}>
                    <div className={styles.parent}>
                      <h3 className={styles.h3}>인간실격</h3>
                      <div className={styles.div1}>
                        <p className={styles.p}>다자이 오사무 (글)</p>
                        <p className={styles.p1}>강소정 (번역)</p>
                      </div>
                    </div>
                    <div className={styles.canvas}>
                      <div className={styles.div2}>8,820원</div>
                      <div className={styles.labelWrapper}>
                        <img
                          className={styles.labelIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <button className={styles.buttonAddToCart}>
                    <div className={styles.buttonAddToCartChild} />
                    <div className={styles.div3}>눈과 귀로 읽으러 가기</div>
                  </button>
                </div>
              </div>
              <div className={styles.shadow}>
                <div className={styles.image9Parent}>
                  <img
                    className={styles.image9Icon}
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                  <div className={styles.group}>
                    <h3 className={styles.h3}>셜록 홈즈 베스트 단편선</h3>
                    <div className={styles.container}>
                      <div className={styles.div4}>
                        <p className={styles.p2}>아서 코난 도일 (글)</p>
                        <p className={styles.p3}>조미영(번역)</p>
                      </div>
                      <div className={styles.visibility}>
                        <div className={styles.div5}>14,220원</div>
                        <div className={styles.spacingManagerWrapper}>
                          <img
                            className={styles.spacingManagerIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.buttonAddToCart1}>
                    <div className={styles.buttonAddToCartItem} />
                    <div className={styles.div6}>눈과 귀로 읽으러 가기</div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.dataAggregatorWrapper}>
                  <img
                    className={styles.dataAggregatorIcon}
                    loading="lazy"
                    alt=""
                    src="/9781982185824-2@2x.png"
                    onClick={onDataAggregatorImageClick}
                  />
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.parent1}>
                    <h3 className={styles.h32}>총 균 쇠</h3>
                    <div className={styles.div7}>
                      <p className={styles.p4}>재레드 다이아몬드 (글)</p>
                      <p className={styles.p5}>강주헌 (번역)</p>
                    </div>
                    <div className={styles.parent2}>
                      <div className={styles.div8}>26,820원</div>
                      <img
                        className={styles.antDesignheartOutlinedIcon}
                        loading="lazy"
                        alt=""
                        src="/antdesignheartoutlined.svg"
                      />
                    </div>
                  </div>
                </div>
                <button className={styles.buttonAddToCart2}>
                  <div
                    className={styles.buttonAddToCartInner}
                    onClick={(onRectangleClick)}
                  />
                  <div className={styles.div9}>눈과 귀로 읽으러 가기</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollWrapper}>
          <img
            className={styles.scrollIcon}
            loading="lazy"
            alt=""
            src="/scroll.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default AIBookItem;
