import React from 'react';


const Buttons = (props) => {
  const { step, steps, make, model, transmission, fuelType } = props.state;

  const isNextButtonDesabled = () => {
    return (step === 0 && make === '') || (step === 1 && model === '') || (step === 2 && transmission === '') || (step === 3 && fuelType === '');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex">
            { step > 0 && <button className="btn btn-light mr-2" onClick={ props.onBack }>Back</button> }
            { step !== steps.length - 1 && <button className="btn btn-primary mr-2" onClick={ props.onContinue } disabled={ isNextButtonDesabled() }>Continue</button> }
            { step === steps.length - 1 && <>
              <button className="btn btn-success mr-2" onClick={ props.onAdd } disabled={ isNextButtonDesabled() }>Add</button>
              <button className="btn btn-danger" onClick={ props.onReset }>Reset</button>
            </> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons;