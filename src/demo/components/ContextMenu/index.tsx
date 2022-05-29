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
          <Background>{rest.visible ? children : null}</Background>
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
  border-radius: 6px;
  padding: 6px 0;
  background: wheat;
`;
