import { getBedCollection } from '@/api/HotellingApi';
import { NUMBER_OF_BEDS_IN_BLOCK } from '@/constants';
import { FunctionComponent, Suspense } from 'react';
import { Block } from '../block';
import BlockSide from '../blockSide';
import { FloorSide } from '../floorSide';

interface FloorProps {
  params: { id: string };
}

const Floor: FunctionComponent<FloorProps> = async ({ params }) => {
  const beds = await getBedCollection(params.id);
  const id = parseInt(params.id);
  const numberOfBlock = beds.length / NUMBER_OF_BEDS_IN_BLOCK / 2;

  const getSideBlocks = (sideIndex: number): JSX.Element[] => {
    const blocks: JSX.Element[] = [];
    for (let i = 0; i < numberOfBlock; i++) {
      const index = (i + 1) * sideIndex + (id - 1) * 10;
      blocks.push(
        <Block key={i}>
          <BlockSide
            beds={beds.filter(
              (bed) => bed.room === 'A' && bed.segment === index
            )}
            room="A"
          />
          <span className="text-center block basis-5">{index}</span>
          <BlockSide
            beds={beds.filter(
              (bed) => bed.room === 'B' && bed.segment === index
            )}
            room="B"
          />
        </Block>
      );
    }
    return blocks;
  };

  return (
    <div className="space-y-10 mt-5">
      <Suspense fallback={<div>...Loading</div>}>
        <FloorSide>{getSideBlocks(1)}</FloorSide>
        <FloorSide>{getSideBlocks(2)}</FloorSide>
      </Suspense>
    </div>
  );
};

export default Floor;
