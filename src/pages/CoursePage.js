import { addWishlist, getCourseBySlug } from "../api";
import Button from "../components/Button";
import Container from "../components/Container";
import Card from "../components/Card";
import CourseIcon from "../components/CourseIcon";
import getCourseColor from "../utils/getCourseColor";
import styles from "./CoursePage.module.css";
import { Navigate, useParams } from "react-router-dom";

function CoursePage() {
  // 리액트 라우터 dom 에서 제공하는 커스텀 훅인 useParams()
  // useParams()가 리턴하는 객체에는 현재 경로의 파라미터들이 저장되어 있다.
  // 이 객체에 우리가 정의한 courseSlug라는 값도 저장되어 있기에 디스트럭처링으로 courseSlug값을 가져온다.
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug); // course 변수
  const courseColor = getCourseColor(course?.code);
  // CoursePage를 렌더링할 때 courseSlug값에 해당하는 course를 찾을 수 없으면
  // course의 값이 없다면 "/courses"로 가는 경로의 Navigate 컴포넌트를 리턴
  // 이 컴포넌트를 렌더링하면 리액트 라우터는 to Prop에 지정된 경로로 이동시킴
  if (!course) {
    return <Navigate to="/courses" />;
  }

  const headerStyle = {
    borderTopColor: courseColor,
  };

  const handleAddWishlistClick = () => {
    addWishlist(course?.slug);
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
