import FrameComponent20 from "../components/FrameComponent20";
import styles from "./Frame.module.css";

//book Frame
const Frame = () => {
  return (
    <div className={styles.div}>
      <FrameComponent20 />
      <main className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.ultimateParent}>
            <h3 className={styles.ultimateContainer}>
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
              <p className={styles.p4}>
                둘째, 현대 세계의 형성 과정에 특별히 관심을 갖는 사람들에게도
                문자 탄생 이후만 다룬 역사는 그 과정을 깊이 이해하는 데 별
                도움이 되지 않는다. 각기 다른 대륙에 있던 사회들은 기원전
                3000년경까지는 서로 비교할 만한 여지가 없었다. 그 이후
                서유라시아 사회가 갑자기 문자를 개발해냈고, 그때부터 처음으로
                다른 면에서도 앞서가기 시작했다. 기원전 3000년경 유라시아와
                북아프리카에는 이미 초기 형태의 문자를 보유하고, 중앙집권화한
                국가와 도시를 형성하고, 금속연장과 금속 무기를 폭넓게 사용하고,
                운송과 견인 등 기계력이 필요한 곳에 가축을 활용하고, 농업과
                가축을 식량 생산에 활용하는 사회가 있었다. 하지만 이즈음 다른
                대륙에는 이런 도구 등을 쓰는 곳이 전혀 없었다. 나중에야
                남북아메리카와
              </p>
            </h3>
            <div className={styles.thoughtBubble} />
          </div>
        </div>
        <img
          className={styles.image13Icon}
          loading="lazy"
          alt=""
          src="/image-131@2x.png"
        />
      </main>
    </div>
  );
};

export default Frame;
