import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : "",
  };
}

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
            <NavLink style={getLinkStyle} to="/courses">
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyle} to="questions">
              커뮤니티
            </NavLink>
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
