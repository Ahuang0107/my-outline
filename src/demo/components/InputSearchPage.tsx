import * as React from "react";
import Input from "~/components/Input";
import SearchIcon from "~/components/icon/SearchIcon";

type Props = {
  children?: React.ReactNode;
};

const InputSearchPage = ({ children }: Props) => (
  <Input icon={<SearchIcon size={16} />}>{children}</Input>
);

export default InputSearchPage;
