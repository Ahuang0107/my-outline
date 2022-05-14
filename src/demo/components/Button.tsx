import * as React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick = () => {} }: Props) => (
  <RealButton onClick={onClick}>
    <ButtonInner>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonInner>
  </RealButton>
);

const ButtonLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
  min-height: 32px;
`;

const RealButton = styled.button`
  display: block;
  width: 250px;
  margin: 0;
  padding: 0;
  border: 0;

  background: #0366d6;
  color: #fff;

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  text-decoration: none;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  appearance: none !important;

  &:hover {
    background: #035abd;
  }
`;

export default Button;
