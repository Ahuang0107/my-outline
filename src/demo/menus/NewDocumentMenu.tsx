import * as React from "react";
import { MenuButton, useMenuState } from "reakit";
import styled from "styled-components";
import Button from "~/components/Button";
import ContextMenu from "~/components/ContextMenu";

type Props = {
  children?: React.ReactNode;
};

const NewDocumentMenu = ({ children }: Props) => {
  const menu = useMenuState({
    modal: true,
  });
  return (
    <>
      <MenuButton {...menu}>
        {(props) => <Button {...props}>New doc…</Button>}
      </MenuButton>
      <ContextMenu {...menu} aria-label="New Document">
        <Header>Choose a collection</Header>
      </ContextMenu>
    </>
  );
};

export default NewDocumentMenu;

const Header = styled.h3`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: green;
  letter-spacing: 0.04em;
  margin: 1em 12px 0.5em;
`;
