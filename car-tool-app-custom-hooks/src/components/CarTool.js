import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export function CarTool({ cars: initialCars }) {

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};