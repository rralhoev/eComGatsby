import React from "react"
import styled from "styled-components"

interface InputProps {
  width?: string
}

export const Input:React.FC<InputProps> = ({width= ''}) => {
  const [value, setValue] = React.useState('');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <InputContainer
      width={width}
      value={value}
      onChange={onChange}
    />
  )
}

const InputContainer = styled.input<InputProps>`
  outline: none;
  border: none;
  padding: 5px 20px;
  width: ${({width}) => !width ? '100%' : width};
  height: 100%;
  color: #000000;
  font-family: 'Montserrat-Medium', sans-serif;
  background-color: transparent;
`
