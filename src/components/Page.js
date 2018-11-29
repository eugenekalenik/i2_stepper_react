import React from 'react';
import { makes, transmissions, fuelTypes } from '../data';


const Page = (props) => {
  const { step, steps, make, model, transmission, fuelType } = props.state;

  const renderMakes = () => {
    return <div className="custom-items">
      { makes.map((item, index) =>
        <button
          key={ index }
          className={ make === item.make ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-light' }
          onClick={ props.onChangeMake }>
          { item.make }
        </button>
      ) }
    </div>
  }

  const renderModels = () => {
    return makes.map((item, index) => {
      if (make === item.make) {
        return <div key={ index } className="custom-items">
          { makes[index].models.map((item, index) =>
            <button
              key={ index }
              className={ model === item ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-light' }
              onClick={ props.onChangeModel }>
              { item }
            </button>
          ) }
        </div>
      }
    })
  }

  const renderTransmissions = () => {
    return <div className="custom-items">
      { transmissions.map((item, index) =>
        <button
          key={ index }
          className={ transmission === item ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-light' }
          onClick={ props.onChangeTransmission }>
          { item }
        </button>
      ) }
    </div>
  }

  const renderFuelTypes = () => {
    return <div className="custom-items">
      { fuelTypes.map((item, index) =>
        <button
          key={ index }
          className={ fuelType === item ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-light' }
          onClick={ props.onChangeFuelType }>
          { item }
        </button>
      ) }
    </div>
  }

  return (
    <div className="container mt-4 mb-4">
      <h4 className="mb-4">{ step + 1 }. { steps[step] }</h4>
      { step === 0 && renderMakes() }
      { step === 1 && renderModels() }
      { step === 2 && renderTransmissions() }
      { step === 3 && renderFuelTypes() }
    </div>
  )
}

export default Page;