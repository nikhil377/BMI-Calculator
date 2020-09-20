import React, { Component } from 'react'
import './App.scss';
import {MDBInputGroup,MDBContainer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export class BmiType1 extends Component {
    constructor(props) {
        super(props);
        this.levelCheck= '';
      }
      state={
        result:'',
        height:'',
        weight: '',
        heightInches: '',
        options : {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'BMI Chart'
          },
          xAxis: {
            categories: ['BMI']
          },
          yAxis: {
            min: 0,
             gridLineWidth: 0,
            title: {
              text: ''
            }
          },
          legend: {
            reversed: false
          },
          plotOptions: {
            series: {
              events: {
                legendItemClick: function() {
                  return false;
                }
            },
              stacking: 'normal'
            }
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'value',
            color:'#7a7777',
            data: [22],
              zones: [{
                    value: 18.5,
                    color: '#5cd5f7'
                }, {
                    value: 25,
                    color: '#5cf766'
                },
                {
                    value: 30,
                    color: '#f7a45c'
                },
                {
                    color: '#e60000'
                }]
          }]
        }
      }

    handleHeightChange=(event)=> {
        this.setState({height: event.target.value});
    }
  
    handleWeightChange=(event)=> {
      this.setState({weight: event.target.value});
    }
  
    handleHeightInchesChange=(event)=>{
      if(event.target.value>11){
        alert("enter a value less than 12")
        event.target.value= event.target.value.slice(0,1);
      }    
      this.setState({heightInches: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    findResult=(e)=>{
      e.preventDefault();
      if((this.state.weight != null || undefined) && (this.state.height !=null||undefined) && (this.state.heightInches!=null || undefined)){
      let resultVal=((703*parseInt(this.state.weight))/Math.pow((12*parseInt(this.state.height)+parseInt(this.state.heightInches)),2)).toFixed(2);
      resultVal= parseInt(resultVal);
      this.setState({result: resultVal},()=>{
        this.bmiCheck(this.state.result);      
        this.setState({
          options: {
            series: [{
              data:[this.state.result],
              name: this.levelCheck
            }]
          }
        });
      });    
  
    }
  }
  
     bmiCheck=(result)=>{     
      switch(true){
        case result<18.5:
         this.levelCheck= "UnderWeight"
         break;
        case result>=18.5 && result<25: 
         this.levelCheck= "Normal"
         break;
        case result>=25 && result<30:
         this.levelCheck= "Overweight"
         break;
        case result>=30 && result<35: 
         this.levelCheck= "Obese Class-I"
         break;
        case result>=35 && result<40: 
         this.levelCheck= "Obese Class-II"
         break;
        case result>40: 
         this.levelCheck= "Obese Class-III"
         break;
        default:
          break;
      }
    }
     options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'BMI Chart'
      },
      xAxis: {
        categories: ['BMI']
      },
      yAxis: {
        min: 0,
         gridLineWidth: 0,
        title: {
          text: ''
        }
      },
      legend: {
        reversed: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'value',
        color:'#7a7777',
        data: [22],
          zones: [{
                value: 18.5,
                color: '#5cd5f7'
            }, {
                value: 25,
                color: '#5cf766'
            },
            {
                value: 30,
                color: '#f7a45c'
            },
            {
                color: '#e60000'
            }]
      }]
    };
      
    render(){
        return (
          <div className="App">
            <div className="col-xs-6">
              <h3 className="calculate-title">Calculate</h3>
              <div className="height-title">Height</div>
      
              <MDBContainer onSubmit={this.handleSubmit}>
                <MDBInputGroup
                  className="col-xs-3 input-box" 
                  id="number-class" 
                  containerClassName="mb-3 input-box"
                  type="number" 
                  append="ft" 
                  hint="height in feet" 
                  value={this.state.height} 
                  onChange={this.handleHeightChange}
                   />
              <MDBInputGroup  
                  className="col-xs-3 input-box" 
                  id="number-class" 
                  containerClassName="mb-3 input-box" 
                  type="number" 
                  append="in" 
                  hint="height in inches" 
                  onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 187 || e.keyCode === 189) && e.preventDefault() }
                  value={this.state.heightInches} 
                  onChange={this.handleHeightInchesChange}
                />
             </MDBContainer>
      
              <div className="height-title">Weight</div>
              <MDBContainer>
                  <MDBInputGroup  className="col-xs-3 input-box"  id= "number-class" containerClassName="mb-3 input-box" type="number" append="lbs" hint="weight in pounds" value={this.state.weight} 
                    onChange={this.handleWeightChange}
                    />
             </MDBContainer>
      
            <div className="row">
            <input type="submit"className="submit-button col-xs-8" onClick = {this.findResult}/>
            </div>
          </div>
          <div className="col-xs-6"> <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </div>
         
      </div>
        );
      }
      }
export default BmiType1;
      