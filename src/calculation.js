export const handleHeightChange=(event)=> {
    this.setState({height: event.target.value});
}
export const handleWeightChange=(event)=> {
    this.setState({weight: event.target.value});
  }
 export const  handleHeightInchesChange=(event)=>{
    if(event.target.value>11){
      alert("enter a value less than 12")
      event.target.value= event.target.value.slice(0,1);
      
    }    
    this.setState({heightInches: event.target.value});
  }
 export const handleSubmit=(event)=> {
    event.preventDefault();
  }
