import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Map from "./MapF";
import { useLocation, Link } from "react-router-dom";
import RideSelector from "./RideSelector";

const ConfirmP = () => {
  const location = useLocation();
  const { pickup, dropoff } = location.state;
  // const dropoff = location.state;

  console.log("Pickup is ", pickup);
  console.log("Dropoff is ", dropoff);

  // const {type} = useParams();
  // const stateParamVal = useLocation().state.stateParam;
  // console.log(type);
  // console.log(stateParamVal);

  const [pickupCordinates, setPickupCordinates] = useState([0, 0]);
  const [dropoffCordinates, setDropoffCordinates] = useState([0, 0]);

  const getPickupCordinate = (pickup) => {
    // const pickup = "Buguda";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicmFqZXNoYmh1eWFuIiwiYSI6ImNsYXo2NmZ5eDBqdXYzb21veDdzeHl0N3oifQ.1FLylXhLiVDAg2635dv0Tw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCordinates(data.features[0].center);
      });
  };

  const getDropoffCordinate = (dropoff) => {
    // const dropoff = "Berhampur";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicmFqZXNoYmh1eWFuIiwiYSI6ImNsYXo2NmZ5eDBqdXYzb21veDdzeHl0N3oifQ.1FLylXhLiVDAg2635dv0Tw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setDropoffCordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCordinate(pickup);
    getDropoffCordinate(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCordinates={pickupCordinates}
        dropoffCordinates={dropoffCordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCordinates={pickupCordinates}
          dropoffCordinates={dropoffCordinates}
        />
        <ConfirmButtonContainer>
          <Link to="/page">
          <ConfirmButton>Confirm</ConfirmButton>
          </Link>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
  margin-bottom: 20px;
  /* margin-top: 20px; */
  height: 1050px;
  flex-direction: column;
`;

const RideContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 50%;
`;

const ConfirmButtonContainer = styled.div`
  /* background-color: black;
  color: white;
  font-size: 50px; */
`;

const ConfirmButton = styled.div`
  background-color: black;
  color: white;
  font-size: 50px;
  margin-top: 10px;
  margin-left: 70px;
  margin-right: 70px;
  border-radius: 20px;
  text-align: center;
`;

export default ConfirmP;
