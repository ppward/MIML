import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent12.module.css";

const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onAddToCartClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={styles.mainInner}>
      <div className={styles.frameParent}>
        <div className={styles.imagesToSkipWrapper}>
          <div className={styles.imagesToSkip}>
            <div className={styles.image4}>
              <div className={styles.image4Child} />
              <img
                className={styles.t3syzzsl1Icon}
                loading="lazy"
                alt=""
                src="/81t3syzzsl-1@2x.png"
              />
            </div>
            <div className={styles.image3}>
              <div className={styles.image3Child} />
              <img
                className={styles.ayp0ys1yl1Icon}
                loading="lazy"
                alt=""
                src="/81ayp0ys1yl-1@2x.png"
              />
            </div>
            <div className={styles.image2}>
              <div className={styles.image2Child} />
              <img
                className={styles.dk6xyf9al1Icon}
                loading="lazy"
                alt=""
                src="/91dk6xyf9al-1@2x.png"
              />
            </div>
            <div className={styles.image1}>
              <div className={styles.image1Child} />
              <img
                className={styles.irdr7gol1Icon}
                loading="lazy"
                alt=""
                src="/913irdr7gol-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.accordionParent}>
            <div className={styles.accordion}>
              <img
                className={styles.icon}
                alt=""
                src="/9781982185824-2@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img className={styles.bibookIcon} alt="" src="/bibook.svg" />
              </div>
              <div className={styles.modalDialog}>
                <div className={styles.flipsAFew}>flips a few pages</div>
              </div>
            </div>
            <div className={styles.skipWrapper}>
              <img
                className={styles.skipIcon}
                loading="lazy"
                alt=""
                src="/skip.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.wrapper}>
                <h1 className={styles.h1}>총 균 쇠</h1>
              </div>
              <div className={styles.div}>재레드 다이아몬드 저/김진준 역</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.bistarFillParent}>
                  <img
                    className={styles.bistarFillIcon}
                    loading="lazy"
                    alt=""
                    src="/bistarfill.svg"
                  />
                  <img
                    className={styles.bistarFillIcon1}
                    alt=""
                    src="/bistarfill.svg"
                  />
                  <img
                    className={styles.bistarFillIcon2}
                    alt=""
                    src="/bistarfill.svg"
                  />
                  <img
                    className={styles.bistarFillIcon3}
                    alt=""
                    src="/bistarfill.svg"
                  />
                  <img
                    className={styles.bistarHalfIcon}
                    alt=""
                    src="/bistarhalf.svg"
                  />
                </div>
              </div>
              <div className={styles.div1}>9.4</div>
            </div>
          </div>
          <div className={styles.treeMap}>
            <div className={styles.div2}>26,820원</div>
            <div className={styles.carouselParent}>
              <div className={styles.carousel}>
                <div className={styles.div3}>
                  진화생물학자인 재레드 다이아몬드는 총기와 병균과 금속이 역사에
                  미친 엄청난 영향에 대해 분석한다. 일단 수렵 채집 단계를 넘어서
                  농경을 하게 된 사회들은 문자와 기술, 정부, 제도뿐만 아니라
                  사악한 병원균과 강력한 무기들도 개발할 수 있었다. 그러한
                  사회들은 질병과 무기의 도움으로 다른 민족들을 희생시키며
                  자신들의 삶의 터전을 새로운 지역으로 확장했다. 지난 500여 년간
                  유럽인이 자행한 비유럽인 정복은 이러한 과정을 극적으로
                  보여주는 예다.
                </div>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.akarIconscircleMinusWrapper}>
                      <img
                        className={styles.akarIconscircleMinus}
                        loading="lazy"
                        alt=""
                        src="/akariconscircleminus.svg"
                      />
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div4}>1</div>
                    </div>
                    <img className={styles.icon1} alt="" src="/icon.svg" />
                  </div>
                  <div className={styles.addToCartWrapper}>
                    <button
                      className={styles.addToCart}
                      onClick={onAddToCartClick}
                    >
                      <div className={styles.addToCart1}>
                        눈과 귀로 읽으러 가기
                      </div>
                    </button>
                  </div>
                </div>
                <div className={styles.waterfallChartParent}>
                  <div className={styles.waterfallChart}>
                    <img
                      className={styles.dataProcessorIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <button className={styles.favorite}>
                    <div className={styles.addToCart2}>위시리스트 추가</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logicTree} />
          <div className={styles.inputCollector}>
            <div className={styles.parent}>
              <div className={styles.div5}>출판사 :</div>
              <div className={styles.div6}>출판일:</div>
              <div className={styles.div7}>쪽수 :</div>
            </div>
            <div className={styles.comparator}>
              <div className={styles.div8}>문학사상</div>
              <div className={styles.alignmentProcessor}>
                <div className={styles.march}>2005/12/19</div>
                <div className={styles.div9}>752 페이지</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div10}>언어:</div>
              <div className={styles.div11}>연령:</div>
              <div className={styles.ai}>AI 지원:</div>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div12}>한글</div>
              <div className={styles.div13}>전체이용가</div>
              <div className={styles.x}>x</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
