import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: 0,
    };
  }

  render(){
    console.log("App");
    return(
      <div>App</div>
    );
  }
}

export default App;