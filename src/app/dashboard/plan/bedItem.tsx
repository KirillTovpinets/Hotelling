'use client';
import { ModalContext } from '@/app/contexts';
import classNames from 'classnames';
import { useContext } from 'react';

interface Props {
  id: number;
  index: number;
  isBusy: boolean;
}
export function BedItem({ index, isBusy, id }: Props) {
  const { toggleState: openModalHandler } = useContext(ModalContext);

  return (
    <button
      className={classNames(
        'p-4 border-solid border border-gray-300 rounded-md hover:bg-orange-300 cursor-pointer',
        { 'bg-blue-300': isBusy }
      )}
      onClick={() => openModalHandler(id)}
    >
      {index}
    </button>
  );
}
