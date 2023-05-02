import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActionB = () => {
  return (
    <ActionButtons>
      <ActionButton>
        <Link to="/search">
          <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png" />
          <Text>Ride</Text>
        </Link>
      </ActionButton>
      <ActionButton>
        <Link to="/scheduled">
          <ActionButtonImage src="https://img.freepik.com/free-vector/schedule-concept-illustration_114360-1531.jpg?w=2000" />
          <Text>Reserve</Text>
        </Link>
      </ActionButton>
    </ActionButtons>
  );
};

const ActionButtons = styled.div`
  display: flex;
`;

const ActionButton = styled.div`
  display: flex;
  background-color: #c9e81d;
  flex: 1;
  margin: 2px;
  height: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  transition: transform 0.2s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const ActionButtonImage = styled.img`
  height: 300px;
  width: 300px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-left: 110px;
`;

export default ActionB;
