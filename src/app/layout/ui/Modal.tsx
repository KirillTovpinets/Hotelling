'use client';
import { ModalContext } from '@/app/contexts';
import React, {
  FormEvent,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

interface ModalProps extends PropsWithChildren {
  action: JSX.Element;
  useForm?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Modal: FunctionComponent<ModalProps> = ({
  children,
  action,
  useForm,
  onSubmit,
}) => {
  const { isOpen, toggleState } = useContext(ModalContext);
  if (!isOpen) {
    return null;
  }

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    if (!onSubmit) {
      return;
    }

    await onSubmit(event);
    toggleState();
  };

  const modalActions = (
    <div className="pb-5">
      <ButtonGroup end>
        {action}
        <Button onClick={toggleState}>Отменить</Button>
      </ButtonGroup>
    </div>
  );
  return (
    <div className="absolute top-0 left-0 bg-opacity-50 bg-black h-full w-full flex items-center justify-center">
      <div className="w-1/2 bg-white pt-10 px-10 max-h-3/6 flex flex-col justify-between space-y-10">
        {useForm ? (
          <form onSubmit={handleSubmitForm}>
            {children} {modalActions}
          </form>
        ) : (
          <div>
            {children} {modalActions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
