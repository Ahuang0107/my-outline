import * as React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useState } from "react";
import Flex from "~/components/base/Flex";

type Props = {
  icon?: React.ReactNode;
  placeholder?: string;
};

const Input = ({ icon, ...rest }: Props) => {
  const [focused, setFocused] = useState(false);
  return (
    <Wrapper>
      <Outline focused={focused}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <RealInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          {...rest}
        />
      </Outline>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  width: 49%;
  max-width: 350px;
`;

const Outline = styled(Flex)<{
  focused?: boolean;
}>`
  flex: 1;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.focused ? "#98a6b2" : "#DAE1E9")};
  border-radius: 15px;
  align-items: center;
`;

const IconWrapper = styled.span`
  position: relative;
  left: 4px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RealInput = styled.input`
  border: 0;
  outline: none;
  background: none;

  padding: 8px 12px 8px 8px;
  height: 30px;
`;

export default observer(Input);
