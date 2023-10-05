import WithModalDialog from '@/app/components/dialogs/withModalDialog';
import ButtonGroup from '@/app/layout/ui/ButtonGroup';
import { FLOORS } from '@/constants';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function Plan({ children }: PropsWithChildren) {
  return (
    <WithModalDialog>
      <ButtonGroup>
        {FLOORS.map((_, index) => (
          <Link
            key={index}
            href={`${index + 1}`}
            className="bg-yellow-300 rounded-md px-3 py-1"
          >
            {'Этаж ' + (index + 1)}
          </Link>
        ))}
      </ButtonGroup>
      {children}
    </WithModalDialog>
  );
}
