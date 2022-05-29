import * as React from "react";
import { MenuButton, useMenuState } from "reakit";
import styled from "styled-components";
import Button from "~/components/Button";
import ContextMenu from "~/components/ContextMenu";
import Template from "~/components/ContextMenu/Template";
import { MenuItemDto } from "~/types";

const NewDocumentMenu = () => {
  const menu = useMenuState({
    modal: true,
  });
  const items: MenuItemDto[] = ["Collection-01", "Collection-02"].map(
    (item) => ({
      title: <CollectionName>{item}</CollectionName>,
    })
  );
  return (
    <>
      <MenuButton {...menu}>
        {(props) => <Button {...props}>New doc…</Button>}
      </MenuButton>
      <ContextMenu {...menu} aria-label="New Document">
        <Header>Choose a collection</Header>
        <Template {...menu} items={items} />
      </ContextMenu>
    </>
  );
};

export default NewDocumentMenu;

const Header = styled.h3`
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(78, 92, 110);
  letter-spacing: 0.04em;
  margin: 1em 12px 0.5em;
`;

const CollectionName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
