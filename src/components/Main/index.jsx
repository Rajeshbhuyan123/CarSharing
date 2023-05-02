import styles from "./styles.module.css";
import styled from "styled-components";
import Map from "../MapF";
import Start from "../Start";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <img
          src="https://cdn.dribbble.com/users/769964/screenshots/2928024/carpool.png"
          alt=""
        />
        <h1>Take Ride</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
        <Profile>
          {/* <Name>Rajesh</Name> */}
          <UserImage src="https://cdn1.vectorstock.com/i/1000x1000/63/15/stylish-young-man-avatar-or-userpic-in-flat-design-vector-17126315.jpg" />
        </Profile>
      </nav>
      <Wrapper>
        <Map />
        <Start />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  /* padding: 0 2rem; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #56ed4c;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
margin: 41px;
width: 20px;
`;

const UserImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-color: gray;
  padding: 12px;
`;

export default Main;
