import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}
export function Block({ children }: Props) {
  return (
    <div className="flex w-1/5 gap-4 items-center justify-between">
      {children}
    </div>
  );
}
