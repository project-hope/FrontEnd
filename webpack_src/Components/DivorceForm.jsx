import React from 'react';
import '../css/form.css';

class Divorce extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentAge: undefined,
      earningLevel: "",
      currentSavingsBeforeDivorce: 0,
      currentSavingsAfterDivorce: 0,
      additionalAnnualSavings: 0,
      investmentChoice: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const storedThis = this;
    return function (e) {
      storedThis.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    return(
      <div>
        <form styleName="form" onSubmit={this.handleSubmit}>
          <label styleName="label">
            Current Age: 
            <input styleName="input" type="number" value={this.state.currentAge} onChange={this.handleChange} />
          </label>
          <br/>
          <label styleName="label">
            Earning Level: 
            <input styleName="input" type="number" value={this.state.earningLevel} onChange={this.handleChange} />
          </label>
          <br/>
          <label styleName="label">
            Current Savings Before Divorce: 
            <input styleName="input" type="number" value={this.state.currentSavingsBeforeDivorce} onChange={this.handleChange} />
          </label>
          <br/>
          <label styleName="label">
            Current Savings After Divorce: 
            <input styleName="input" type="number" value={this.state.currentSavingsAfterDivorce} onChange={this.handleChange} />
          </label>
          <br/>
          <label styleName="label">
            Additional Annual Savings: 
            <input styleName="input" type="number" value={this.state.additionalAnnualSavings} onChange={this.handleChange} />
          </label>
          <br/>
          <label styleName="label">
            Investment Choice: 
            <input styleName="input" type="number" value={this.state.investmentChoice} onChange={this.handleChange} />
          </label>
          <br/>
          <button styleName="button" type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Divorce;