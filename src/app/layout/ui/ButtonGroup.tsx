import { FunctionComponent, PropsWithChildren } from 'react';

interface ButtonGroupProps extends PropsWithChildren {
  end?: boolean;
}
const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({
  children,
  end,
}) => {
  return (
    <div className={`flex gap-4 mt-3 ${end ? 'justify-end' : ''}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;
