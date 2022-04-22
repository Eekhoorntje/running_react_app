    // src/App.js

    import React, {Component} from 'react';
    import Activities from './components/activities';

    class App extends Component {

      state = {
        activities: []
      }

      componentDidMount() {
        fetch('http://www.andygoesrunning.com:8080/garmin-activities')
        .then(res => res.json())
        .then((data) => {
          this.setState({ activities: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <Activities activities={this.state.activities}/>
        )
      }
    }

    export default App;