import { useContext } from 'react';
import { HotelContext } from '~/context/hotel-context';

export function useHotel() {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotel debe usarse dentro de un HotelProvider');
  }
  return context;
} 