import * as React from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { AuthStore } from "~/stores/AuthStore";
import Fade from "~/components/Fade";
import Flex from "~/components/Flex";
import OutlineLogo from "~/components/OutlineLogo";
import Heading from "~/components/Heading";

interface PropsType {
  authStore?: AuthStore;
}

function Login(props: PropsType) {
  const { authStore } = props;
  if (authStore.authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <Background>
      <Centered align="center" justify="center" column auto>
        <Logo>
          <OutlineLogo size={38} fill="currentColor" />
        </Logo>
        <Heading centered>Login to Outline</Heading>
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

export default inject("authStore")(observer(Login));
