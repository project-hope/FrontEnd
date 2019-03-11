import React from 'react';

import Disability from './disability/Disability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0
    };
  }

  render() {
    console.log("App");
    return (
      <Disability />
    );
  }
}

export default App;