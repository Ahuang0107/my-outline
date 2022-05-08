import * as React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import Flex from "~/components/Flex";
import Show from "~/components/Show";
import Button from "~/components/Button";

const Layout: React.FC = () => (
  <Container column auto>
    <Container auto>
      <Show />
      <Button />
    </Container>
  </Container>
);

const Container = styled(Flex)`
  background: palegreen;
  position: relative;
  width: 100%;
  min-height: 100%;
`;

export default observer(Layout);
