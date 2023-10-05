import { BedResidence } from '@/interfaces';
import { createContext } from 'react';

interface ModalState {
  isOpen: boolean;
  toggleState: (data?: any) => void;
  data?: any;
}
export const ModalContext = createContext<ModalState>({
  isOpen: false,
  toggleState: () => {},
});

export const ResidenceContext = createContext<BedResidence[]>([]);
