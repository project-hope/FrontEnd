import React from 'react';
import Chartist from 'chartist';
import './Disability.css';

class Disability extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.makeChart();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(field) {
    const storedThis = this;
    return function (e) {
      storedThis.setState({[field]: e.target.value});
    };
  }

  makeChart() {
    new Chartist.Line('.ct-chart', {
      labels: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
      ],
      series: [
        [
          12, 9, 7, 8, 5
        ],
        [
          2, 1, 3.5, 7, 3
        ],
        [1, 3, 4, 5, 6]
      ]
    }, {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    });
  }

  render() {
    const {
      currentAge,
      retirementAge,
      currentSavings,
      immediateExpenses,
      additionalSavings,
      monthlyExpensesAmount,
      monthlyExpensesStart,
      monthlyExpensesEnds
    } = this.state;

    return (
      <div styleName="red">
        <form onSubmit={this.handleSubmit}>
          <label>
            Current Age
            <input
              type="number"
              value={currentAge}
              placeholder='Current Age'
              onChange={this.handleChange('currentAge')}/>
          </label>
          <br/>
          <label>
            Retirement Age
            <input
              type="number"
              value={retirementAge}
              placeholder='Retirement Age'
              onChange={this.handleChange('retirementAge')}/>
          </label>
          <br/>
          <label>
            Savings
            <input
              type="number"
              value={currentSavings}
              placeholder='Savings'
              onChange={this.handleChange('currentSavings')}/>
          </label>
          <br/>
          <label>
            Immediate Expenses
            <input
              type="number"
              value={immediateExpenses}
              placeholder='Immediate Expenses'
              onChange={this.handleChange('immediateExpenses')}/>
          </label>
          <br/>
          <label>
            Additional Annual Savings
            <input
              type="number"
              value={additionalSavings}
              placeholder='Additional Annual Savings'
              onChange={this.handleChange('additionalSavings')}/>
          </label>
          <br/>
          <label>
            Additional Monthly Expenses
            <input
              type="number"
              value={monthlyExpensesAmount}
              placeholder='Addional Monthly Expenses Amount'
              onChange={this.handleChange('monthlyExpensesAmount')}/>
          </label>
          <br/>
          <label>
            Monthly Expenses Start Year
            <input
              type="number"
              value={monthlyExpensesStart}
              placeholder='Monthly Expenses Start Year'
              onChange={this.handleChange('monthlyExpensesStart')}/>
          </label>
          <br/>
          <label>
            Monthly Expenses End Year
            <input
              type="number"
              value={monthlyExpensesEnds}
              placeholder='Monthly Expenses End Year'
              onChange={this.handleChange('monthlyExpensesEnds')}/>
          </label>
          <br/>
        </form>
      </div>
    );
  }

}

export default Disability;