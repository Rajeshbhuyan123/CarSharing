import React from 'react'
import styled from "styled-components";
import ActionB from './ActionB';
import InputB from './InputB';

const Start = () => {
  return (
    <ActionItems>
      <ActionB/>
      <InputB/>
    </ActionItems>
  )
}

const ActionItems = styled.div`
  flex: 1;
  padding: 4px;
`;

export default Start