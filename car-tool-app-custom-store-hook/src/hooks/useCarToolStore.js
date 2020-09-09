import { useState } from 'react';
import { useList } from './useList';

export function useCarToolStore(initialCars) {

  const [
    cars, appendCar, replaceCar, removeCar,
  ] = useList(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = (carId) => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
  };

}
