import { useState } from "react";
import { getQuestions } from "../api";
import DateText from "../components/DateText";
import ListPage from "../components/ListPage";
import Warn from "../components/Warn";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import styles from "./QuestionListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { Link, useSearchParams } from "react-router-dom";

function QuestionItem({ question }) {
  return (
    <Card className={styles.questionItem} key={question.title}>
      <div className={styles.info}>
        <p className={styles.title}>
          <Link to={`/questions/4{question.id}`}>{question.title}</Link>
          {question.answers.length > 0 && (
            <span className={styles.count}>[{question.answers.length}]</span>
          )}
        </p>
        <p className={styles.date}>
          <DateText value={question.createdAt} />
        </p>
      </div>
      <div className={styles.writer}>
        <Avatar
          photo={question.writer.profile.photo}
          name={question.writer.name}
        />
      </div>
    </Card>
  );
}

function QuestionListPage() {
  // 리액트 라우터에서는 쿼리 파라미터 값을 가져오고 싶을 때
  // useSearchParams라는 훅을 사용할 수 있다.
  // useState랑 비슷하나, 생성된 state가 객체라는 점이 다름!
  const [searchParams, setSearchParams] = useSearchParams(); // state가 객체로 생성된다. searchParams는 객체!
  const initKeyword = searchParams.get("keyword"); // get함수를 통해 안에있는 값을 가져올 수 있다.
  const [keyword, setKeyword] = useState(initKeyword || "");
  const questions = getQuestions(initKeyword);

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // submit했을때 웹브라우저가 저절로 페이지를 이동하는 것을 방지

    // 원하는 쿼리 파라미터를 객체의 프로퍼티로 넘겨준다.
    setSearchParams(
      keyword
        ? {
            keyword, // keyword값이 없다면 빈 객체 {}가 넘겨질 수 있도록 삼항연산자 구성
          }
        : {}
    ); // 파라미터로 객체를 받는다.
  };

  return (
    <ListPage
      variant="community"
      title="커뮤니티"
      description="코드댓의 2만 수강생들과 함께 공부해봐요."
    >
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          placeholder="검색으로 질문 찾기"
          onChange={handleKeywordChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {questions.length}개 질문</p>

      {initKeyword && questions.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 질문이 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.questionList}>
          {questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default QuestionListPage;
