import React from 'react';
import { Chart } from "react-google-charts";

import './App.css';

class App extends React.Component {
  state = {
    unit: 'week',
  }


  render() {
    return (
      <div className="App container">
        <h4 className="summary alert alert-success">Looks like someone's {this.state.unit} was awesome!</h4>
        <br />
        <h4>Let's look at your mood for the {this.state.unit}</h4>
        <div className="mood-chart">
          <Chart
            chartType="LineChart"
            data={[["Day of the Week", "Happiness Levels"], [new Date(2020, 1, 1), 5], [new Date(2020, 1, 2), -3], [new Date(2020, 1, 3), -7], [new Date(2020, 1, 4), 5], [new Date(2020, 1, 5), -1], [new Date(2020, 1, 6), 0], [new Date(2020, 1, 7), 5]]}
            width="100%"
            height="400px"
            options={{
              hAxis: {
                title: '',
                
              },
              vAxis: {
                title: '',
                textPosition: 'none',
              },
              series: {
                0: { curveType: 'function' },
              },
            }}
          />
        </div>
        <br />
        <h4>Here's what we think causes your moods</h4>
        <div className="temp">
          { //FOR KUNAL
            // Make a table with mood images on one side and causes on the other
          }
        </div>
        <br />
        <h4>We noticed that you care about these a lot</h4>
        <div className="temp">
          { //FOR SHAWN
            //Insert bubble graph of desires here
          }

        </div>
        <p>Introspect on these desires. In our experience, we notice that happiness levels are strongly related to your desires.</p>
        <p>People with fewer desires tend to be happier - eliminate desires by meeting them or deciding on what's truly important.</p>
        <h4>Congratulations! Here's what you did this week</h4>
        <div className="temp">
          { //FOR SHAWN FIRST
            //THEN FOR KUNAL
            //Insert list of accomplishments
          }
        </div>
        {

        }
      </div>
    );
  }

}

export default App;
