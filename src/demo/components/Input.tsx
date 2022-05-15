import * as React from "react";
import { action, makeObservable, observable } from "mobx";
import styled from "styled-components";
import { observer } from "mobx-react";
import Flex from "~/components/Flex";

type Props = {
  icon?: React.ReactNode;
};

class Input extends React.Component<Props> {
  // eslint-disable-next-line react/no-unused-class-component-methods
  focused: boolean = false;

  constructor(props) {
    super(props);
    makeObservable(this, {
      focused: observable,
      handleBlur: action,
      handleFocus: action,
    });
  }

  handleBlur = () => {
    // eslint-disable-next-line react/no-unused-class-component-methods
    this.focused = false;
  };

  handleFocus = () => {
    // eslint-disable-next-line react/no-unused-class-component-methods
    this.focused = true;
  };

  render() {
    const { icon } = this.props;
    return (
      <Wrapper>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <Outline focused={this.focused}>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            <RealInput
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              placeholder="Search..."
            />
          </Outline>
        </label>
      </Wrapper>
    );
  }
}

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
