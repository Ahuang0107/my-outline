import styled from "styled-components";
import Flex from "~/components/Flex";

export const Action = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 0 0 0 12px;
  height: 32px;
  font-size: 15px;
  flex-shrink: 0;

  &:empty {
    display: none;
  }
`;
