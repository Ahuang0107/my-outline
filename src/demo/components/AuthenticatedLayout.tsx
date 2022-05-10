import * as React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthenticatedLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default AuthenticatedLayout;
