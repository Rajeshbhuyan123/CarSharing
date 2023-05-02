import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carlist } from "./cars/Carlist.jsx";

const RideSelector = ({pickupCordinates, dropoffCordinates}) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCordinates[0]},${pickupCordinates[1]};${dropoffCordinates[0]},${dropoffCordinates[1]}?access_token=pk.eyJ1IjoicmFqZXNoYmh1eWFuIiwiYSI6ImNsYXo2NmZ5eDBqdXYzb21veDdzeHl0N3oifQ.1FLylXhLiVDAg2635dv0Tw`
    ).then(res => res.json()).then(data => {
      setRideDuration(data.routes[0].duration / 100)
    });
  }, [pickupCordinates, dropoffCordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride</Title>
      <CarList>
        {Carlist.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"₹" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  background-color: rgb(208, 225, 53);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #403e3e;
  text-align: center;
  padding-top: 5px;
  border-bottom: 1px solid gray;
`;

const CarList = styled.div``;

const Car = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

const CarImage = styled.img`
  height: 150px;
  width: 150px;
`;

const CarDetails = styled.div`
  flex: 1;
`;

const Service = styled.div`
  font-size: 30px;
  padding-left: 50px;
`;

const Time = styled.div`
  font-size: 20px;
  padding-left: 50px;
  color: blue;
`;

const Price = styled.div`
  font-size: 30px;
`;

export default RideSelector;
