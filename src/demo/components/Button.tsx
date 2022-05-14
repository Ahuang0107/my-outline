import * as React from "react";
import styled from "styled-components";

type Props = {
  label?: string;
};

function Button(props: Props) {
  const { label } = props;
  return (
    <RealButton>
      <ButtonInner>
        <ButtonLabel>{label ?? "Button"}</ButtonLabel>
      </ButtonInner>
    </RealButton>
  );
}

const ButtonLabel = styled.span``;

const ButtonInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
`;

const RealButton = styled.button`
  height: 40px;

  background: #0366d6;

  &:hover {
    background: #035abd;
  }
`;

export default Button;
