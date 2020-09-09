import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export function CarEditRow(props) {

  const [ carForm, change ] = useForm({
    ...props.car,
  });

  function saveCar() {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  }
  
  return (
    <tr>
    <td>{props.car.id}</td>
    <td>
      <input type="text" name="make"
        value={carForm.make}
        onChange={change} />
    </td>
    <td>
      <input type="text" name="model"
        value={carForm.model}
        onChange={change} />
    </td>
    <td>
      <input type="number" name="year"
        value={carForm.year}
        onChange={change} />
    </td>
    <td>
      <input type="text" name="color"
        value={carForm.color}
        onChange={change} />
    </td>
    <td>
      <input type="number" name="price"
        value={carForm.price}
        onChange={change} />
    </td>
    <td>
      <button type="button"
        onClick={saveCar}>Save</button>
      <button type="button"
        onClick={props.onCancelCar}>Cancel</button>
    </td>
  </tr>
  );

};

CarEditRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};