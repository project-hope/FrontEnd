import React from 'react';

// import Disability from './disability/Disability.jsx';
// import Divorce from  './divorce/Divorce.jsx';

import DisabilityForm from './Components/DisabilityForm.jsx';
import DivorceForm from './Components/DivorceForm.jsx';
import Graphs from './Components/Graphs.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDisability: false,
      showDivorce: false,
      chartVisible: false,
      portfolioChartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
      incomeChartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
    };

    this.returnHome = this.returnHome.bind(this);
    this.handleDisability = this.handleDisability.bind(this);
    this.handleDivorce = this.handleDivorce.bind(this);
    this.handleDisabilitySubmit = this.handleDisabilitySubmit.bind(this);
    this.handleDivorceSubmit = this.handleDivorceSubmit.bind(this);
  }

  returnHome(){
    this.setState({showDivorce: false});
    this.setState({showDisability: false});
  }

  handleDisability(){
    this.setState({showDivorce: false});
    this.setState({showDisability: true});
  }

  handleDivorce(){
    this.setState({showDivorce: true});
    this.setState({showDisability: false});
  }

  handleDisabilitySubmit(data){
    console.log("SUBMIT DISABILITY")
    console.log(data)
    this.setState({portfolioChartData: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      ]
    }});
    this.setState({incomeChartData: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      ]
    }});
    this.setState({chartVisible: true});
  }

  handleDivorceSubmit(data){
    console.log("SUBMIT DIVORCE")
    console.log(data)
    this.setState({portfolioChartData: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      ]
    }});
    this.setState({incomeChartData: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
      ]
    }});
    this.setState({chartVisible: true});
  }

  render() {
    console.log(this.state.chartVisible)
    console.log("STATE")
    console.log(this.state.showDisability)
    console.log(this.state.showDivorce)
    return (
      <div styleName="background">
        <div styleName="header">
          <h1 onClick={this.returnHome}>Project Hope</h1>
          {!this.state.showDivorce && !this.state.showDisability &&
            <div>
              <button onClick={this.handleDisability}>Disability</button>
              <button onClick={this.handleDivorce}>Divorce</button>
            </div>
          }
        </div>
        
        <div styleName="body">
          {this.state.showDisability && !this.state.showDivorce &&
            < DisabilityForm onSubmit={this.handleDisabilitySubmit} />
          }

          {this.state.showDivorce && !this.state.showDisability &&
            < DivorceForm onSubmit={this.handleDivorceSubmit} />
          }

          {(this.state.showDivorce || this.state.showDisability) &&
            < Graphs chartVisible={this.state.chartVisible} portfolioChartData={this.state.portfolioChartData} incomeChartData={this.state.incomeChartData} />
          }
        </div>
      </div>
    );
  }
}

export default App;