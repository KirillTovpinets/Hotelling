import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  index: number;
  value: number;
}
export function TabPannel({ index, value, children }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {children}
    </div>
  );
}
