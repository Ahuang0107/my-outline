import * as React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";
import styled from "styled-components";
import Fade from "~/components/Fade";
import Flex from "~/components/base/Flex";
import OutlineLogo from "~/components/OutlineLogo";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import useStores from "~/hooks/useStores";

function Login() {
  const { authStore } = useStores();
  if (authStore.authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <Background>
      <Centered align="center" justify="center" column auto>
        <Logo>
          <OutlineLogo size={38} fill="currentColor" />
        </Logo>
        <br />
        <Heading centered>Login to Outline</Heading>
        <Button onClick={authStore.rehydrate}>Continue Automatically</Button>
      </Centered>
    </Background>
  );
}

const Background = styled(Fade)`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  display: flex;
`;

const Centered = styled(Flex)`
  user-select: none;
  width: 90vw;
  height: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

const Logo = styled.div`
  margin-bottom: -1.5em;
  height: 38px;
`;

export default observer(Login);
