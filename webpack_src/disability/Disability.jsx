import React from 'react';

class Disability extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleChange(field){
    const storedThis = this;
    return function (e) {
      storedThis.setState({[field]: e.target.value});
    };
  }

  render(){
    const {currentAge, retirementAge, currentSavings, immediateExpenses, additionalSavings, monthlyExpensesAmount, monthlyExpensesStart, monthlyExpensesEnds} = this.state;
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Current Age
          <input type="number" value={currentAge} placeholder='test' onChange={this.handleChange('currentAge')} />
        </label>
        <br />
        <label>
          Retirement Age
          <input type="number" value={retirementAge} placeholder='test' onChange={this.handleChange('retirementAge')} />
        </label>
        <br />
        <label>
          Savings
          <input type="number" value={currentSavings} placeholder='test' onChange={this.handleChange('currentSavings')} />
        </label>
        <br />
        <label>
          Immediate Expenses
          <input type="number" value={immediateExpenses} placeholder='test' onChange={this.handleChange('immediateExpenses')} />
        </label>
        <br />
        <label>
          Additional Annual Savings
          <input type="number" value={additionalSavings} placeholder='test' onChange={this.handleChange('additionalSavings')} />
        </label>
        <br />
        <label>
          Monthly Expenses
          <input type="number" value={monthlyExpensesAmount} placeholder='test' onChange={this.handleChange('monthlyExpensesAmount')} />
        </label>
        <br />
        <label>
          Monthly Expenses Start Year
          <input type="number" value={monthlyExpensesStart} placeholder='test' onChange={this.handleChange('monthlyExpensesStart')} />
        </label>
        <br />
        <label>
          Monthly Expenses End Year
          <input type="number" value={monthlyExpensesEnds} placeholder='test' onChange={this.handleChange('monthlyExpensesEnds')} />
        </label>
        <br />
      </form>
    );
  }
  
}

export default Disability;