import * as React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};

const Tabs = ({ children }: Props) => (
  <AnimateSharedLayout>
    <Nav>{children}</Nav>
  </AnimateSharedLayout>
);

const Nav = styled.nav`
  border-bottom: 1px solid #dae1e9;
  margin: 12px 0;
`;

export default Tabs;
