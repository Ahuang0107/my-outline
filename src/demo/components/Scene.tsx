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
    <Container>
      <Content>{children}</Content>
    </Container>
  </FillWidth>
);

const FillWidth = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  padding: 60px 12px;
`;

const Content = styled.div`
  max-width: 46em;
  margin: 0 auto;
`;

export default Scene;
