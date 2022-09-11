import { Link } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

// Link 컴포넌트에서는 to 라는 Prop을 사용한다.
function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/courses">카탈로그</Link>
          </li>
          <li>
            <Link to="questions">커뮤니티</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
