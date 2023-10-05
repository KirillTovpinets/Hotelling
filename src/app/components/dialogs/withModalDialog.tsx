'use client';

import { ModalContext } from '@/app/contexts';
import ResidentInfoModal from '@/app/dashboard/plan/residentInfoModal';
import { FunctionComponent, PropsWithChildren, useState } from 'react';

const WithModalDialog: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const toggleState = (data: any) => {
    setData(data);
    setIsOpen(!isOpen);
  };
  return (
    <ModalContext.Provider value={{ isOpen, toggleState, data }}>
      <ResidentInfoModal selectedBedId={data} />
      {children}
    </ModalContext.Provider>
  );
};

export default WithModalDialog;
