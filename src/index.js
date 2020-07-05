


import React from 'react';
import ReactDOM from 'react-dom';
function FormattedDate(props) {
  return <h1 style ={{
    fontSize: '3em',
  color:'green'}}>{props.date.toLocaleTimeString()}.</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div
        style={{
          color: "white",
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          backgroundColor: 'black',
          fontSize: '1.5em',
          lineHeight: '0.1',
          letterSpacing: '0.2em',
          fontFamily: 'cursive',
          borderRadius:'1em'

        }}
      >
        <h1 >Hello Friends!</h1>
        <h1 >The time is</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
