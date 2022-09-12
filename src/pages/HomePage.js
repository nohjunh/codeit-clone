import { Helmet } from "react-helmet";
import Button from "../components/Button";
import Container from "../components/Container";
import Lined from "../components/Lined";
import styles from "./HomePage.module.css";
import landingImg from "../assets/landing.svg";

function HomePage() {
  return (
    // npm install --save react-helmet 해서 헬멧으로 title명 바꾸기 기능 추가
    <>
      <Helmet>
        <title>Codethat - 메인 홈페이지</title>
      </Helmet>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <Lined>코딩이 처음이라면,</Lined>
            <br />
            <strong>코드댓</strong>
          </h1>
          <p className={styles.description}>
            11만 명이 넘는 비전공자, 코딩 입문자가 코드댓 무제한 멤버십을
            선택했어요.
            <br />
            지금 함께 시작해보실래요?
          </p>
          <div>
            <Button>지금 시작하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
