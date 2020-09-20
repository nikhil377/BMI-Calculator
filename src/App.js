import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import BmiType1 from './BmiType1';
import BmiType2 from './BmiType2';
class App extends React.Component {
  state={
    status: 1
  }
  radioHandler = (status) => {
    this.setState({status});
  }
  render(){
  return (
    <div className="App">
       <h1 className="bmi-title">Body Mass Index(BMI)Calculator</h1>
       <input
              className="radio-button"
              type="radio"
              name="release"
              checked={this.state.status === 1}
              onClick={(e) => this.radioHandler(1)}
             />&nbsp; Standard &nbsp; &nbsp;
            <input
              className="radio-button"
              type="radio"
              name="release"
              checked={this.state.status === 2}
              onClick={(e) => this.radioHandler(2)}
            /> &nbsp;Metric
            {this.state.status === 1 && <BmiType1/>}
            {this.state.status === 2 && <BmiType2/>}
  </div>
  );
}
}
export default App;
