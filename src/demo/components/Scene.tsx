import * as React from "react";
import styled from "styled-components";
import Header from "~/components/Header";

type Props = {
  children?: React.ReactNode;
  actions?: React.ReactNode;
};

const Scene = ({ children, actions }: Props) => (
  <FillWidth>
    <Header actions={actions} />
    {children}
  </FillWidth>
);

const FillWidth = styled.div`
  width: 100%;
`;

export default Scene;
