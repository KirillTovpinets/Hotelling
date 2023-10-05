import { FunctionComponent, PropsWithChildren } from 'react';

const Flex: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="flex gap-5">{children}</div>;
};

export default Flex;
