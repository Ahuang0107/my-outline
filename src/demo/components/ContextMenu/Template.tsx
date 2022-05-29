import * as React from "react";
import { MenuItem } from "reakit";
import styled from "styled-components";
import { MenuItemDto } from "~/types";

type Props = {
  items?: MenuItemDto[];
};

const Template = ({ items, ...menu }: Props) => (
  <>
    {items.map((item) => (
      <MenuItem {...menu}>
        {(props) => <MenuAnchor {...props}>{item.title}</MenuAnchor>}
      </MenuItem>
    ))}
  </>
);

export const MenuAnchor = styled.a`
  display: flex;
  margin: 0;
  border: 0;
  padding: 12px;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  cursor: default;
  user-select: none;
  white-space: nowrap;
  position: relative;
  &:hover,
  &:focus,
  &.focus-visible {
    color: white;
    background: #0366d6;
    box-shadow: none;
    cursor: pointer;
  }
`;

export default Template;
