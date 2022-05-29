import * as React from "react";
import { Menu } from "reakit";
import styled from "styled-components";
import Flex from "~/components/Flex";

type Props = {
  "aria-label": string;
  visible?: boolean;
  unstable_disclosureRef?: React.RefObject<HTMLElement | null>;
  onOpen?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
};

const ContextMenu = ({ children, onOpen, onClose, ...rest }: Props) => {
  if (!rest.visible) {
    return null;
  }
  return (
    <Menu hideOnClickOutside preventBodyScroll {...rest}>
      {(props) => (
        <Position {...props}>
          <Background column>{rest.visible ? children : null}</Background>
        </Position>
      )}
    </Menu>
  );
};

export default ContextMenu;

const Position = styled.div`
  position: absolute;
  z-index: 4000;
`;

const Background = styled(Flex)`
  transform-origin: 50% 100%;
  max-width: 100%;
  border-radius: 6px;
  padding: 6px 0;
  min-width: 180px;
  background: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 2%), 0 4px 8px rgb(0 0 0 / 8%),
    0 2px 4px rgb(0 0 0 / 0%), 0 30px 40px rgb(0 0 0 / 8%);
`;
