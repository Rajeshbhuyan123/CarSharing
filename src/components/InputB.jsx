import React from 'react'
import styled from 'styled-components'

const InputB = () => {
  return (
    <Input>Where to?</Input>
  )
}

const Input = styled.div`
    height: 100px;
    background-color: #adeb10;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 20px;
    font-size: 30px; 
    display: flex;
    align-items: center;
`

export default InputB