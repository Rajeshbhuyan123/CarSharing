import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <Wrapper>
      <InputContainer>
        <FromToIcons>
          <div>
            <Circle src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEX8/vz///8pKikAAAAtLS2Oj47hKWeDAAABEElEQVR4nO3PBxEDMRAAMZcLf8p5GuuRGGjdO+dhc9f97afNmr1ets86hm2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2Gfd9w9ttm3Tkvm/sHIDIKk6RLvD4AAAAASUVORK5CYII=" />
          </div>
          <Line src="https://www.pngall.com/wp-content/uploads/5/Vertical-Line.png" />
          <div>
            <Square src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUAAAABAQF9fX2ZmZmsrKyLi4u2trYHBwd5eXm0tLSdnZ2Dg4OJiYmoqKiRkZGNjY36+vr09PTk5OTW1tbMzMzExMS9vb1qampjY2NpaWk2P5IbAAACsklEQVR4nO3djXKaQBSG4bMYWFTU1sakvf8b7fIjYjqthOqY7+z7jjNBg2EfEIwjMfbt+/HH6+upqtbrl91uM7TaH8oyXboOZbMtirpY1LYp/1W7mP1qs7rZ5mVO62rS27o67Y62Md+9W2UxWrAwKd0+TpwLi7q5/PN8w5zXX66ufmKhw9fYXqyxXRLGePmmTeaZDGPJ6ptzv2VrbrYwWp2EwUbhZCYL/z+K/r63jDZr9c1b3tW12N5S2Kr12QfifR6lZ8Htcd+J+GG22N5QpCNNq41/LvRTI/3bmGaMbM52nr28MPlhvatO23DJ4CUK50fp3dbhVwuhfgj1y0bYPR/6fL4YtyFC2QbhPguh00PNICzdCxv3wnLxS/gvH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1C8bYdNNPnswD2kQbs27sDhP+usi9LojDsLa/TukdX/a87NH84guQvN9Lob//bBweyhF6CCE+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1m75D6v2dGYSqIdQPoX7jOVFe3+TO57w2hMIh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUL9shIcshL7/Hr80p1tw+vk0XonjNvR+9uXe3G7EQdj9Z7kMhC6JF6FTIEIHIdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1C/bIQb98IXt0CEDkKoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfpkJXRonQt+f/OFfuDavu2E+wioLoVPjldAlcSp0fSxFKBxC/RDqN/7WFmOw+OzRPKB+w9VpG/bT7rLYqjph8CkM0UJC9q8tfD5KbRCeLO2ISfjsNf6AYnuk2abX+L57t+PPpq63hcM61a+339l2GAd91T5eAAAAAElFTkSuQmCC" />
          </div>
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Enter destination"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViHM0weG4WzLtaFnYbfLXD-dbI6WYCnMMRGCnPI8&s" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" />
        Saved places
      </SavedPlaces>
      <Link
        to="/confirmb"
        state={{ pickup: pickup, dropoff: dropoff }}
        // to={{
        //   pathname: "/confirmb",
        //   state: {
        //     pickup: pickup,
        //     dropoff: dropoff,
        //     // stateParam: true,
        //   },
        // }}
      >
        <ConFirmB>Confirm Location</ConFirmB>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #83ef70;
  height: 1070px;
`;

const InputContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  background-color: #eaf210;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FromToIcons = styled.div`
  align-items: center;
`;

const Circle = styled.img`
  height: 20.5px;
`;

const Line = styled.img`
  height: 30px;
`;

const Square = styled.img`
  height: 30px;
`;

const InputBoxes = styled.div`
  padding-left: 5px;
  padding-top: 5px;
`;

const Input = styled.input`
  height: 70px;
  width: 900px;
  border-radius: 20px;
  margin-top: 5px;
  padding-bottom: 20px;
  display: flex;
  font-size: 40px;
  outline: none;
`;

const PlusIcon = styled.img`
  width: 100pxp;
  height: 100px;
  margin-left: 4px;
  margin-top: 5px;
`;

const SavedPlaces = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  background-color: #dbec19;
  padding-left: 7px;
  padding-top: 17px;
  padding-bottom: 17px;
  margin-top: 20px;
`;

const StarIcon = styled.img`
  background-color: #efeded;
  width: 50px;
  height: 50px;
  padding: 20px;
  margin: 2px;
`;

const ConFirmB = styled.div`
  color: white;
  background-color: black;
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 60px;
  font-size: 50px;
  text-align: center;
  cursor: pointer;
`;

export default Search;
