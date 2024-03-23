import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Onoff from "../components/Onoff";
import styles from "./Frame1.module.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onAITextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <header className={styles.item} />
      <div className={styles.heartActiveParent}>
        <img className={styles.heartActive} loading="lazy" alt="" />
        <img className={styles.userIcon} loading="lazy" alt="" />
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart1.svg"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.aiWrapper}>
              <div className={styles.ai} onClick={onAITextClick}>
                AI 도서관
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.lineParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.weLoveBooks}>We love books</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div1}>현재 도서: 총 균 쇠</div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.aiContainer}>
                    <div className={styles.ai1}>AI 음악</div>
                  </div>
                  <div className={styles.onoff}>
                    <div className={styles.onoffChild} />
                    <div className={styles.onoffItem} />
                    <div className={styles.on}>on</div>
                    <div className={styles.offWrapper}>
                      <div className={styles.off}>off</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.aiFrame}>
                    <div className={styles.ai2}>AI 이미지</div>
                  </div>
                  <Onoff />
                </div>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <input
                className={styles.frameItem}
                placeholder="AI에게 줄거리 물어보기"
                type="text"
              />
              <div className={styles.searchWrapper}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search1.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-19.svg"
                />
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div2}>3</div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.frameChild1} />
              </div>
              <img className={styles.userIcon1} alt="" src="/user.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inner} />
      <main className={styles.frameMain}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.ultimateParent}>
            <h1 className={styles.ultimateContainer}>
              <p className={styles.p}>서문</p>
              <p className={styles.p1}>왜 세계 역사는 양파와 같은가?</p>
              <p className={styles.ultimate}>
                이 책은 지난 1만 3,000년 동안 인류가 겪은 역사를 간략하게
                되짚어보려는 시도이다. 이 책을 쓰게 된 동기는 하나의 의문에서
                비롯되었다. “왜 역사는 대륙마다 다르게 전개되었는가?” 이 질문을
                보는 순간 인종차별적인 글을 읽게 되리라는 생각에 몸서리를 쳤다면
                착각한 것이다. 뒤에서 살펴보겠지만, 이 질문에 대한 대답은 인간의
                인종적 차이와 전혀 관계가 없다. 이 책의 주안점은
                궁극적인 ultimate 답을 추적하고 역사적 인과관계의 사슬을
                최대치까지 되돌려보는 데 있다.
              </p>
              <p className={styles.p2}>
                세계 역사를 이야기하겠다고 나서는 책들은 대체로 문자를 가지고
                있던 유라시아와 북아프리카 사회에 초점을 둔다. 그 밖의 지역,
                예컨대 사하라 이남 아프리카, 남북아메리카, 해양 동남아시아,
                오스트레일리아, 뉴기니, 태평양 제도 諸島 등의 원주민 사회는
                간략하게만 언급한다. 그것도 서유럽인이 발견하고 예속시킨 뒤의
                사건, 즉 그들의 역사에서 뒤늦게 닥친 사건을 주로 다룬다.
                유라시아의 역사 또한 중국, 인도, 일본, 열대 동남아시아 및
                유라시아 동쪽 지역의 사회보다 서쪽 지역 사회의 역사에 훨씬 많은
                지면을 할애한다. 기원전 3000년경 문자가 탄생하기 전의 역사도
                짧게 나오는데, 그 기간은 500만 년에 달하는 인간종의 역사에서
                99.9퍼센트를 차지한다.
              </p>
              <p className={styles.p3}>
                세계 역사를 이렇게 좁은 관점에서 접근하면 세 가지 단점이 생긴다.
                첫째, 당연한 말이지만 오늘날 서유라시아 외에도 다른 사회에
                관심을 기울이는 사람이 점점 늘고 있다. 여하튼 그 ‘다른’ 사회들이
                세계 인구는 물론이고 민족과 문화와 언어 집단의 대부분을
                차지한다. 그중 몇몇 사회는 경제와 정치에서 이미 세계열강의
                반열에 올라섰고, 그 자리를 향해 다가가는 사회도 적지 않다.
              </p>
              <p
                className={styles.p4}
              >{`둘째, 현대 세계의 형성 과정에 특별히 관심을 갖는 사람들에게도 문자 탄생 이후만 다룬 역사는 그 과정을 깊이 이해하는 데 별 도움이 되지 않는다. 각기 다른 대륙에 있던 사회들은 기원전 3000년경까지는 서로 비교할 만한 여지가 없었다. 그 이후 서유라시아 사회가 갑자기 문자를 개발해냈고, 그때부터 처음으로 다른 면에서도 앞서가기 시작했다. 기원전 3000년경 유라시아와 북아프리카에는 이미 초기 형태의 문자를 보유하고, 중앙집권화한 국가와 도시를 형성하고, 금속연장과 금속 무기를 폭넓게 사용하고, 운송과 견인 등 기계력이 필요한 곳에 가축을 활용하고, 농업과 가축을 식량 생산에 활용하는 사회가 있었다. 하지만 이즈음 다른 대륙에는 이런 도구 등을 쓰는 곳이 전혀 없었다. 나중에야 남북아메리카와 `}</p>
            </h1>
            <div className={styles.frameChild2} />
          </div>
        </div>
        <div className={styles.searchInstanceWrapper}>
          <div className={styles.searchInstance}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameChild3} />
              <h1 className={styles.proximateContainer}>
                <p className={styles.p5}>
                  사하라 이남 아프리카의 일부 원주민 사회에서 이런 도구 등이
                  부분적으로 생겨났는데, 그 과정까지 근 5,000년이 걸렸다.
                  오스트레일리아 원주민 사회에서는 이런 도구가 전혀 나타나지
                  않았다. 이런 사실로 미루어 서유라시아가 현대 세계를 지배한
                  데에는 기원전 3000년경 이전, 즉 문자 탄생 이전의 과거에 그
                  원인이 있을 것으로 짐작할 수 있다. 내가 여기서 말하는
                  ‘서유라시아의 지배’는 서유라시아 사회 자체의 지배뿐만 아니라,
                  그들이 다른 대륙에서 형성한 사회들에 대한 지배도 뜻한다.
                </p>
                <p className={styles.p6}>
                  셋째, 서유라시아 사회에 초점을 맞춘 역사는 “서유라시아가
                  압도적으로 강력하고 혁신적인 사회로 성장한 이유는
                  무엇일까?”라는 중대한 질문에 답을 주지 못한다. 이 질문에 대한
                  일반적인 대답은 대략적인 요인, 예컨대 자본주의의 발흥과
                  중상주의, 과학적 탐구와 과학기술, 서유라시아 사람들과 접촉한
                  다른 대륙의 원주민을 죽음으로 몰고 간 지독한 병원균 등이다.
                  그러나 정복에 필요한 그 모든 요인이 서유라시아에서 발달하기
                  시작한 이유는 무엇일까? 그리고 다른 지역에서는 그런 요인이
                  상대적으로 낮게 형성되거나 아예 없었던 이유는 무엇일까?
                </p>
                <p className={styles.proximate}>
                  그 모든 요인은 근접 proximate 요인 에 불과할 뿐 궁극적인
                  설명은 아니다. 왜 자본주의가 멕시코 원주민 사회에서는 꽃피지
                  못했을까? 중상주의가 사하라 이남 아프리카에서, 과학적 탐구가
                  중국에서, 선진 과학기술이 북아메리카 원주민 사회에서, 지독한
                  균이 오스트레일리아 원주민 사회에서 성하지 못한 이유는 대체
                  무엇일까? 그곳의 특유한 문화적 요인을 들먹이며 그 이유에 대해
                  답한다면, 예컨대 중국에서는 유교 때문에 과학적 탐구를
                  억압했지만 서유라시아에서는 그리스와 유대·기독교 전통에 따라
                  과학적 탐구를 권장했다는 식으로 답한다면, 이 역시 궁극적인
                  설명을 여전히 외면한 셈이다. 이 대답은 자연스레 “유교와
                  유대·기독교 같은 전통적 윤리관이 거꾸로 서유라시아와 중국에서
                  발달하지 않은 이유는 무엇일까?”라는 질문으로 이어지기
                  때문이다. 게다가 이 대답은 유교 사회인 중국이 기원후
                  1400년경까지는 서유라시아보다 과학기술에서 앞섰다는 사실을
                  무시한 것이다.
                </p>
                <p className={styles.p7}>
                  서유라시아 사회에만 초점을 맞추면 그 사회 자체를 제대로
                  이해하는 것도 불가능하다. 서유라시아 사회와 다른 지역 사회의
                  차이에 관한 것도 흥미로운 질문이다. 이 질문에 답하려면, 다른
                  지역 사회들에 대한 이해가 필요하다. 그래야 서유라시아 사회를
                  더 넓은 맥락에서 파악할 수 있기 때문이다.
                </p>
                <p
                  className={styles.p8}
                >{`내가 서유라시아에는 지면을 최소한으로 할애하고 그 밖의 세계를 주로 다룸으로써 전통적인 역사와 완전히 반대 방향을 선택할 거라고 생각할 독자가 있을지도 모르겠다. 이런 독자에게는 지리적으로 좁은 지역에 수많은 사회가 무척 `}</p>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Frame1;
