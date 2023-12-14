import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: black;
  border: none;
  border-radius: 40%;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    border: solid 2px black;
  }
`;

export const StyledBtnBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
