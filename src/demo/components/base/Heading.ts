import styled from "styled-components";
import { CSSProperties } from "react";

const Heading = styled.h1<{ textAlign?: CSSProperties["textAlign"] }>`
  display: flex;
  align-items: center;
  user-select: none;
  text-align: ${({ textAlign }) => textAlign ?? ""};
`;

export default Heading;
