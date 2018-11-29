import React, { Component } from 'react';
import Header from './Header';
import Page from './Page';
import Buttons from './Buttons';
import Table from './Table';
import { steps } from '../data';


class App extends Component {
  state = {
    steps,
    step: 0,
    make: '',
    model: '',
    transmission: '',
    fuelType: '',
    cars: [],
  }

  back = () => {
    if (this.state.step === 1) {
      this.setState({ model: '' });
    }

    this.setState({ step: this.state.step - 1 });
  }

  continue = () => {
    this.setState({ step: this.state.step + 1 });
  }

  addCar = () => {
    this.setState({
      cars: [...this.state.cars, {
        make: this.state.make,
        model: this.state.model,
        transmission: this.state.transmission,
        fuelType: this.state.fuelType,
      }]
    });
    this.reset();
  }

  reset = () => {
    this.setState({
      step: 0,
      make: '',
      model: '',
      transmission: '',
      fuelType: '',
    });
  }

  changeMake = (e) => {
    this.setState({ make: e.target.innerText });
  }

  changeModel = (e) => {
    this.setState({ model: e.target.innerText });
  }

  changeTransmission = (e) => {
    this.setState({ transmission: e.target.innerText });
  }

  changeFuelType = (e) => {
    this.setState({ fuelType: e.target.innerText });
  }

  render() {
    const { step, steps, cars } = this.state;

    return (
      <>
        <Header />
        { steps.map((item, index) => step === steps.indexOf(item) && <Page
          key={ index }
          item={ item }
          state={ this.state }
          onChangeMake={ this.changeMake }
          onChangeModel={ this.changeModel }
          onChangeTransmission={ this.changeTransmission }
          onChangeFuelType={ this.changeFuelType }
        />
        ) }
        <Buttons
          state={ this.state }
          onBack={ this.back }
          onContinue={ this.continue }
          onAdd={ this.addCar }
          onReset={ this.reset }
        />
        { !!cars.length && <Table state={ this.state } /> }
      </>
    );
  }
}

export default App;