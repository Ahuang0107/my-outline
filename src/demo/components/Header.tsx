import * as React from "react";
import styled from "styled-components";
import Flex from "~/components/Flex";

type Props = {
  actions?: React.ReactNode;
};

const Header = ({ actions }: Props) => (
  <Wrapper>
    <Actions align="center" justify="flex-end">
      {actions}
    </Actions>
  </Wrapper>
);

const Wrapper = styled(Flex)`
  top: 0;
  position: sticky;
  background: white;
  padding: 12px;
  min-height: 64px;
`;

const Actions = styled(Flex)`
  flex-grow: 1;
  flex-basis: 0;
  min-width: auto;
  padding-left: 8px;
`;

export default Header;
