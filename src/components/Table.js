import React from 'react';


const Table = (props) => {
  const { cars } = props.state;

  return (
    <div className="mt-4 container table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Transmission</th>
            <th>Fuel type</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => <tr key={index}>
            <td>{index + 1}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.transmission}</td>
            <td>{car.fuelType}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table;