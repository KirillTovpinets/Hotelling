import { FloorResidenceResponse } from '@/interfaces';
import { FunctionComponent } from 'react';
import { BedItem } from './bedItem';

interface BlockSideProps {
  beds: FloorResidenceResponse;
  room: string;
}

const BlockSide: FunctionComponent<BlockSideProps> = ({ beds = [], room }) => {
  return (
    <div
      className={`flex justify-between p-3 flex-wrap gap-4 ${
        room === 'A' ? 'basis-min' : 'basis-36'
      }`}
    >
      {beds.map((bed) => (
        <BedItem
          key={bed.id}
          index={bed.bed}
          id={bed.id}
          residentId={bed.residence[0]?.visitorId}
          isBusy={bed.residence.length !== 0}
        />
      ))}
    </div>
  );
};

export default BlockSide;
