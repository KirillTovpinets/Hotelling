import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}
export function FloorSide({ children }: Props) {
  return (
    <div className="flex divide-x border-y border-l border-r">{children}</div>
  );
}
