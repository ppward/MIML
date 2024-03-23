import FrameComponent16 from "./FrameComponent16";
import styles from "./ConditionalBranch.module.css";

const ConditionalBranch = () => {
  return (
    <div className={styles.conditionalBranch}>
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>내가 본 책</h1>
        </div>
        <div className={styles.antDesignheartOutlinedParent}>
          <img
            className={styles.antDesignheartOutlinedIcon}
            loading="lazy"
            alt=""
            src="/antdesignheartoutlined2.svg"
          />
          <img
            className={styles.antDesignheartOutlinedIcon1}
            loading="lazy"
            alt=""
            src="/antdesignheartoutlined-11.svg"
          />
          <img
            className={styles.antDesignheartOutlinedIcon2}
            loading="lazy"
            alt=""
            src="/antdesignheartoutlined-21.svg"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.principalImageParent}>
                <img
                  className={styles.principalImage}
                  loading="lazy"
                  alt=""
                  src="/principal-image@2x.png"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.parent}>
                    <h3 className={styles.h3}>총균쇠</h3>
                    <div className={styles.group}>
                      <div className={styles.div}>
                        <p className={styles.p}>재레드 다이아몬드 (글)</p>
                        <p className={styles.p1}>강주헌 (번역)</p>
                      </div>
                      <div className={styles.antDesignheartOutlinedWrapper}>
                        <img
                          className={styles.antDesignheartOutlinedIcon3}
                          loading="lazy"
                          alt=""
                          src="/antdesignheartoutlined-31.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.buttonAddToCart}>
                      <div className={styles.buttonAddToCartChild} />
                      <div
                        className={styles.div1}
                      >{`이어서 보기    (78.1%) `}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.image9Icon}
                      alt=""
                      src="/image-9@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.container}>
                          <h3 className={styles.h31}>
                            셜록 홈즈 베스트 단편선
                          </h3>
                          <div className={styles.parent1}>
                            <div className={styles.div2}>
                              <p className={styles.p2}>아서 코난 도일 (글)</p>
                              <p className={styles.p3}>조미영(번역)</p>
                            </div>
                            <div
                              className={styles.antDesignheartOutlinedContainer}
                            >
                              <img
                                className={styles.antDesignheartOutlinedIcon4}
                                loading="lazy"
                                alt=""
                                src="/antdesignheartoutlined-41.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={styles.button}>
                        <div className={styles.child} />
                        <div className={styles.div3}>이어서 보기</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.image7Parent}>
                  <img
                    className={styles.image7Icon}
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <img
                    className={styles.image8Icon}
                    loading="lazy"
                    alt=""
                    src="/image-82@2x.png"
                  />
                  <img
                    className={styles.image5Icon}
                    loading="lazy"
                    alt=""
                    src="/image-52@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.frameParent5}>
                    <div className={styles.parent2}>
                      <h3 className={styles.h32}>크림슨의 미궁</h3>
                      <div className={styles.dropdownMenu}>
                        <div className={styles.div4}>
                          <p className={styles.p4}>기시 유스케 (글)</p>
                          <p className={styles.p5}>김미영 (번역)</p>
                        </div>
                        <div className={styles.antDesignheartOutlinedFrame}>
                          <img
                            className={styles.antDesignheartOutlinedIcon5}
                            loading="lazy"
                            alt=""
                            src="/antdesignheartoutlined-11.svg"
                          />
                        </div>
                      </div>
                      <button className={styles.buttonAddToCart1}>
                        <div className={styles.buttonAddToCartItem} />
                        <div className={styles.div5}>이어서 보기</div>
                      </button>
                    </div>
                    <FrameComponent16
                      prop="인간실격"
                      antDesignheartOutlined="/antdesignheartoutlined-6.svg"
                      prop1="다자이 오사무 (글)"
                    />
                    <div className={styles.headerRow}>
                      <div className={styles.div6}>눈과 귀로 읽으러 가기</div>
                    </div>
                    <FrameComponent16
                      prop="미움받을 용기"
                      antDesignheartOutlined="/antdesignheartoutlined-7.svg"
                      prop1="기시미 이치로 (글)"
                      propPadding="unset"
                      propMinWidth="unset"
                      propWidth="292.2px"
                      propPadding1="0px 8.900000000000546px 0px var(--padding-4xs)"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.frameParent6}>
                  <div className={styles.image6Parent}>
                    <img
                      className={styles.image6Icon}
                      loading="lazy"
                      alt=""
                      src="/image-6@2x.png"
                    />
                    <img
                      className={styles.image11Icon}
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                    <img
                      className={styles.image12Icon}
                      loading="lazy"
                      alt=""
                      src="/image-12@2x.png"
                    />
                  </div>
                  <div className={styles.toolTip}>
                    <div className={styles.slider}>
                      <div className={styles.frameParent7}>
                        <div className={styles.parent3}>
                          <h3 className={styles.h33}>
                            누가 내 머리에 똥 쌌어?
                          </h3>
                          <div
                            className={styles.div7}
                          >{`베르너 홀츠바르트 `}</div>
                        </div>
                        <button className={styles.buttonAddToCart2}>
                          <div className={styles.buttonAddToCartInner} />
                          <div className={styles.div8}>이어서 보기</div>
                        </button>
                      </div>
                      <div className={styles.frameParent8}>
                        <div className={styles.parent4}>
                          <h3 className={styles.h34}>모모</h3>
                          <div className={styles.div9}>
                            <p className={styles.p6}>미하엘 엔데 (글)</p>
                            <p className={styles.p7}>한미희 (번역)</p>
                          </div>
                        </div>
                        <button className={styles.buttonAddToCart3}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.div10}>이어서 보기</div>
                        </button>
                      </div>
                      <div className={styles.searchBar}>
                        <div className={styles.stepsParent}>
                          <div className={styles.div11}>
                            눈과 귀로 읽으러 가기
                          </div>
                          <div className={styles.progressCircle}>
                            <div className={styles.parent5}>
                              <h3 className={styles.h35}>탈무드</h3>
                              <div className={styles.div12}>
                                <p className={styles.p8}>샤이니아 (글)</p>
                                <p className={styles.p9}>홍순도 (번역)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonAddToCartWrapper}>
                        <button className={styles.buttonAddToCart4}>
                          <div className={styles.buttonAddToCartChild1} />
                          <div className={styles.div13}>이어서 보기</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionalBranch;
