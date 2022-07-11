import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import { m } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  to: string;
  exact?: boolean; // 用于精准匹配，比如home页存在/home和/home/react同时作为tab项的情况，大部分情况应该做精准匹配，遇到有些带路由参数的再改模糊匹配
};

const Tab = ({ children, to, exact = false }: Props) => {
  const activeStyle = {
    color: "#394351",
  };
  return (
    <Route path={to} exact={exact}>
      {({ match }) => (
        <TabLink to={to} exact={exact} activeStyle={activeStyle}>
          {children}
          {match && (
            <Active
              layoutId="underline"
              initial={false}
              transition={transition}
            />
          )}
        </TabLink>
      )}
    </Route>
  );
};

const TabLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  margin-right: 24px;
  padding: 6px 0;
  color: #9ba6b2;
  text-decoration: none;

  display: inline-flex;

  :hover {
    color: #394351;
  }
`;

const Active = styled(m.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  width: 100%;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  background: #394351;
`;

const transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export default Tab;
